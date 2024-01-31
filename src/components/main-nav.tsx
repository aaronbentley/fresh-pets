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
                            <Link
                                href={link.href}
                                legacyBehavior
                                passHref>
                                <NavigationMenuLink
                                    active={pathname === link.href}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        [
                                            'font-bold',
                                            'data-[active]:text-background',
                                            'data-[active]:bg-brand'
                                        ]
                                    )}>
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default MainNav
