import { cn } from '@/utils/cn';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-black/10 dark:bg-white/10',
        className
      )}
      {...props}
    />
  );
}
