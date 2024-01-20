'use client'

import { links } from '@/assets/data/links'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Mark } from './mark'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { ScrollArea } from './ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const MobileNav = () => {
    // Handle menu state
    const [open, setOpen] = useState(false)

    return (
        <Sheet
            open={open}
            onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    size='icon'
                    variant='ghost'
                    className='lg:hidden'>
                    <Menu className='h-[1.2rem] w-[1.2rem]' />
                    <span className='sr-only'>Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side='left'
                className='pr-0 pl-8 border-pink-500/25'>
                <div className='flex items-center gap-x-6'>
                    <span
                        className={cn([
                            'font-sans',
                            'text-brand',
                            'font-extrabold',
                            'text-2xl',
                            'tracking-tight',
                            'transition-colors',
                            'duration-200'
                        ])}>
                        {process.env.NEXT_PUBLIC_APP_TITLE!}
                    </span>
                </div>
                <ScrollArea className='mt-8 mb-4 h-[calc(100vh-12rem)] pb-10'>
                    <div className='flex flex-col space-y-2'>
                        {links.map((link, index) => (
                            <MobileLink
                                key={index}
                                href={link.href}
                                onOpenChange={setOpen}>
                                {link.label}
                            </MobileLink>
                        ))}
                    </div>
                </ScrollArea>
                <Mark className='fill-brand size-16' />
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

const MobileLink = ({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const active = pathname === href

    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(
                navigationMenuTriggerStyle(),
                active && [
                    'text-stone-50',
                    'dark:text-stone-950',
                    'bg-brand',
                    'dark:bg-brand'
                ],
                className
            )}
            {...props}>
            {children}
        </Link>
    )
}
