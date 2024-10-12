import { Typography, typographyVariants } from '@/components/typography'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'

export const PageSection = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <section
            className={cn(
                'mx-auto flex max-w-[980px] flex-col items-start justify-around gap-8 px-4 py-10 md:py-20',
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
            className={cn(['text-foreground', 'text-pretty'], className)}
            {...props}
        />
    )
}
