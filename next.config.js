/** @type {import('next').NextConfig} */
const nextConfig = {
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
    },
    experimental: {
        ppr: false
    }
}

module.exports = nextConfig
