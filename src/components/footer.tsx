import { legalLinks } from '@/assets/data/links'
import { Copyright } from 'lucide-react'
import Link from 'next/link'

const Footer = () => (
    <footer className='py-6 md:px-8 md:pt-12 lg:pt-24 md:pb-4'>
        <div className='container flex flex-col items-center justify-between gap-4 py-4 md:flex-row text-stone-400 dark:text-stone-600 text-sm'>
            <div className='flex items-center gap-x-2'>
                <Copyright className='w-3 h-3' />
                <span>
                    {new Date().getFullYear()}{' '}
                    <a
                        href={process.env.APP_URL!}
                        target='_blank'
                        className='hover:text-brand'>
                        {process.env.APP_TITLE!}
                    </a>
                    . All rights reserved.
                </span>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='flex items-center gap-x-2'>
                    {legalLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className='transition-all duration-200 hover:text-brand'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
