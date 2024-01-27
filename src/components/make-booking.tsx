import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/button'

const MakeBooking = () => (
    <Button
        asChild
        className={cn(
            buttonVariants({
                variant: 'default',
                size: 'sm'
            }),
            'font-black',
            'bg-brand-dark',
            'dark:bg-brand-light',
            'text-background',
            'hover:bg-brand',
            'dark:hover:bg-brand',
            'md:h-10',
            'md:px-4',
            'md:py-2',
            'hover:cursor-pointer'
        )}>
        <a
            href={process.env.APP_SOCIAL_MESSENGER!}
            title='Make a Booking with Fresh pets'
            target='_blank'
            rel='noopener noreferrer'>
            Make a Booking
        </a>
    </Button>
)

export default MakeBooking
