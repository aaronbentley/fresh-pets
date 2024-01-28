import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Email, Messenger, Phone, WhatsApp } from './icons'
import { Typography } from './typography'
import { Button, buttonVariants } from './ui/button'

const MakeBooking = ({
    buttonSize = 'sm',
    buttonVariant = 'default',
    buttonClassName = ''
}: {
    buttonSize?: 'sm' | 'default' | 'lg' | 'icon'
    buttonVariant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link'
    buttonClassName?: string
}) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button
                className={cn(
                    buttonVariants({
                        variant: buttonVariant,
                        size: buttonSize
                    }),
                    [
                        'font-bold',
                        'bg-brand-dark',
                        'dark:bg-brand-light',
                        'text-background',
                        'hover:bg-brand',
                        'dark:hover:bg-brand',
                        'hover:cursor-pointer'
                    ],
                    buttonClassName
                )}>
                Make a Booking
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle asChild>
                    <Typography variant='h5'>Make a Booking</Typography>
                </DialogTitle>
                <DialogDescription>
                    Get in touch with us to book your appointment
                </DialogDescription>
            </DialogHeader>

            <div className='flex w-full justify-around mt-8 mb-2'>
                <div className='flex flex-col items-center gap-4 group'>
                    <a
                        title={`Call ${process.env.APP_TITLE!}`}
                        aria-label='Phone'
                        href={`tel://${process.env.APP_CONTACT_PHONE!}`}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <Phone className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm sm:text-base font-bold'>
                        Phone
                    </Typography>
                </div>

                <div className='flex flex-col items-center gap-4 group'>
                    <a
                        title='Messenger'
                        aria-label='Messenger'
                        href={process.env.APP_SOCIAL_MESSENGER!}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <Messenger className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm sm:text-base font-bold'>
                        Messenger
                    </Typography>
                </div>

                <div className='flex flex-col items-center gap-4 group'>
                    <a
                        title='WhatsApp'
                        aria-label='WhatsApp'
                        href={process.env.APP_SOCIAL_WHATSAPP!}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <WhatsApp className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm sm:text-base font-bold'>
                        WhatsApp
                    </Typography>
                </div>

                <div className='flex flex-col items-center gap-4 group'>
                    <a
                        title={`Email ${process.env.APP_TITLE!}`}
                        aria-label='Email'
                        href={`mailto:${process.env
                            .APP_CONTACT_EMAIL!}?subject=Booking%20appointment%20with%20Fresh%20Pets`}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <Email className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm sm:text-base font-bold'>
                        Email
                    </Typography>
                </div>
            </div>
        </DialogContent>
    </Dialog>
)

export default MakeBooking
