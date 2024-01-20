/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.cdninstagram.com'
            }
        ],
        formats: ['image/avif', 'image/webp']
    },
    experimental: {
        ppr: false
    }
}

module.exports = nextConfig
