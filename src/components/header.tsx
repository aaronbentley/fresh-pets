import { cn } from '@/lib/utils'
import Link from 'next/link'
import MainNav from './main-nav'
import MakeBooking from './make-booking'
import { Mark } from './mark'
import MobileNav from './mobile-nav'
import ModeToggle from './mode-toggle'
import { Button, buttonVariants } from './ui/button'

const Header = () => (
    <header className='sticky top-0 z-50 w-full border-b border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur'>
        <div className='px-4 sm:container flex items-center'>
            <div className='flex justify-between w-full py-4'>
                <div className='flex flex-row-reverse lg:flex-row items-center md:space-x-4'>
                    <Mark className='hidden lg:flex size-6 fill-brand-dark dark:fill-brand-light' />
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
                            'text-brand-dark',
                            'dark:text-brand-light',
                            'hover:bg-brand-dark/20',
                            'hover:text-brand-dark',
                            'dark:hover:bg-brand-light/20',
                            'hover:dark:text-brand-light'
                        ])}>
                        {process.env.APP_TITLE!}
                    </Link>
                    <MainNav />
                    <MobileNav />
                </div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <ModeToggle />
                    <MakeBooking>
                        <Button
                            className={cn(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'sm'
                                }),
                                [
                                    'font-bold',
                                    'bg-brand-dark',
                                    'dark:bg-brand-light',
                                    'text-background',
                                    'hover:bg-brand',
                                    'dark:hover:bg-brand',
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
