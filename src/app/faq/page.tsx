import doggoFour from '@/assets/img/doggo-four.jpg'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'FAQ'
}

const Faq = () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:dark:bg-brand-light after:bg-opacity-60 after:dark:bg-opacity-60 after:backdrop-contrast-125 after:dark:backdrop-contrast-125 h-96'>
                <Image
                    src={doggoFour}
                    alt='Doggo'
                    placeholder='blur'
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        FAQ
                    </PageHeroHeading>

                    <PageHeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Get answers to your most frequently asked questions
                    </PageHeroDescription>
                </PageHero>
            </div>
        </>
    )
}

export default Faq
