import doggoOne from '@/assets/img/doggo-one.jpg'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Privacy'
}

const Privacy = () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:dark:bg-brand-light after:bg-opacity-60 after:dark:bg-opacity-60 after:backdrop-contrast-125 after:dark:backdrop-contrast-125 h-96'>
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
                        Privacy
                    </PageHeroHeading>

                    <PageHeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Our Privacy Policy explains what personal information we
                        collect, how we use personal information and your
                        privacy rights
                    </PageHeroDescription>
                </PageHero>
            </div>
        </>
    )
}

export default Privacy
