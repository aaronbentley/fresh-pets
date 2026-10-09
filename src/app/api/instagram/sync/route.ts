import { syncInstagram } from '@/lib/instagram'
import { revalidatePath } from 'next/cache'
import { timingSafeEqual } from 'node:crypto'

/**
 * Instagram sync, run daily by Vercel Cron (see vercel.ts)
 * Vercel sends `Authorization: Bearer $CRON_SECRET` with cron requests
 */
const isAuthorized = (request: Request) => {
    const secret = process.env.CRON_SECRET
    const header = request.headers.get('authorization')

    if (!secret || !header) {
        return false
    }

    const expected = Buffer.from(`Bearer ${secret}`)
    const received = Buffer.from(header)

    return (
        expected.length === received.length &&
        timingSafeEqual(expected, received)
    )
}

export const GET = async (request: Request) => {
    if (!isAuthorized(request)) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const result = await syncInstagram()

        revalidatePath('/gallery')

        return Response.json(result)
    } catch (error) {
        console.error('Instagram sync failed', error)

        return Response.json({ error: 'Sync failed' }, { status: 500 })
    }
}
