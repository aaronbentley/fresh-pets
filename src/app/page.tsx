import { Button } from '@/components/ui/button'
import { ChevronRight, Loader2, Mail } from 'lucide-react'

export default function Home() {
    return (
        <div className='container flex flex-col h-screen justify-center items-center gap-4'>
            <h1 className='text-brand text-5xl font-black mb-48'>Fresh-Pets</h1>

            <div className='my-12 flex items-center gap-8'>
                <Button className='bg-brand'>Button</Button>
                <Button>Button</Button>
                <Button variant='destructive'>Destructive</Button>
                <Button variant='outline'>Outline</Button>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='link'>Link</Button>
            </div>
            <div className='my-12 flex items-center gap-8'>
                <Button
                    variant='outline'
                    size='icon'>
                    <ChevronRight className='h-4 w-4' />
                </Button>
                <Button>
                    <Mail className='mr-2 h-4 w-4' /> Login with Email
                </Button>{' '}
                <Button disabled>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Please wait
                </Button>
            </div>
        </div>
    )
}
