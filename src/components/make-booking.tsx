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

const MakeBooking = () => (
    <Dialog>
        <DialogTrigger asChild>
            <Button
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
                Make a Booking
                {/* <a
                    href={process.env.APP_SOCIAL_MESSENGER!}
                    title='Make a Booking with Fresh pets'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Make a Booking
                </a> */}
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
                <div className='flex flex-col items-center gap-2 group'>
                    <a
                        title={`Call ${process.env.APP_TITLE!}`}
                        aria-label='Phone'
                        href={`tel://${process.env.APP_CONTACT_PHONE!}`}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <Phone className='size-8' />
                    </a>
                    Phone
                </div>

                <div className='flex flex-col items-center gap-2 group'>
                    <a
                        title='Messenger'
                        aria-label='Messenger'
                        href={process.env.APP_SOCIAL_MESSENGER!}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <Messenger className='size-8' />
                    </a>
                    Messenger
                </div>

                <div className='flex flex-col items-center gap-2 group'>
                    <a
                        title='WhatsApp'
                        aria-label='WhatsApp'
                        href={process.env.APP_SOCIAL_WHATSAPP!}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <WhatsApp className='size-8' />
                    </a>
                    WhatsApp
                </div>

                <div className='flex flex-col items-center gap-2 group'>
                    <a
                        title={`Email ${process.env.APP_TITLE!}`}
                        aria-label='Email'
                        href={`mailto:${process.env
                            .APP_CONTACT_EMAIL!}?subject=Booking%20appointment%20with%20Fresh%20Pets`}
                        target='_blank'
                        className='transition-all duration-200 cursor-pointer group-hover:scale-125 text-brand-dark dark:text-brand-light'>
                        <Email className='size-8' />
                    </a>
                    Email
                </div>
            </div>
        </DialogContent>
    </Dialog>
)

export default MakeBooking
