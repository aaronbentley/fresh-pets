import '@/assets/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import TailwindIndicator from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Comfortaa as FontSans } from 'next/font/google'
import { Suspense } from 'react'

/**
 * Load fonts
 */
const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

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
    creator: process.env.APP_COMPANY!
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html
            lang='en'
            className={cn(['light', 'scroll-pt-20'])}
            suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange={true}>
                    <div className='relative flex min-h-screen flex-col'>
                        <Header />
                        <div className='flex-1 flex min-h-max flex-col items-center justify-start gap-y-4 md:gap-y-12'>
                            <Suspense>{children}</Suspense>
                        </div>
                        <Footer />
                    </div>
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
