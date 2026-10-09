import 'server-only'

import type { InstagramApiMedia, InstagramMedia } from '@/types'
import { del, get, list, put } from '@vercel/blob'

/**
 * Instagram gallery storage
 *
 * Instagram media URLs are signed CDN links that expire, so they are never
 * rendered directly. A daily cron copies each image into a private Vercel
 * Blob store and the site serves them from /instagram/[id].
 */
const GRAPH_URL = 'https://graph.instagram.com'
const TOKEN_PATH = 'instagram/token.json'
const FEED_PATH = 'instagram/feed.json'
const MEDIA_PREFIX = 'instagram/media/'
const MEDIA_LIMIT = 15
const MAX_MEDIA_BYTES = 15 * 1024 * 1024

// Refresh weekly; long-lived tokens last 60 days and must be at least 24h old to refresh
const TOKEN_REFRESH_AFTER_MS = 7 * 24 * 60 * 60 * 1000

type StoredToken = {
    token: string
    refreshedAt: string
}

export const mediaPathname = (id: string) => `${MEDIA_PREFIX}${id}`

const readJson = async <T>(pathname: string): Promise<T | null> => {
    const result = await get(pathname, { access: 'private', useCache: false })

    if (!result || result.statusCode !== 200) {
        return null
    }

    return (await new Response(result.stream).json()) as T
}

const writeJson = (pathname: string, data: unknown) =>
    put(pathname, JSON.stringify(data), {
        access: 'private',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
        cacheControlMaxAge: 60
    })

/**
 * Get the stored token, falling back to INSTAGRAM_SEED_TOKEN on first run
 */
const getToken = async (): Promise<StoredToken> => {
    const stored = await readJson<StoredToken>(TOKEN_PATH)

    if (stored?.token) {
        return stored
    }

    const seed = process.env.INSTAGRAM_SEED_TOKEN

    if (!seed) {
        throw new Error(
            'No Instagram token stored and INSTAGRAM_SEED_TOKEN is not set'
        )
    }

    // Unknown age, so treat the seed as due for a refresh
    return { token: seed, refreshedAt: new Date(0).toISOString() }
}

/**
 * Refresh a long-lived token and persist it
 * @link https://developers.facebook.com/docs/instagram-platform/reference/refresh_access_token
 */
const refreshToken = async (current: StoredToken): Promise<StoredToken> => {
    const url = new URL('/refresh_access_token', GRAPH_URL)
    url.searchParams.set('grant_type', 'ig_refresh_token')
    url.searchParams.set('access_token', current.token)

    const response = await fetch(url, { cache: 'no-store' })

    if (!response.ok) {
        throw new Error(`Instagram token refresh failed (${response.status})`)
    }

    const { access_token } = (await response.json()) as {
        access_token?: string
    }

    if (!access_token) {
        throw new Error('Instagram token refresh returned no access_token')
    }

    const refreshed = {
        token: access_token,
        refreshedAt: new Date().toISOString()
    }

    await writeJson(TOKEN_PATH, refreshed)

    return refreshed
}

const fetchMedia = async (token: string): Promise<InstagramApiMedia[]> => {
    const url = new URL('/me/media', GRAPH_URL)
    url.searchParams.set(
        'fields',
        'id,media_type,media_url,thumbnail_url,caption,permalink,timestamp'
    )
    url.searchParams.set('limit', String(MEDIA_LIMIT))
    url.searchParams.set('access_token', token)

    const response = await fetch(url, { cache: 'no-store' })

    if (!response.ok) {
        throw new Error(`Instagram media request failed (${response.status})`)
    }

    const { data } = (await response.json()) as { data?: InstagramApiMedia[] }

    return data ?? []
}

/**
 * Copy one media item's image into Blob storage
 */
const storeMedia = async (media: InstagramApiMedia) => {
    // Videos only expose a still via thumbnail_url
    const source =
        media.media_type === 'VIDEO' ? media.thumbnail_url : media.media_url

    if (!source) {
        return false
    }

    const response = await fetch(source, { cache: 'no-store' })
    const contentType = response.headers.get('content-type') ?? ''
    const contentLength = Number(response.headers.get('content-length') ?? 0)

    if (
        !response.ok ||
        !contentType.startsWith('image/') ||
        contentLength > MAX_MEDIA_BYTES
    ) {
        return false
    }

    await put(mediaPathname(media.id), await response.arrayBuffer(), {
        access: 'private',
        contentType,
        addRandomSuffix: false,
        allowOverwrite: true
    })

    return true
}

const listStoredMediaIds = async () => {
    const ids = new Map<string, string>()
    let cursor: string | undefined

    do {
        const page = await list({ prefix: MEDIA_PREFIX, cursor })

        for (const blob of page.blobs) {
            ids.set(blob.pathname.slice(MEDIA_PREFIX.length), blob.url)
        }

        cursor = page.hasMore ? page.cursor : undefined
    } while (cursor)

    return ids
}

/**
 * Refresh the token if due, copy new images into Blob, write the feed and
 * delete images that are no longer in it
 */
export const syncInstagram = async () => {
    let token = await getToken()
    let tokenRefreshed = false

    if (
        Date.now() - new Date(token.refreshedAt).getTime() >
        TOKEN_REFRESH_AFTER_MS
    ) {
        token = await refreshToken(token)
        tokenRefreshed = true
    }

    const media = await fetchMedia(token.token)
    const stored = await listStoredMediaIds()

    const feed: InstagramMedia[] = []
    let added = 0

    for (const item of media) {
        if (!stored.has(item.id)) {
            if (!(await storeMedia(item))) {
                continue
            }

            added++
        }

        feed.push({
            id: item.id,
            caption: item.caption ?? '',
            permalink: item.permalink,
            mediaType: item.media_type,
            timestamp: item.timestamp
        })
    }

    await writeJson(FEED_PATH, feed)

    const keep = new Set(feed.map((item) => item.id))
    const stale = [...stored].filter(([id]) => !keep.has(id))

    if (stale.length) {
        await del(stale.map(([, url]) => url))
    }

    return { tokenRefreshed, items: feed.length, added, removed: stale.length }
}

/**
 * Read the synced gallery feed; empty when nothing has been synced yet
 */
export const getInstagramFeed = async (): Promise<InstagramMedia[]> => {
    try {
        return (await readJson<InstagramMedia[]>(FEED_PATH)) ?? []
    } catch (error) {
        console.warn('Unable to read Instagram feed', error)
        return []
    }
}
