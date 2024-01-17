import { legalLinks, links } from '@/assets/data/links'
import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
    /**
     * Loop through paths and build sitemap objects
     */
    return [
        // Add frontpage to sitemap
        {
            href: '/',
            label: 'Frontpage'
        },
        // Add nav links to sitemap
        ...links,
        // Add legal links to sitemap
        ...legalLinks
    ].map((path) => {
        const url = new URL(path.href, process.env.APP_URL!)
        const lastModified = new Date()

        return {
            url: url.toString(),
            lastModified
        }
    })
}

export default sitemap
