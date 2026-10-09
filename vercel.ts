import type { VercelConfig } from '@vercel/config/v1'

export const config: VercelConfig = {
    framework: 'nextjs',
    crons: [
        // Refresh the Instagram token and copy new posts into Blob storage
        { path: '/api/instagram/sync', schedule: '0 6 * * *' }
    ]
}
