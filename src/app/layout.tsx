import '@/assets/styles/globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Comfortaa as FontSans } from 'next/font/google'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL!),
    title: {
        default: process.env.APP_TITLE!,
        template: `%s - ${process.env.APP_TITLE!}`
    },
    description: process.env.APP_STRAPLINE!,
    creator: process.env.APP_COMPANY!
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
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
                {children}
            </body>
        </html>
    )
}
