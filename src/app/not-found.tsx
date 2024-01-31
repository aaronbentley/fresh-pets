import doggoSeven from '@/assets/img/doggo-seven.jpg'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Not Found',
    description: 'Looks like this page got caught chasing its tail!'
}

const NotFound = async () => (
    <>
        <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand  after:bg-opacity-75 after:backdrop-contrast-150 h-screen'>
            <Image
                src={doggoSeven}
                alt='Doggo'
                placeholder='blur'
                priority={true}
                sizes='100vw'
                fill={true}
                className='w-full object-cover '
            />
            <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center h-screen'>
                <PageHeroHeading className='text-background drop-shadow-sm'>
                    Page not found
                </PageHeroHeading>

                <PageHeroDescription className='text-background drop-shadow-sm'>
                    Looks like this page got caught chasing its tail!
                </PageHeroDescription>

                <Link
                    href='/'
                    className={cn(
                        buttonVariants({
                            variant: 'default',
                            size: 'lg'
                        }),
                        'w-min',
                        'font-bold',
                        'my-8'
                    )}>
                    Head home
                </Link>
            </PageHero>
        </div>
    </>
)

export default NotFound
