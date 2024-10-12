import { legalLinks } from '@/assets/data/links'
import { Copyright } from 'lucide-react'
import Link from 'next/link'
import { Facebook, Instagram, Messenger, Twitter, WhatsApp } from './icons'
import { Mark } from './mark'
import { Typography } from './typography'

const Footer = () => (
    <>
        <div className='mt-16 flex items-center justify-center md:mt-32 lg:mt-48'>
            <Mark
                className='-mb-1 size-24 fill-primary sm:-mb-2 sm:size-32 md:size-40'
                flourish
            />
        </div>
        <footer className='flex flex-col gap-12 bg-primary pb-6 pt-12 md:pb-4'>
            <div className='container flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:items-end'>
                <div className='order-2 flex items-center gap-x-2 text-background md:order-1'>
                    <Copyright className='h-3 w-3' />
                    <Typography
                        as='span'
                        className='max-w-fit text-sm md:w-full'>
                        {new Date().getFullYear()}{' '}
                        <Link
                            href={process.env.APP_URL!}
                            className='underline-offset-2 hover:underline'>
                            {process.env.APP_TITLE!}
                        </Link>
                    </Typography>
                </div>

                <div className='order-1 flex flex-col items-center gap-4 md:order-2'>
                    <div className='flex items-center gap-x-2 text-background'>
                        <a
                            title='Facebook'
                            aria-label='Facebook'
                            href={process.env.APP_SOCIAL_FACEBOOK!}
                            target='_blank'
                            className='cursor-pointer transition-all duration-200 hover:scale-125'>
                            <Facebook className='size-6' />
                        </a>
                        <a
                            title='Messenger'
                            aria-label='Messenger'
                            href={process.env.APP_SOCIAL_MESSENGER!}
                            target='_blank'
                            className='cursor-pointer transition-all duration-200 hover:scale-125'>
                            <Messenger className='size-6' />
                        </a>
                        <a
                            title='Instagram'
                            aria-label='Instagram'
                            href={process.env.APP_SOCIAL_INSTAGRAM!}
                            target='_blank'
                            className='cursor-pointer transition-all duration-200 hover:scale-125'>
                            <Instagram className='size-6' />
                        </a>
                        <a
                            title='WhatsApp'
                            aria-label='WhatsApp'
                            href={process.env.APP_SOCIAL_WHATSAPP!}
                            target='_blank'
                            className='cursor-pointer transition-all duration-200 hover:scale-125'>
                            <WhatsApp className='size-6' />
                        </a>
                        <a
                            title='Twitter'
                            aria-label='Twitter'
                            href={process.env.APP_SOCIAL_TWITTER!}
                            target='_blank'
                            className='cursor-pointer transition-all duration-200 hover:scale-125'>
                            <Twitter className='size-6' />
                        </a>
                    </div>
                </div>

                <div className='order-3 flex flex-col items-center gap-4 md:flex-row'>
                    <div className='flex items-center gap-x-2 text-background'>
                        {legalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='text-sm underline-offset-2 transition-all duration-200 hover:underline'>
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
