import doggoThree from '@/assets/img/doggo-three.jpg'
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
    title: 'Services'
}

const Services = () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:dark:bg-brand-light after:bg-opacity-60 after:dark:bg-opacity-60 after:backdrop-contrast-125 after:dark:backdrop-contrast-125 h-96'>
                <Image
                    src={doggoThree}
                    alt='Doggo'
                    placeholder='blur'
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Top to Tail Services
                    </PageHeroHeading>

                    <PageHeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Bark, Bath, Bliss: Elevate your dog&apos;s grooming
                        experience
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-brand-dark dark:text-brand-light'>
                        Treatments
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-black'>
                        We offer a wide range of services to keep your dog
                        looking and feeling their best, from a simple bath and
                        brush to a full groom.
                    </Typography>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-black'>
                        We want your dog to look fabulous - therefore all pets
                        require bathing before any clipping and trimming, with
                        the exception of While You Wait services and Hand
                        Stripping.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6'>
                <PageSection>
                    <PageSectionHeading
                        variant='h3'
                        className='text-brand-dark dark:text-brand-light'>
                        Hand Stripping
                    </PageSectionHeading>
                    <Typography as='p'>
                        Breed dependable, hand removal of coat in required areas
                        including trimming to finish and a bath which can be
                        completed within the same appointment or on a different
                        day for dogs who have reactive/sensitive skin.
                    </Typography>
                    <Typography as='p'>
                        We are unlikely to be able to hand strip dogs who have
                        been spayed/neutered or who have previously clipped even
                        if they are a breed which would typically be hand
                        stripped as both of these actions change the character
                        of the coat.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6'>
                <PageSection>
                    <PageSectionHeading
                        variant='h3'
                        className='text-brand-dark dark:text-brand-light'>
                        Full Groom
                    </PageSectionHeading>
                    <Typography as='p'>
                        Whether you&apos;re looking for a Breed Standard Style,
                        a fully Hand Scissored trim, a complete All Over clip
                        off or something in between we&apos;ve got it covered -
                        includes bath and claw trim.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6'>
                <PageSection>
                    <PageSectionHeading
                        variant='h3'
                        className='text-brand-dark dark:text-brand-light'>
                        Puppy Groom
                    </PageSectionHeading>
                    <Typography as='p'>
                        Puppys are welcomed for their first visit to the salon
                        as soon as they have had both sets of vaccinations,
                        getting them used to the salon environment and giving
                        them positive grooming experiences at this age prepares
                        them well for a lifetime of grooming.
                    </Typography>
                    <Typography as='p'>
                        We recommend 2-3 puppy grooms before moving on to a full
                        groom.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6'>
                <PageSection>
                    <PageSectionHeading
                        variant='h3'
                        className='text-brand-dark dark:text-brand-light'>
                        Bath, Brush and Tidy
                    </PageSectionHeading>
                    <Typography as='p'>
                        For dogs who are attending regular full groom
                        appointments, this service is great for a freshen up
                        between grooms or dogs with high maintenance coats and
                        need a bit of extra brushing.
                    </Typography>
                    <Typography as='p'>
                        Having a clean, conditioned and thoroughly brushed coat
                        can really ease the pressure of at home coat care.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6'>
                <PageSection>
                    <PageSectionHeading
                        variant='h3'
                        className='text-brand-dark dark:text-brand-light'>
                        Teeth Cleaning
                    </PageSectionHeading>
                    <Typography as='p'>
                        For the removal of mild to moderate plaque build up, to
                        freshen breath and maintain good oral heath.
                    </Typography>
                    <Typography as='p'>
                        This method of teeth cleaning uses no vibration or
                        noise. Each session is up to half an hour for plaque
                        removal and 15 minutes per maintenance session - please
                        speak to a member of the Fresh Pets team about booking a
                        consultation.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6'>
                <PageSection>
                    <PageSectionHeading
                        variant='h3'
                        className='text-brand-dark dark:text-brand-light'>
                        While You Wait
                    </PageSectionHeading>
                    <Typography as='p'>
                        No pre booked appointment needed however, calling ahead
                        will reduce waiting time.
                    </Typography>
                    <Typography as='p'>
                        Our While You Wait services includes nail trim, feet
                        tidy, eye area trim and sanitary trim.
                    </Typography>
                </PageSection>
            </div>
        </>
    )
}

export default Services
