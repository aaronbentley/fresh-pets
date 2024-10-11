import doggoFive from '@/assets/img/doggo-five.jpg'
import doggoOne from '@/assets/img/doggo-one.jpg'
import doggoSix from '@/assets/img/doggo-six.jpg'
import oliverChiefPupper from '@/assets/img/oliver.jpg'
import { Hero, HeroDescription, HeroHeading } from '@/components/hero'
import MakeBooking from '@/components/make-booking'
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
            <div className='relative w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-primary after:bg-opacity-75 after:backdrop-contrast-150'>
                <Image
                    src={oliverChiefPupper}
                    alt='Oliver the Chief Pupper'
                    placeholder='blur'
                    priority={true}
                    sizes='100vw'
                    className='z-0 h-screen w-full object-cover'
                />
                <Hero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <HeroHeading className='text-background'>
                        {process.env.APP_STRAPLINE!}
                    </HeroHeading>

                    <HeroDescription className='text-background'>
                        {process.env.APP_DESCRIPTION!}
                    </HeroDescription>

                    <MakeBooking>
                        <Button
                            className={cn(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'lg'
                                }),
                                [
                                    'w-min',
                                    'self-center',
                                    'sm:self-start',
                                    'bg-background',
                                    'text-primary',
                                    'font-bold',
                                    'hover:bg-primary',
                                    'hover:text-background'
                                ]
                            )}>
                            Make a Booking
                        </Button>
                    </MakeBooking>
                </Hero>
            </div>

            <div className='container flex w-full flex-col gap-8 py-24 md:py-32'>
                <div className='grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16'>
                    <div className='order-2 flex flex-col justify-center gap-8 md:order-1'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                variant='h2'
                                className='text-primary'>
                                Top to Tail Services
                            </Typography>
                            <Typography
                                variant='lead'
                                className='lg:w-3/4'>
                                Bark, Bath, Bliss: Elevate Your Dog&apos;s
                                Grooming Experience
                            </Typography>
                        </div>

                        <div className='flex flex-col items-start gap-8'>
                            <Typography
                                variant='p'
                                className='lg:w-2/3'>
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
                                    'w-min',
                                    'font-bold'
                                )}>
                                View Services
                            </Link>
                        </div>
                    </div>

                    <div className='order-1 flex flex-col md:order-2'>
                        <Image
                            src={doggoOne}
                            alt='Doggo'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>
                </div>
            </div>

            <div className='container flex w-full flex-col gap-8 py-24 md:py-32'>
                <div className='grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16'>
                    <div className='flex flex-col'>
                        <Image
                            src={doggoFive}
                            alt='Doggo'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>

                    <div className='flex flex-col justify-center gap-8'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                variant='h2'
                                className='text-primary'>
                                Pampering Paws
                            </Typography>
                            <Typography
                                variant='lead'
                                className='lg:w-3/4'>
                                Professional dog grooming since 2005
                            </Typography>
                        </div>

                        <div className='flex flex-col items-start gap-8'>
                            <Typography
                                variant='p'
                                className='lg:w-2/3'>
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
                                    'w-min',
                                    'font-bold'
                                )}>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container flex w-full flex-col gap-8 py-24 md:py-32'>
                <div className='grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16'>
                    <div className='order-2 flex flex-col justify-center gap-8 md:order-1'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                variant='h2'
                                className='text-primary'>
                                Fur-ever Fabulous
                            </Typography>
                            <Typography
                                variant='lead'
                                className='lg:w-3/4'>
                                Ready for a night on the town
                            </Typography>
                        </div>

                        <div className='flex flex-col items-start gap-8'>
                            <Typography
                                variant='p'
                                className='lg:w-2/3'>
                                Ready to be bow-wowed? Our dog grooming gallery
                                awaits, showcasing the epitome of pampered pooch
                                perfection.
                            </Typography>

                            <Link
                                href='/gallery/'
                                className={cn(
                                    buttonVariants({
                                        variant: 'default',
                                        size: 'lg'
                                    }),
                                    'w-min',
                                    'font-bold'
                                )}>
                                View Gallery
                            </Link>
                        </div>
                    </div>

                    <div className='order-1 flex flex-col md:order-2'>
                        <Image
                            src={doggoSix}
                            alt='Doggo'
                            placeholder='blur'
                            priority={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                            className='w-full rounded-lg object-cover shadow-md'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontpage
