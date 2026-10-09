import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maps.googleapis.com'
            }
        ],
        formats: ['image/avif', 'image/webp']
    },
    redirects: async () => [
        // The old Gatsby site's team page
        { source: '/team/', destination: '/about/', permanent: true }
    ]
}

export default nextConfig
