import { cn } from '@/lib/utils'
import Link from 'next/link'
import MainNav from './main-nav'
import { Mark } from './mark'
import MobileNav from './mobile-nav'
import ModeToggle from './mode-toggle'
import { buttonVariants } from './ui/button'

const Header = () => (
    <header className='sticky top-0 z-50 w-full border-b border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur'>
        <div className='container flex items-center'>
            <div className='flex justify-between w-full py-4'>
                <div className='flex flex-row-reverse md:flex-row items-center md:space-x-4'>
                    <Mark className='hidden md:flex size-6 fill-brand-dark dark:fill-brand-light' />
                    <Link
                        href='/'
                        className={cn(buttonVariants({ variant: 'ghost' }), [
                            'md:mr-6',
                            'font-sans',
                            'font-extrabold',
                            'text-xl',
                            'tracking-tight',
                            'transition-all',
                            'duration-200',
                            'text-brand-dark',
                            'dark:text-brand-light',
                            'hover:bg-brand-dark',
                            'hover:text-stone-50',
                            'dark:hover:bg-brand-light',
                            'hover:dark:text-stone-950'
                        ])}>
                        {process.env.APP_TITLE!}
                    </Link>
                    <MainNav />
                    <MobileNav />
                </div>
                <div className='flex items-center'>
                    <ModeToggle />
                </div>
            </div>
        </div>
    </header>
)

export default Header
