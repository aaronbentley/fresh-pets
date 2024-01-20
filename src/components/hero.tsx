import { cn } from '@/lib/utils'
import { Typography } from './typography'

export const Hero = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <section
        className={cn(['w-full'], className)}
        {...props}>
        <div className='container w-full flex flex-col gap-8 py-24 md:py-48'>
            {children}
        </div>
    </section>
)

export const HeroHeading = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography
        variant='h1'
        className={cn(
            [
                'text-center',
                'sm:text-start',
                'font-black',
                'capitalize',
                'drop-shadow-sm',
                'text-5xl',
                'sm:text-6xl',
                'md:text-7xl',
                'lg:text-8xl',
                'xl:text-9xl'
            ],
            className
        )}
        {...props}
    />
)

export const HeroDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Typography
        variant='lead'
        className={cn(
            [
                'text-center',
                'sm:text-start',
                'font-black',
                'text-balance',
                'drop-shadow-sm',
                'w-full',
                'md:w-2/3',
                'text-2xl'
            ],
            className
        )}
        {...props}
    />
)
