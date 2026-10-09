import doggoTwo from '@/assets/img/doggo-two.jpg'
import { Instagram } from '@/components/icons'
import { GridLoader } from '@/components/loaders'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { PageSection, PageSectionHeading } from '@/components/page-section'
import { Typography } from '@/components/typography'
import { Button, buttonVariants } from '@/components/ui/button'
import { getInstagramFeed } from '@/lib/instagram'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'

// Safety net; the Instagram sync cron revalidates this page after each run
export const revalidate = 86400 // 24 hours

export const metadata: Metadata = {
    title: 'Gallery'
}

const InstagramGallery = async () => {
    const feed = await getInstagramFeed()

    if (!feed.length) {
        return (
            <Typography
                variant='lead'
                className='text-center'>
                Catch our latest grooms over on{' '}
                <a
                    href={process.env.APP_SOCIAL_INSTAGRAM!}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-bold text-primary underline-offset-4 hover:underline'>
                    Instagram
                </a>
            </Typography>
        )
    }

    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {feed.map((media, index) => (
                <div
                    key={media.id}
                    className='group relative aspect-square overflow-hidden rounded-lg shadow-md'>
                    <Image
                        src={`/instagram/${media.id}/`}
                        alt={media.caption || 'Fresh Pets on Instagram'}
                        priority={index < 6}
                        fill={true}
                        sizes='(max-width: 768px) 100vw, (min-width: 769px) 33vw'
                        className='w-full bg-primary/50 object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105'
                    />

                    <div className='absolute right-4 bottom-4 z-10 flex flex-col items-center justify-center opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
                        <a
                            href={media.permalink}
                            title='View on Instagram'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-xl bg-primary/60 p-2 backdrop-contrast-125 transition-colors duration-200 ease-in-out'>
                            <Instagram className='size-6 stroke-background' />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Gallery = async () => {
    return (
        <>
            <div className='relative min-h-[30vh] w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-primary/75 after:backdrop-contrast-150 sm:min-h-[35vh] md:min-h-[40vh] xl:min-h-[50vh]'>
                <Image
                    src={doggoTwo}
                    alt='Doggo'
                    placeholder='blur'
                    priority={true}
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-background drop-shadow-xs'>
                        Pupper Gallery
                    </PageHeroHeading>

                    <PageHeroDescription className='text-background drop-shadow-xs'>
                        Fur-ever fabulous, ready for a night on the town
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-primary'>
                        Woofin&apos; for the &apos;gram
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='font-bold md:w-2/3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero lectus, euismod sit amet vestibulum sed.
                    </Typography>

                    <Button
                        nativeButton={false}
                        render={
                            <a
                                href={process.env.APP_SOCIAL_INSTAGRAM!}
                                title='Follow us on Instagram'
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                        }
                        className={cn(
                            buttonVariants({
                                variant: 'default',
                                size: 'sm'
                            }),
                            'font-bold',
                            'hover:cursor-pointer'
                        )}>
                        Follow us on Instagram
                    </Button>
                </PageSection>
            </div>

            <div className='container mx-auto flex max-w-[1080px] flex-col gap-6'>
                <Suspense fallback={<GridLoader items={9} />}>
                    <InstagramGallery />
                </Suspense>
            </div>
        </>
    )
}

export default Gallery
