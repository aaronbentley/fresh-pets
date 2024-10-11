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
            <div className='relative h-96 w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-primary after:bg-opacity-75 after:backdrop-contrast-150'>
                <Image
                    src={doggoThree}
                    alt='Doggo'
                    placeholder='blur'
                    priority={true}
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-background drop-shadow-sm'>
                        Top to Tail Services
                    </PageHeroHeading>

                    <PageHeroDescription className='text-background drop-shadow-sm'>
                        Bark, Bath, Bliss: Elevate your dog&apos;s grooming
                        experience
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-primary'>
                        Treatments
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='font-bold md:w-2/3'>
                        We offer a wide range of services to keep your dog
                        looking and feeling their best, from a simple bath and
                        brush to a full groom.
                    </Typography>
                    <Typography
                        variant='lead'
                        className='font-bold md:w-2/3'>
                        We want your dog to look fabulous - therefore all pets
                        require bathing before any clipping and trimming, with
                        the exception of Hand Stripping and While You Wait
                        services.
                    </Typography>
                </PageSection>
            </div>

            <div className='grid grid-cols-1 divide-y divide-primary/20 px-8'>
                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='h-72 w-full bg-primary/50 md:col-span-3'></div>

                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <Typography
                            variant='h3'
                            className='text-primary'>
                            Hand Stripping
                        </Typography>
                        <Typography variant='p'>
                            We specialise in hand stripping, masters of
                            achieving the correct coat appearance for your
                            breed.
                        </Typography>
                        <Typography variant='p'>
                            Breed dependable, hand removal of coat in required
                            areas including trimming to finish and a bath which
                            can be completed within the same appointment or on a
                            different day for dogs who have reactive/sensitive
                            skin.
                        </Typography>
                        <Typography variant='p'>
                            We are unlikely to be able to hand strip dogs who
                            have been spayed/neutered or who have previously
                            clipped even if they are a breed which would
                            typically be hand stripped as both of these actions
                            change the character of the coat.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='h-72 w-full bg-primary/50 md:col-span-3'></div>
                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <Typography
                            variant='h3'
                            className='text-primary'>
                            Full Groom
                        </Typography>
                        <Typography variant='p'>
                            A full groom includes a bath, blow dry, brush out,
                            claw trim, ear clean and style.
                        </Typography>
                        <Typography variant='p'>
                            Whether you&apos;re looking for a Breed Standard
                            Style, a fully Hand Scissored trim, a complete All
                            Over clip off or something in between we&apos;ve got
                            it covered.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='h-72 w-full bg-primary/50 md:col-span-3'></div>
                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <Typography
                            variant='h3'
                            className='text-primary'>
                            Puppy Groom
                        </Typography>
                        <Typography as='p'>
                            A positive grooming experience at puppy age prepares
                            them for a lifetime of grooming.
                        </Typography>
                        <Typography as='p'>
                            Puppys are welcomed for their first visit to the
                            salon as soon as they have had both sets of
                            vaccinations. We recommend 2-3 puppy grooms before
                            moving on to a full groom.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='h-72 w-full bg-primary/50 md:col-span-3'></div>
                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <Typography
                            variant='h3'
                            className='text-primary'>
                            Bath and Brush
                        </Typography>
                        <Typography as='p'>
                            Freshen up with a scrub in the tub & a brush through
                            or light undercoat removal.
                        </Typography>
                        <Typography as='p'>
                            For dogs who are attending regular full groom
                            appointments, this service is great for a freshen up
                            between grooms or dogs with high maintenance coats
                            and need a bit of extra brushing.
                        </Typography>
                        <Typography as='p'>
                            Having a clean, conditioned and thoroughly brushed
                            coat can really ease the pressure of at home coat
                            care.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='h-72 w-full bg-primary/50 md:col-span-3'></div>
                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <Typography
                            variant='h3'
                            className='text-primary'>
                            Teeth Cleaning
                        </Typography>
                        <Typography as='p'>
                            For the removal of mild to moderate plaque build up,
                            to freshen breath and maintain good oral heath.
                        </Typography>
                        <Typography as='p'>
                            This method of teeth cleaning uses no vibration or
                            noise. Each session is up to half an hour for plaque
                            removal and 15 minutes per maintenance session -
                            please speak to a member of the Fresh Pets team
                            about booking a consultation.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='h-72 w-full bg-primary/50 md:col-span-3'></div>
                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <Typography
                            variant='h3'
                            className='text-primary'>
                            While You Wait
                        </Typography>
                        <Typography as='p'>
                            Our While You Wait services includes nail trim, feet
                            tidy, eye area trim and sanitary trim. No pre booked
                            appointment needed however, calling ahead will
                            reduce waiting time.
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
