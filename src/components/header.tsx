import { cn } from '@/lib/utils'
import Link from 'next/link'
import MainNav from './main-nav'
import MakeBooking from './make-booking'
import { Mark } from './mark'
import MobileNav from './mobile-nav'
import { Button, buttonVariants } from './ui/button'

const Header = () => (
    <header className='sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur'>
        <div className='px-4 sm:container flex items-center'>
            <div className='flex justify-between w-full py-4'>
                <div className='flex flex-row-reverse lg:flex-row items-center md:space-x-4'>
                    <Mark className='hidden lg:flex size-6 fill-brand' />
                    <Link
                        href='/'
                        className={cn(buttonVariants({ variant: 'ghost' }), [
                            'md:mr-6',
                            'font-sans',
                            'font-bold',
                            'text-xl',
                            'tracking-tight',
                            'transition-all',
                            'duration-200',
                            'text-brand',
                            'hover:text-brand',
                            'hover:bg-brand/20'
                        ])}>
                        {process.env.APP_TITLE!}
                    </Link>
                    <MainNav />
                    <MobileNav />
                </div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <MakeBooking>
                        <Button
                            className={cn(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'sm'
                                }),
                                [
                                    'font-bold',
                                    'bg-brand',
                                    'text-background',
                                    'hover:bg-brand-dark',
                                    'hover:cursor-pointer',
                                    'md:h-10',
                                    'md:px-4',
                                    'md:py-2'
                                ]
                            )}>
                            Make a Booking
                        </Button>
                    </MakeBooking>
                </div>
            </div>
        </div>
    </header>
)

export default Header
