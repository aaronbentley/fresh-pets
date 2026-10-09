import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'maps.googleapis.com'
            }
        ],
        formats: ['image/avif', 'image/webp']
    }
}

export default nextConfig
