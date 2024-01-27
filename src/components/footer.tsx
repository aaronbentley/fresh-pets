import { legalLinks } from '@/assets/data/links'
import { Copyright } from 'lucide-react'
import Link from 'next/link'
import {
    Facebook,
    Instagram,
    Messenger,
    Twitter,
    WhatsApp
} from './brand-icons'
import { Mark } from './mark'
import { Typography } from './typography'

const Footer = () => (
    <>
        <div className='flex justify-center items-center mt-16 md:mt-32 lg:mt-48'>
            <Mark className='size-24 sm:size-32 md:size-40 fill-brand-dark dark:fill-brand-light -mb-1 sm:-mb-2' />
        </div>
        <footer className='pb-6 pt-12  md:pb-4 bg-brand-dark dark:bg-brand-light flex flex-col gap-12'>
            <div className='container flex flex-col items-center md:items-end justify-between gap-4 py-4 md:flex-row'>
                <div className='flex items-center gap-x-2 order-2 md:order-1 text-background'>
                    <Copyright className='w-3 h-3' />
                    <Typography
                        as='span'
                        className='md:w-full max-w-fit text-sm'>
                        {new Date().getFullYear()}{' '}
                        <Link
                            href={process.env.APP_URL!}
                            className='underline-offset-2 hover:underline'>
                            {process.env.APP_TITLE!}
                        </Link>
                    </Typography>
                </div>

                <div className='flex flex-col items-center gap-4 order-1 md:order-2'>
                    <div className='flex items-center gap-x-2 text-background'>
                        <a
                            title='Facebook'
                            aria-label='Facebook'
                            href={process.env.APP_SOCIAL_FACEBOOK!}
                            target='_blank'
                            className='transition-all duration-200 cursor-pointer hover:scale-125'>
                            <Facebook className='size-6' />
                        </a>
                        <a
                            title='Messenger'
                            aria-label='Messenger'
                            href={process.env.APP_SOCIAL_MESSENGER!}
                            target='_blank'
                            className='transition-all duration-200 cursor-pointer hover:scale-125'>
                            <Messenger className='size-6' />
                        </a>
                        <a
                            title='Instagram'
                            aria-label='Instagram'
                            href={process.env.APP_SOCIAL_INSTAGRAM!}
                            target='_blank'
                            className='transition-all duration-200 cursor-pointer hover:scale-125'>
                            <Instagram className='size-6' />
                        </a>
                        <a
                            title='WhatsApp'
                            aria-label='WhatsApp'
                            href={process.env.APP_SOCIAL_WHATSAPP!}
                            target='_blank'
                            className='transition-all duration-200 cursor-pointer hover:scale-125'>
                            <WhatsApp className='size-6' />
                        </a>
                        <a
                            title='Twitter'
                            aria-label='Twitter'
                            href={process.env.APP_SOCIAL_TWITTER!}
                            target='_blank'
                            className='transition-all duration-200 cursor-pointer hover:scale-125'>
                            <Twitter className='size-6' />
                        </a>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center gap-4 order-3'>
                    <div className='flex items-center gap-x-2 text-background'>
                        {legalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='text-sm transition-all duration-200 underline-offset-2 hover:underline'>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    </>
)

export default Footer
