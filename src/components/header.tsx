import MainNav from '@/components/main-nav'
import MakeBooking from '@/components/make-booking'
import { Mark } from '@/components/mark'
import MobileNav from '@/components/mobile-nav'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = () => (
    <header className='sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur'>
        <div className='flex items-center px-4 sm:container'>
            <div className='flex w-full justify-between py-4'>
                <div className='flex flex-row-reverse items-center md:space-x-4 lg:flex-row'>
                    <Mark className='hidden size-6 fill-primary lg:flex' />
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
                            'text-primary',
                            'hover:text-primary',
                            'hover:bg-primary/20'
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
                                    'bg-primary',
                                    'text-background',
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
