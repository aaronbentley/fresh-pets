import { Typography } from '@/components/typography'
import { cn } from '@/lib/utils'

export const PageHero = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <section
        className={cn(['w-full'], className)}
        {...props}>
        <div className='container mx-auto flex flex-col gap-2 py-24 md:py-48'>
            {children}
        </div>
    </section>
)

export const PageHeroHeading = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography
        variant='h1'
        className={cn(['capitalize', 'drop-shadow-xs'], className)}
        {...props}
    />
)

export const PageHeroDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Typography
        variant='lead'
        className={cn(
            [
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
