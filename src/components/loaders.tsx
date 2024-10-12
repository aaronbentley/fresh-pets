import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export const GridLoader = ({
    items = 3,
    columns = 3
}: {
    items?: number
    columns?: 2 | 3 | 4
}) => (
    <div
        className={cn([
            'grid',
            'grid-cols-1',
            columns === 2 && 'md:grid-cols-2',
            columns === 3 && 'md:grid-cols-3',
            columns === 4 && 'md:grid-cols-4',
            'gap-6'
        ])}>
        {Array.from({ length: items }).map((_, index) => (
            <Skeleton
                key={index}
                className='aspect-square rounded-lg bg-primary/50 shadow-md'
            />
        ))}
    </div>
)
