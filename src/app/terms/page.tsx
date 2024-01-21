import doggoOne from '@/assets/img/doggo-one.jpg'
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
    title: 'Terms'
}

const Terms = () => {
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
                        Terms
                    </PageHeroHeading>

                    <PageHeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        Our Terms of Service outline the conditions and
                        guidelines for our website and services
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-10'>
                <PageSection>
                    <PageSectionHeading className='text-brand-dark dark:text-brand-light'>
                        Service Terms and Conditions
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-black'>
                        These terms and conditions apply to all customers and
                        bookings:
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        If any pre-booked appointment is not attended or is
                        cancelled with less than 24 hours notice then the client
                        will incur 50% of the appointment fee and a deposit may
                        be required on future bookings.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Fresh Pets groomers are governed by the Animal Welfare
                        Act 2006. Therefore, groomers have a duty of care to any
                        animal receiving grooming services to prioritise welfare
                        needs over preferred styling choices.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        If the pet&apos;s coat is heavily matted and cannot be
                        brushed out without causing pain or distress, then it
                        must be clipped short and advice will be given to the
                        client about how to maintain regrowth. This may result
                        in a higher fee, however an assessment will be made and
                        fees discussed and agreed with clients prior to any
                        grooming in these circumstances.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Grooming may be halted at anytime if Fresh Pets deem an
                        animal unfit to groom and may still require full
                        payment. This will be discussed on an individual basis
                        and is at the discretion of Fresh Pets&apos; staff.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        If during consultation a client decides for any reason
                        that they no longer wish to continue with the grooming
                        service they have booked, they will still have to pay
                        for the appointment, minus the pre paid deposit where
                        applicable.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Fresh Pets may insist clients with elderly, infirm or
                        very nervous dogs stay for the duration of the grooming
                        session and will prioritise welfare over styling.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        The grooming process can expose underlying injuries or
                        health issues or aggravate a current one, which Fresh
                        Pets will not be held liable for. Clients must inform
                        Fresh Pets of all known injuries and illnesses prior to
                        grooming. Fresh Pets may ask the client to sign a
                        disclaimer form before commencing grooming.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Should Fresh Pets decide, at its sole discretion, that
                        urgent veterinary care is required, the client will be
                        responsible for paying all associated costs. If the
                        pet&apos;s registered vet is unavailable, Fresh Pets has
                        the authority to seek care from its chosen vet.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        It is possible that an accident could occur whilst
                        grooming. Upmost care and caution will always be taken
                        however, cuts, nicks, scratches and quicking of nails
                        could occur. Any injury knowingly incurred whilst in the
                        care of Fresh Pets will be recorded and the client will
                        be notified.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Fresh Pets will do their upmost to resolve any
                        grievances and kindly ask clients to report any issues
                        to Fresh Pets as soon as possible so appropriate action
                        can be taken.
                    </Typography>
                </PageSection>
            </div>
        </>
    )
}

export default Terms
