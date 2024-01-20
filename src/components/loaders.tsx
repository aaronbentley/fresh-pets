import { Skeleton } from './ui/skeleton'

export const GridLoader = ({ items = 3 }: { items?: number }) => (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {Array.from({ length: items }).map((_, index) => (
            <Skeleton
                key={index}
                className='aspect-square rounded-lg shadow-md bg-brand-dark/50 dark:bg-brand-light/50'
            />
        ))}
    </div>
)
