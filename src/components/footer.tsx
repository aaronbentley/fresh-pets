import { legalLinks } from '@/assets/data/links'
import { Copyright } from 'lucide-react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from './brand-icons'
import { Mark } from './mark'
import { Typography } from './typography'

const Footer = () => (
    <footer className='py-6 md:px-8 md:pt-12 lg:pt-24 md:pb-4 bg-brand-dark'>
        <div className='container flex flex-col items-center md:items-end justify-between gap-4 py-4 md:flex-row text-stone-400 dark:text-stone-600 text-sm'>
            <div className='flex items-center gap-x-2 order-2 md:order-1'>
                <Copyright className='w-3 h-3 text-stone-50' />
                <Typography
                    as='span'
                    className='text-stone-50 md:w-full max-w-fit text-sm'>
                    {new Date().getFullYear()}{' '}
                    <Link
                        href={process.env.APP_URL!}
                        className='text-stone-50 underline-offset-2 hover:underline'>
                        {process.env.APP_TITLE!}
                    </Link>
                </Typography>
            </div>

            <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
                <Mark className='w-8 h-8 fill-brand-light' />

                <div className='flex items-center gap-x-2'>
                    <a
                        title='Facebook'
                        aria-label='Facebook'
                        href={process.env.APP_SOCIAL_FACEBOOK!}
                        target='_blank'
                        className='transition-all duration-200 hover:text-pink-500 cursor-pointer hover:scale-125'>
                        <Facebook className='size-4 text-brand-light' />
                    </a>
                    <a
                        title='Twitter'
                        aria-label='Twitter'
                        href={process.env.APP_SOCIAL_TWITTER!}
                        target='_blank'
                        className='transition-all duration-200 hover:text-pink-500 cursor-pointer hover:scale-125'>
                        <Twitter className='size-4 text-brand-light' />
                    </a>
                    <a
                        title='Instagram'
                        aria-label='Instagram'
                        href={process.env.APP_SOCIAL_INSTAGRAM!}
                        target='_blank'
                        className='transition-all duration-200 hover:text-pink-500 cursor-pointer hover:scale-125'>
                        <Instagram className='size-4 text-brand-light' />
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-4 order-3'>
                <div className='flex items-center gap-x-2'>
                    {legalLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className='text-stone-50 transition-all duration-200 underline-offset-2 hover:underline'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
