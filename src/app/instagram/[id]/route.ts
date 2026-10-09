import { mediaPathname } from '@/lib/instagram'
import { get } from '@vercel/blob'

/**
 * Serve a synced Instagram image from private Blob storage
 * Media ids never change content, so responses are cached for a year
 */
export const GET = async (
    _request: Request,
    { params }: RouteContext<'/instagram/[id]'>
) => {
    const { id } = await params

    if (!/^\d+$/.test(id)) {
        return new Response('Not found', { status: 404 })
    }

    const result = await get(mediaPathname(id), { access: 'private' })

    if (!result || result.statusCode !== 200) {
        return new Response('Not found', { status: 404 })
    }

    return new Response(result.stream, {
        headers: {
            'Content-Type': result.blob.contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Content-Type-Options': 'nosniff'
        }
    })
}
