'use client'
import { links } from '@/assets/data/links'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MainNav = () => {
    // Get the current pathname
    const pathname = usePathname()

    return (
        <div className='hidden lg:flex'>
            <NavigationMenu>
                <NavigationMenuList>
                    {links.map((link, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                                render={<Link href={link.href} />}
                                active={pathname === link.href}
                                className={cn(navigationMenuTriggerStyle(), [
                                    'font-bold',
                                    'transition-colors',
                                    'duration-200',
                                    'hover:text-primary',
                                    'hover:bg-primary/20',
                                    'data-active:text-background',
                                    'data-active:bg-primary',
                                    'data-active:hover:bg-primary',
                                    'data-active:focus:bg-primary'
                                ])}>
                                {link.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default MainNav
