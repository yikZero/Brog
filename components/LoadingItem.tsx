export default function LoadingItem() {
  return (
    <>
      <div className="flex flex-row gap-6 sm:gap-12 justify-between items-center text-sm rounded group py-5">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-5 w-32 rounded" />
          <Skeleton className="h-5 w-56 rounded" />
        </div>
        <Skeleton className="h-5 w-20 rounded" />
      </div>
    </>
  );
}

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        className={`bg-gray-200 dark:bg-gray-600 animate-pulse rounded-md bg-muted ${className}`}
        {...props}
      />
    </>
  );
}
