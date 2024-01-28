import doggoOne from '@/assets/img/doggo-one.jpg'
import DynamicMap from '@/components/dynamic-map'
import { Email, Messenger, Phone, WhatsApp } from '@/components/icons'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { PageSection, PageSectionHeading } from '@/components/page-section'
import { Typography } from '@/components/typography'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Contact'
}

const Contact = () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:dark:bg-brand-light after:bg-opacity-60 after:bg-opacity-70 after:dark:bg-opacity-70 after:backdrop-contrast-150 after:dark:backdrop-contrast-150 h-96'>
                <Image
                    src={doggoOne}
                    alt='Doggo'
                    placeholder='blur'
                    priority={true}
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Contact us
                    </PageHeroHeading>

                    <PageHeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        We&apos;d love to hear from you
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-brand-dark dark:text-brand-light'>
                        Get in touch
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero lectus, euismod sit amet vestibulum sed.
                    </Typography>
                </PageSection>

                <div className='grid grid-cols-2 lg:grid-cols-4 max-w-[920px] mx-auto gap-6'>
                    <a
                        title={`Call ${process.env.APP_TITLE!}`}
                        aria-label='Phone'
                        href={`tel://${process.env.APP_CONTACT_PHONE!}`}
                        target='_blank'
                        className='cursor-pointer text-brand-dark dark:text-brand-light group'>
                        <div className='flex flex-col items-center gap-6 hover:bg-brand-dark/20 hover:dark:bg-brand-light/20 p-8 lg:p-12 rounded-lg'>
                            <Phone className='transition-all duration-200 size-6 sm:size-7 md:size-8 group-hover:scale-125' />
                            <Typography
                                muted
                                className='text-sm sm:text-base font-black group-hover:text-brand-dark hover:dark:text-brand-light'>
                                07801 255796
                            </Typography>
                        </div>
                    </a>

                    <a
                        title={`Messenger ${process.env.APP_TITLE!}`}
                        aria-label='Messenger'
                        href={process.env.APP_SOCIAL_MESSENGER!}
                        target='_blank'
                        className='cursor-pointer text-brand-dark dark:text-brand-light group'>
                        <div className='flex flex-col items-center gap-6 hover:bg-brand-dark/20 hover:dark:bg-brand-light/20 p-8 lg:p-12 rounded-lg'>
                            <Messenger className='transition-all duration-200 size-6 sm:size-7 md:size-8 group-hover:scale-125' />
                            <Typography
                                muted
                                className='text-sm sm:text-base font-black group-hover:text-brand-dark hover:dark:text-brand-light'>
                                @freshpetsiow
                            </Typography>
                        </div>
                    </a>

                    <a
                        title={`WhatsApp ${process.env.APP_TITLE!}`}
                        aria-label='WhatsApp'
                        href={process.env.APP_SOCIAL_WHATSAPP!}
                        target='_blank'
                        className='cursor-pointer text-brand-dark dark:text-brand-light group'>
                        <div className='flex flex-col items-center gap-6 hover:bg-brand-dark/20 hover:dark:bg-brand-light/20 p-8 lg:p-12 rounded-lg'>
                            <WhatsApp className='transition-all duration-200 size-6 sm:size-7 md:size-8 group-hover:scale-125' />
                            <Typography
                                muted
                                className='text-sm sm:text-base font-black group-hover:text-brand-dark hover:dark:text-brand-light'>
                                07801 255796
                            </Typography>
                        </div>
                    </a>

                    <a
                        title={`Email ${process.env.APP_TITLE!}`}
                        aria-label='Email'
                        href={`mailto:${process.env.APP_CONTACT_EMAIL!}`}
                        target='_blank'
                        className='cursor-pointer text-brand-dark dark:text-brand-light group'>
                        <div className='flex flex-col items-center gap-6 hover:bg-brand-dark/20 hover:dark:bg-brand-light/20 p-8 lg:p-12 rounded-lg'>
                            <Email className='transition-all duration-200 size-6 sm:size-7 md:size-8 group-hover:scale-125' />
                            <Typography
                                muted
                                className='text-sm sm:text-base font-black group-hover:text-brand-dark hover:dark:text-brand-light'>
                                freshpets@icloud.com
                            </Typography>
                        </div>
                    </a>
                </div>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-brand-dark dark:text-brand-light'>
                        Where to find us
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-black'>
                        [Parking details] - Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec libero lectus,
                        euismod sit amet vestibulum sed.
                    </Typography>

                    <div className='grid lg:grid-cols-3 w-full gap-12 py-12'>
                        <div className='w-full lg:col-span-2'>
                            <DynamicMap />
                        </div>
                        <div>
                            <Typography variant='address'>
                                <Typography variant='strong'>
                                    {process.env.APP_TITLE!}
                                </Typography>
                                <br />
                                25 Crocker Street
                                <br />
                                Newport
                                <br />
                                Isle of Wight
                                <br />
                                PO30 5DB
                            </Typography>
                        </div>
                    </div>
                </PageSection>
            </div>
        </>
    )
}

export default Contact
