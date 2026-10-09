import { Email, Messenger, Phone, WhatsApp } from '@/components/icons'
import { Typography, typographyVariants } from '@/components/typography'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'

const MakeBooking = ({ children }: { children: React.ReactElement }) => (
    <Dialog>
        <DialogTrigger render={children} />
        <DialogContent className='sm:max-w-lg'>
            <DialogHeader>
                <DialogTitle className={typographyVariants({ variant: 'h5' })}>
                    Make a Booking
                </DialogTitle>
                <DialogDescription>
                    Get in touch with us to book your appointment
                </DialogDescription>
            </DialogHeader>

            <div className='mb-2 mt-8 flex w-full justify-around'>
                <div className='group flex flex-col items-center gap-4'>
                    <a
                        title={`Call ${process.env.APP_TITLE!}`}
                        aria-label='Phone'
                        href={`tel://${process.env.APP_CONTACT_PHONE!}`}
                        target='_blank'
                        className='cursor-pointer text-primary transition-all duration-200 group-hover:scale-125'>
                        <Phone className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm font-bold sm:text-base'>
                        Phone
                    </Typography>
                </div>

                <div className='group flex flex-col items-center gap-4'>
                    <a
                        title='Messenger'
                        aria-label='Messenger'
                        href={process.env.APP_SOCIAL_MESSENGER!}
                        target='_blank'
                        className='cursor-pointer text-primary transition-all duration-200 group-hover:scale-125'>
                        <Messenger className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm font-bold sm:text-base'>
                        Messenger
                    </Typography>
                </div>

                <div className='group flex flex-col items-center gap-4'>
                    <a
                        title='WhatsApp'
                        aria-label='WhatsApp'
                        href={process.env.APP_SOCIAL_WHATSAPP!}
                        target='_blank'
                        className='cursor-pointer text-primary transition-all duration-200 group-hover:scale-125'>
                        <WhatsApp className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm font-bold sm:text-base'>
                        WhatsApp
                    </Typography>
                </div>

                <div className='group flex flex-col items-center gap-4'>
                    <a
                        title={`Email ${process.env.APP_TITLE!}`}
                        aria-label='Email'
                        href={`mailto:${process.env
                            .APP_CONTACT_EMAIL!}?subject=Booking%20appointment%20with%20Fresh%20Pets`}
                        target='_blank'
                        className='cursor-pointer text-primary transition-all duration-200 group-hover:scale-125'>
                        <Email className='size-6 sm:size-7 md:size-8' />
                    </a>
                    <Typography
                        muted
                        className='text-sm font-bold sm:text-base'>
                        Email
                    </Typography>
                </div>
            </div>
        </DialogContent>
    </Dialog>
)

export default MakeBooking
