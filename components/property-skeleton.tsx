import { Skeleton } from "@/components/ui/skeleton"

interface PropertySkeletonProps {
  count?: number
}

export function PropertySkeleton({ count = 6 }: PropertySkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Skeleton className="h-48 w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2 mb-3" />
              <div className="flex items-center justify-between mb-3">
                <Skeleton className="h-4 w-1/3" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-1/6" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
