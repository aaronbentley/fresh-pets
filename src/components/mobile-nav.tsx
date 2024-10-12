'use client'

import { links } from '@/assets/data/links'
import { Mark } from '@/components/mark'
import { Button, buttonVariants } from '@/components/ui/button'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

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
                    <Menu className='h-[1.2rem] w-[1.2rem] stroke-primary' />
                    <span className='sr-only'>Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side='left'
                className='pl-8 pr-0'>
                <div className='flex items-center gap-x-6'>
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
                            'hover:bg-primary/20',
                            'hover:text-primary'
                        ])}>
                        {process.env.NEXT_PUBLIC_APP_TITLE!}
                    </Link>
                </div>
                <ScrollArea className='mb-4 mt-8 h-[calc(100vh-12rem)] pb-10'>
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
                <Mark className='size-16 fill-primary' />
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
            data-active={active}
            className={cn(
                navigationMenuTriggerStyle(),
                'font-bold',
                'hover:text-primary',
                'hover:bg-primary/20',
                active && [
                    'data-[active="true"]:text-background',
                    'data-[active="true"]:bg-primary'
                ],
                className
            )}
            {...props}>
            {children}
        </Link>
    )
}
