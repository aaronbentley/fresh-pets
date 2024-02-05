import doggoFour from '@/assets/img/doggo-four.jpg'
import {
    PageHero,
    PageHeroDescription,
    PageHeroHeading
} from '@/components/page-hero'
import { PageSection, PageSectionHeading } from '@/components/page-section'
import { Typography } from '@/components/typography'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'FAQ'
}

const Faq = () => {
    return (
        <>
            <div className='overflow-hidden w-full relative after:absolute after:inset-0 after:z-10 after:bg-brand  after:bg-opacity-75 after:backdrop-contrast-150 h-96'>
                <Image
                    src={doggoFour}
                    alt='Doggo'
                    placeholder='blur'
                    priority={true}
                    sizes='100vw'
                    fill={true}
                    className='w-full object-cover'
                />
                <PageHero className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                    <PageHeroHeading className='text-background drop-shadow-sm'>
                        FAQ
                    </PageHeroHeading>

                    <PageHeroDescription className='text-background drop-shadow-sm'>
                        Get answers to your most frequently asked questions
                    </PageHeroDescription>
                </PageHero>
            </div>

            <div className='container flex flex-col gap-6 py-20'>
                <PageSection>
                    <PageSectionHeading className='text-brand'>
                        Here to help you
                    </PageSectionHeading>
                    <Typography
                        variant='lead'
                        className='md:w-2/3 font-bold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero lectus, euismod sit amet vestibulum sed.
                    </Typography>
                </PageSection>
            </div>

            <div className='container max-w-[880px] px-4 mx-auto'>
                <Accordion
                    type='single'
                    className='w-full'
                    collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            How long will the groom take?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography variant='p'>
                                On average a full groom will take 2.5 hours
                                however the length of time is dependable on
                                size, coat type and temperament.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-2'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            Do you have a mild shampoo for itchy skin?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography variant='p'>
                                Yes we do. We can also offer advice on possible
                                causes and solutions when you come in for your
                                appointment.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-3'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            Can I stay with my dog whilst being groomed?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography
                                variant='p'
                                className='mb-6'>
                                We find that the majority of dogs, even very
                                nervous ones, cope well once grooming has
                                started and can actually become more anxious
                                with their owner present.
                            </Typography>
                            <Typography variant='p'>
                                If you are worried that your dog is going to
                                find the grooming process stressful, you can
                                stay close by and a member of the team will
                                phone you to come back and stay if necessary.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-4'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            My dog is knotty, will this cost extra?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography variant='p'>
                                A few knots here and there will not increase the
                                price however, severe matting will result in
                                higher charges due to the added wear on our
                                equipment and additonal time required for the
                                type of groom.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-5'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            Do you offer a dry clip service?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography variant='p'>
                                We do not offer a dry clip service.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-6'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            Do you offer an ear plucking service?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography variant='p'>
                                Only if absolutely necessary and with owners
                                consent. We will not pluck ears if there is any
                                sign of an infection or trauma to the ear.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-8'>
                        <AccordionTrigger className='text-xl font-bold text-start'>
                            What type of payment do you accept?
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <Typography
                                variant='p'
                                className='mb-6'>
                                We accept cash or card payments.
                            </Typography>
                            <Typography variant='p'>
                                We do not accept cheques.
                            </Typography>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default Faq
