/**
 * Media item as returned by the Instagram API with Instagram Login
 * @link https://developers.facebook.com/docs/instagram-platform/reference/instagram-media
 */
export type InstagramApiMedia = {
    id: string
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
    media_url?: string
    thumbnail_url?: string
    caption?: string
    permalink: string
    timestamp: string
}

/**
 * Gallery item stored in Vercel Blob by the Instagram sync
 */
export type InstagramMedia = {
    id: string
    caption: string
    permalink: string
    mediaType: InstagramApiMedia['media_type']
    timestamp: string
}
