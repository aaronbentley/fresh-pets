import doggoFive from '@/assets/img/doggo-five.jpg'
import jazWake from '@/assets/img/team/jaz-wake.jpg'
import jemimaSingleton from '@/assets/img/team/jemima-singleton.jpg'
import katieBentley from '@/assets/img/team/katie-bentley.jpg'
import oliverBentley from '@/assets/img/team/oliver-bentley.jpg'
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
    title: 'About'
}

const About = () => {
    return (
        <>
            <div className='relative min-h-[30vh] w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-primary/75 after:backdrop-contrast-150 sm:min-h-[35vh] md:min-h-[40vh] xl:min-h-[50vh]'>
                <Image
                    src={doggoFive}
                    alt='Doggo'
                    placeholder='blur'
                    priority={true}
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-background drop-shadow-xs'>
                        About us
                    </PageHeroHeading>

                    <PageHeroDescription className='text-background drop-shadow-xs'>
                        Friendly, knowledgeable staff for all your canine needs
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-10'>
                <PageSection>
                    <PageSectionHeading className='text-primary'>
                        Our history
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='font-bold md:w-2/3'>
                        [Fresh Pets origin story here] - [Awards & Accolades] -
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero lectus, euismod sit amet vestibulum sed.
                    </Typography>
                </PageSection>
            </div>

            <div className='container flex flex-col gap-6 py-10'>
                <PageSection>
                    <PageSectionHeading className='text-primary'>
                        Meet the team
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='font-bold md:w-2/3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero lectus, euismod sit amet vestibulum sed.
                    </Typography>
                </PageSection>
            </div>

            <div className='grid grid-cols-1 divide-y divide-primary/20 px-8'>
                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 pb-24 md:grid-cols-7 md:gap-16'>
                    <div className='w-full md:col-span-3'>
                        <Image
                            src={katieBentley}
                            alt='Katie Bentley - Owner'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>

                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <div className='flex flex-col gap-0'>
                            <Typography
                                variant='h3'
                                className='text-primary'>
                                Katie Bentley
                            </Typography>
                            <Typography variant='lead'>Owner</Typography>
                        </div>
                        <Typography variant='p'>
                            Fresh Pets owner Katie is City and Guilds level 3
                            qualified and has been professionally dog grooming
                            since 2005 so your beloved pet is in safe and
                            experienced hands.
                        </Typography>
                        <Typography variant='p'>
                            Katie is also a member of The Groomers Spotlight, an
                            organisation dedicated to celebrating and promoting
                            qualifications within the grooming industry.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='w-full md:col-span-3'>
                        <Image
                            src={jazWake}
                            alt='Jaz Wake - Assistant manager'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>

                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <div className='flex flex-col gap-0'>
                            <Typography
                                variant='h3'
                                className='text-primary'>
                                Jaz Wake
                            </Typography>
                            <Typography variant='lead'>
                                Assistant manager
                            </Typography>
                        </div>
                        <Typography variant='p'>
                            Jaz is one of the worlds biggest dog lovers and also
                            the proud owner of her adopted cat Sooty.
                        </Typography>
                        <Typography variant='p'>
                            Jaz is a founding member of the Fresh Pets team and
                            after starting from scratch is now a super stylist
                            with a keen eye and a calm and steady hand.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='w-full md:col-span-3'>
                        <Image
                            src={jemimaSingleton}
                            alt='Jemima Singleton - Grooming Assistant'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>

                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <div className='flex flex-col gap-0'>
                            <Typography
                                variant='h3'
                                className='text-primary'>
                                Jemima Singleton
                            </Typography>
                            <Typography variant='lead'>
                                Grooming Assistant
                            </Typography>
                        </div>
                        <Typography variant='p'>
                            Proud owner of Posey the Cockapoo, Jemima is the
                            newest addition to the Fresh Pets team. She joined
                            the team already with a number of canine related
                            skills including, first aid and dog walking.
                        </Typography>
                        <Typography variant='p'>
                            Jemima is passionate in developing her skills and
                            knowledge in the salon as a dog groomer and loves
                            getting to know all of our four legged customers.
                        </Typography>
                    </div>
                </div>

                <div className='container mx-auto grid max-w-[980px] gap-8 px-4 py-24 md:grid-cols-7 md:gap-16'>
                    <div className='w-full md:col-span-3'>
                        <Image
                            src={oliverBentley}
                            alt='Oliver Bentley - Chief Pupper'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>

                    <div className='flex flex-col items-start justify-start gap-8 md:col-span-4'>
                        <div className='flex flex-col gap-0'>
                            <Typography
                                variant='h3'
                                className='text-primary'>
                                Oliver
                            </Typography>
                            <Typography variant='lead'>Chief Pupper</Typography>
                        </div>
                        <Typography variant='p'>
                            Oliver is a 3 year old mixed breed, originally from
                            Alicante -Spain. He was adopted by Katie and her
                            husband Jim in 2019 from an Island based rescue and
                            rehoming charity.
                        </Typography>
                        <Typography variant='p'>
                            Oliver is only 10 inches tall but thinks he is a
                            giant. He also has a slight obsession with tennis
                            balls and loves ALL food, especially things which
                            are not food.
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
