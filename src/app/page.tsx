import oliverChiefPupper from '@/assets/img/oliver.jpg'
import { Hero, HeroDescription, HeroHeading } from '@/components/hero'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Frontpage = () => {
    return (
        <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand-dark after:bg-opacity-70'>
            <Image
                src={oliverChiefPupper}
                alt='Oliver the Chief Pupper'
                placeholder='blur'
                sizes='100vw'
                className='w-full object-cover h-screen z-0'
            />
            <Hero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                <HeroHeading className='text-stone-50 dark:text-stone-50 drop-shadow-sm'>
                    {process.env.APP_STRAPLINE!}
                </HeroHeading>

                <HeroDescription className='text-stone-200 dark:text-stone-200 drop-shadow-sm'>
                    {process.env.APP_DESCRIPTION!}
                </HeroDescription>

                <Button
                    variant='default'
                    size='lg'
                    className='w-min self-center sm:self-start'
                    asChild>
                    <a
                        href='https://m.me/freshpetsiow'
                        rel='noopener noreferrer'
                        target='_blank'>
                        Make a Booking
                        <span
                            className='ml-2 text-2xl'
                            role='img'
                            aria-label='dog face emoji'>
                            🐶
                        </span>
                    </a>
                </Button>
            </Hero>
        </div>
    )
}

export default Frontpage
