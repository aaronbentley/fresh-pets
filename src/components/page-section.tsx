import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import { Typography, typographyVariants } from './typography'

export const PageSection = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <section
            className={cn(
                'flex max-w-[980px] flex-col justify-around items-start gap-8 px-4 py-10 md:py-20 mx-auto',
                className
            )}
            {...props}>
            {children}
        </section>
    )
}

type PageSectionHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof typographyVariants>

export const PageSectionHeading = ({
    className,
    variant = 'h2',
    ...props
}: PageSectionHeadingProps) => {
    return (
        <Typography
            variant={variant}
            className={cn(className)}
            {...props}
        />
    )
}

export const PageSectionDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <Typography
            as='p'
            className={cn(['text-stone-600', 'text-pretty'], className)}
            {...props}
        />
    )
}
