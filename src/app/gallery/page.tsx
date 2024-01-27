import doggoTwo from '@/assets/img/doggo-two.jpg'
import { Instagram } from '@/components/brand-icons'
import { GridLoader } from '@/components/loaders'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { PageSection, PageSectionHeading } from '@/components/page-section'
import { Typography } from '@/components/typography'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { InstagramMedia } from '@/types'
import * as admin from 'firebase-admin'
import { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'

export const revalidate = 259200 // 72 hours (3 days)

export const metadata: Metadata = {
    title: 'Gallery'
}

/**
 * Initialize Firebase Admin SDK
 */
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID!,
            clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL!,
            privateKey:
                process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID!.replace(
                    /\\n/g,
                    '\n'
                )
        })
    })
}

/**
 * Initialize Firestore
 */
const firestore = admin.firestore()

const InstagramGallery = async () => {
    try {
        // Get token from Firebase Firestore
        const doc = await firestore
            .collection(process.env.FIREBASE_FIRESTORE_COLLECTION_ID!)
            .doc(process.env.FIREBASE_FIRESTORE_DOCUMENT_ID!)
            .get()

        // Bail early if no document exists
        if (!doc.exists) {
            throw new Error('No document exists')
        }

        // Get data from document
        const data = doc.data()

        // Bail early if no data exists
        if (!data || !data.ig_token) {
            throw new Error('No data exists')
        }

        // Get token from data
        const token: string = data.ig_token

        // Get Instagram media
        const request = new URL('https://graph.instagram.com/me/media')
        request.searchParams.append(
            'fields',
            'id,media_type,media_url,username,caption,permalink'
        )
        request.searchParams.append('limit', '15')
        request.searchParams.append('access_token', token)

        const response = await fetch(request.href)

        const json: { data: InstagramMedia[] } = await response.json()

        return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {json.data.map((media, index) => {
                    return (
                        <div
                            key={media.id}
                            className='group relative aspect-square overflow-hidden rounded-lg shadow-md'>
                            <Image
                                src={media.media_url}
                                alt={media.caption}
                                priority={index <= 6 ? true : false}
                                fill={true}
                                sizes='(max-width: 768px) 100vw, (min-width: 769px) 33vw'
                                className='w-full object-center object-cover  group-hover:scale-105 transition-transform duration-200 ease-in-out bg-brand-dark/50 dark:bg-brand-light/50'
                            />

                            <div className='absolute bottom-4 right-4 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out'>
                                <a
                                    href={media.permalink}
                                    title='View on Instagram'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='p-2 rounded-xl bg-brand-dark dark:bg-brand-light bg-opacity-60 dark:bg-opacity-60 backdrop-contrast-125 dark:backdrop-contrast-125 transition-colors duration-200 ease-in-out'>
                                    <Instagram className='size-6 stroke-background' />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } catch (error) {
        console.error('🦄 ~ InstagramGallery ~ error:', error)
    }
}

const Gallery = async () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:dark:bg-brand-light after:bg-opacity-60 after:bg-opacity-70 after:dark:bg-opacity-70 after:backdrop-contrast-150 after:dark:backdrop-contrast-150 h-96'>
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
                    <PageHeroHeading className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Pupper Gallery
                    </PageHeroHeading>

                    <PageHeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Fur-ever fabulous, ready for a night on the town
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-brand-dark dark:text-brand-light'>
                        For the &apos;gram
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero lectus, euismod sit amet vestibulum sed.
                    </Typography>

                    <Button
                        asChild
                        className={cn(
                            buttonVariants({
                                variant: 'default',
                                size: 'sm'
                            }),
                            'font-black',
                            'hover:cursor-pointer'
                        )}>
                        <a
                            href={process.env.APP_SOCIAL_INSTAGRAM!}
                            title='Follow us on Instagram'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Follow us on Instagram
                        </a>
                    </Button>
                </PageSection>
            </div>

            <div className='container max-w-[1080px] flex flex-col gap-6 mx-auto'>
                <Suspense fallback={<GridLoader items={9} />}>
                    <InstagramGallery />
                </Suspense>
            </div>
        </>
    )
}

export default Gallery
