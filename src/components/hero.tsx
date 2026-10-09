import { Typography } from '@/components/typography'
import { cn } from '@/lib/utils'

export const Hero = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <section
        className={cn(['w-full'], className)}
        {...props}>
        <div className='container flex w-full flex-col gap-8 py-24 md:py-48'>
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
                'font-bold',
                'capitalize',
                'drop-shadow-xs',
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
                'font-bold',
                'text-balance',
                'drop-shadow-xs',
                'w-full',
                'md:w-2/3',
                'text-2xl'
            ],
            className
        )}
        {...props}
    />
)
