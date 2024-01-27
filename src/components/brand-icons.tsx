import { cn } from '@/lib/utils'
import React from 'react'

export const Facebook = React.forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        ref={ref}
        className={cn(['size-6', 'fill-current'], className)}
        {...props}>
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
))
Facebook.displayName = 'Facebook'

export const Twitter = React.forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        ref={ref}
        className={cn(['size-6', 'fill-current'], className)}
        {...props}>
        <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
))
Twitter.displayName = 'Twitter'

export const Instagram = React.forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        ref={ref}
        className={cn(['size-6', 'stroke-current', 'stroke-2'], className)}
        fill='none'
        {...props}>
        <rect
            width='20'
            height='20'
            x='2'
            y='2'
            rx='5'
            ry='5'
        />
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
        <line
            x1='17.5'
            x2='17.51'
            y1='6.5'
            y2='6.5'
        />
    </svg>
))
Instagram.displayName = 'Instagram'

export const WhatsApp = React.forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        ref={ref}
        className={cn(['size-6', 'fill-current'], className)}
        fill='none'
        {...props}>
        <path
            d='M20.4,3.5C18.2,1.2,15.2,0,12,0C5.4,0,0.1,5.3,0.1,11.9c0,2.1,0.5,4.1,1.6,5.9L0,24l6.3-1.7C8,23.3,10,23.8,12,23.8h0
	c6.6,0,12-5.3,12-11.9C24,8.7,22.6,5.7,20.4,3.5z M12,21.8c-1.8,0-3.5-0.5-5-1.4l-0.4-0.2l-3.7,1l1-3.6l-0.2-0.4
	c-1-1.6-1.5-3.4-1.5-5.3C2.1,6.4,6.5,2,12,2c2.6,0,5.1,1,7,2.9s3,4.4,3,7C22,17.4,17.4,21.8,12,21.8z M17.4,14.4
	c-0.3-0.1-1.8-0.9-2-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.2c-0.2,0.2-0.3,0.2-0.6,0.1c-1.7-0.9-2.9-1.6-4-3.5
	c-0.3-0.5,0.3-0.5,0.9-1.6c0.1-0.2,0-0.4,0-0.5C9.9,9,9.3,7.5,9,6.9C8.8,6.3,8.5,6.4,8.3,6.4c-0.2,0-0.4,0-0.6,0
	C7.6,6.4,7.3,6.5,7,6.8c-0.3,0.3-1,1-1,2.5s1.1,2.9,1.2,3.1c0.2,0.2,2.1,3.2,5.1,4.5c1.9,0.8,2.6,0.9,3.6,0.7c0.6-0.1,1.8-0.7,2-1.4
	c0.2-0.7,0.2-1.3,0.2-1.4C17.9,14.6,17.7,14.5,17.4,14.4z'
        />
    </svg>
))
WhatsApp.displayName = 'WhatsApp'

export const Messenger = React.forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        ref={ref}
        className={cn(['size-6', 'fill-current'], className)}
        fill='none'
        {...props}>
        <path d='M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z' />
    </svg>
))
Messenger.displayName = 'Messenger'
