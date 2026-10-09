import '@/assets/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import TailwindIndicator from '@/components/tailwind-indicator'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Comfortaa as FontSans } from 'next/font/google'
import { Suspense } from 'react'

/**
 * Load fonts
 */
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-comfortaa'
})

/**
 * Generate viewport
 */
export const generateViewport = (): Viewport => ({
    themeColor: '#00A29E'
})

/**
 * Generate metadata
 */
export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL!),
    title: {
        default: process.env.APP_TITLE!,
        template: `%s - ${process.env.APP_TITLE!}`
    },
    description: process.env.APP_STRAPLINE!,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: process.env.APP_TITLE!,
        title: `${process.env.APP_TITLE!} - Pet Grooming`,
        description: process.env.APP_STRAPLINE!
    },
    creator: process.env.APP_COMPANY!
}

// Compose JSON-LD structured data
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.fresh-pets.co.uk/#organization',
    url: process.env.APP_URL!,
    name: process.env.APP_TITLE!,
    telephone: '+447801255796',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '25 Crocker Street',
        addressLocality: 'Newport',
        postalCode: 'PO30 5DB',
        addressCountry: 'GB'
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
        opens: '09:00',
        closes: '17:00'
    },
    sameAs: [
        process.env.APP_SOCIAL_FACEBOOK!,
        process.env.APP_SOCIAL_INSTAGRAM!,
        process.env.APP_SOCIAL_TWITTER!
    ]
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html
            lang='en'
            className={cn([
                // 'light',
                'scroll-pt-24'
            ])}
            suppressHydrationWarning>
            <body
                className={cn([
                    'min-h-screen',
                    'font-sans',
                    'antialiased',
                    fontSans.variable
                ])}>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
                <div className='relative flex min-h-screen flex-col'>
                    <Header />
                    <div className='flex min-h-max flex-1 flex-col items-center justify-start gap-y-4 md:gap-y-12'>
                        <Suspense>{children}</Suspense>
                    </div>
                    <Footer />
                </div>
                <Analytics />
                <TailwindIndicator />
            </body>
        </html>
    )
}

export default RootLayout
