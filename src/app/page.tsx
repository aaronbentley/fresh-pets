import oliverChiefPupper from '@/assets/img/oliver.jpg'
import { Hero, HeroDescription, HeroHeading } from '@/components/hero'
import { Typography } from '@/components/typography'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: {
        absolute: `${process.env.APP_TITLE!} - ${process.env.APP_STRAPLINE!}`
    }
}

const Frontpage = () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:dark:bg-brand-light after:bg-opacity-70 after:dark:bg-opacity-70 after:backdrop-contrast-125 after:dark:backdrop-contrast-125'>
                <Image
                    src={oliverChiefPupper}
                    alt='Oliver the Chief Pupper'
                    placeholder='blur'
                    sizes='100vw'
                    className='w-full object-cover h-screen z-0'
                />
                <Hero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <HeroHeading className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        {process.env.APP_STRAPLINE!}
                    </HeroHeading>

                    <HeroDescription className='text-stone-50 dark:text-stone-950 drop-shadow-sm'>
                        {process.env.APP_DESCRIPTION!}
                    </HeroDescription>

                    <Button
                        variant='default'
                        size='lg'
                        className='transition-all duration-200 w-min self-center sm:self-start bg-stone-50 text-brand font-black hover:bg-brand hover:text-stone-50'
                        asChild>
                        <a
                            href='https://m.me/freshpetsiow'
                            rel='noopener noreferrer'
                            target='_blank'>
                            Make a Booking
                        </a>
                    </Button>
                </Hero>
            </div>

            <div className='container w-full flex flex-col gap-8 py-24 md:py-32'>
                <div className='grid md:grid-cols-2 gap-24'>
                    <div className='flex flex-col gap-8 justify-center'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                variant='h2'
                                className='text-brand-dark dark:text-brand-light'>
                                Top to Tail Services
                            </Typography>
                            <Typography
                                variant='lead'
                                className='md:w-3/4'>
                                Bark, Bath, Bliss: Elevate Your Dog&apos;s
                                Grooming Experience
                            </Typography>
                        </div>

                        <div className='flex flex-col items-start gap-8'>
                            <Typography variant='p'>
                                We offer a wide range of services to keep your
                                dog looking and feeling their best, from a
                                simple bath and brush to a full groom.
                            </Typography>

                            <Link
                                href='/services/'
                                className={cn(
                                    buttonVariants({
                                        variant: 'default',
                                        size: 'lg'
                                    }),
                                    'w-min'
                                )}>
                                View our Services
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col bg-brand/25 h-full min-h-[600px]'></div>
                </div>
            </div>

            <div className='container w-full flex flex-col gap-8 py-24 md:py-32'>
                <div className='grid md:grid-cols-2 gap-24'>
                    <div className='flex flex-col bg-brand/25 h-full min-h-[600px]'></div>
                    <div className='flex flex-col justify-center gap-8'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                variant='h2'
                                className='text-brand-dark dark:text-brand-light'>
                                Professional dog grooming since 2005
                            </Typography>
                            <Typography
                                variant='lead'
                                className='md:w-3/4'>
                                Bark, Bath, Bliss: Elevate Your Dog&apos;s
                                Grooming Experience
                            </Typography>
                        </div>

                        <div className='flex flex-col items-start gap-8'>
                            <Typography variant='p'>
                                We offer a wide range of services to keep your
                                dog looking and feeling their best, from a
                                simple bath and brush to a full groom.
                            </Typography>

                            <Link
                                href='/about/'
                                className={cn(
                                    buttonVariants({
                                        variant: 'default',
                                        size: 'lg'
                                    }),
                                    'w-min'
                                )}>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontpage
