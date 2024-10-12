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
    title: 'Privacy'
}

const Privacy = () => {
    return (
        <>
            <div className='relative min-h-[30vh] w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-primary after:bg-opacity-75 after:backdrop-contrast-150 sm:min-h-[35vh] md:min-h-[40vh] xl:min-h-[50vh]'>
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
                    <PageHeroHeading className='text-background drop-shadow-sm'>
                        Privacy
                    </PageHeroHeading>

                    <PageHeroDescription className='text-background drop-shadow-sm'>
                        Our Privacy Policy explains what personal information we
                        collect, how we use personal information and your
                        privacy rights
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-10'>
                <PageSection>
                    <PageSectionHeading className='text-primary'>
                        Data Protection
                    </PageSectionHeading>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Fresh Pets respects its clients privacy and its
                        committed to protecting all personal data.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        A client record sheet containing the clients contact
                        information and details about their pet will be kept by
                        Fresh Pets.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Client record sheets can only be accessed by Fresh Pets
                        staff.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Client record sheets will be deleted at the request of
                        the client if they cease to use Fresh Pets services.
                    </Typography>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        Fresh Pets may retain information about any accidents,
                        injuries or illnesses even after a client record sheet
                        has been destroyed.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6 py-10'>
                <PageSection>
                    <PageSectionHeading className='text-primary'>
                        Consent
                    </PageSectionHeading>
                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        By choosing our services you consent to Fresh Pets
                        storing your personal data, including name, address,
                        email, telephone contact number and details about your
                        pet(s) on our client record system).
                    </Typography>

                    <Typography
                        variant='p'
                        className='md:w-2/3'>
                        By choosing our services you consent to Fresh Pets
                        contacting you with regards to bookings and grooming
                        services.
                    </Typography>
                </PageSection>
            </div>
        </>
    )
}

export default Privacy
