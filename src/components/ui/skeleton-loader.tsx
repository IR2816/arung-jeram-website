'use client'

import { Skeleton } from 'boneyard'
import { cn } from '@/lib/utils'

interface SkeletonLoaderProps {
  className?: string
  count?: number
  height?: string | number
  width?: string | number
  circle?: boolean
  containerClassName?: string
}

export function SkeletonLoader({
  className,
  count = 1,
  height = 16,
  width = '100%',
  circle = false,
  containerClassName,
}: SkeletonLoaderProps) {
  return (
    <div className={cn('space-y-3', containerClassName)}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'rounded-md',
            circle && 'rounded-full',
            className
          )}
          style={{
            height: typeof height === 'number' ? `${height}px` : height,
            width: typeof width === 'number' ? `${width}px` : width,
          }}
        />
      ))}
    </div>
  )
}

export function ContactInfoSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          <Skeleton className="rounded-xl" style={{ width: 48, height: 48, minWidth: 48 }} />
          <div className="flex-1 space-y-2">
            <Skeleton style={{ width: '40%', height: 20 }} className="rounded-md" />
            <Skeleton style={{ width: '80%', height: 16 }} className="rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-5">
      {/* Name fields */}
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-2">
          <Skeleton style={{ width: 40, height: 16 }} className="rounded-md" />
          <Skeleton style={{ width: '100%', height: 44 }} className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Skeleton style={{ width: 40, height: 16 }} className="rounded-md" />
          <Skeleton style={{ width: '100%', height: 44 }} className="rounded-xl" />
        </div>
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <Skeleton style={{ width: 40, height: 16 }} className="rounded-md" />
        <Skeleton style={{ width: '100%', height: 44 }} className="rounded-xl" />
      </div>

      {/* Phone field */}
      <div className="space-y-2">
        <Skeleton style={{ width: 40, height: 16 }} className="rounded-md" />
        <Skeleton style={{ width: '100%', height: 44 }} className="rounded-xl" />
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <Skeleton style={{ width: 60, height: 16 }} className="rounded-md" />
        <Skeleton style={{ width: '100%', height: 120 }} className="rounded-xl" />
      </div>

      {/* Submit button */}
      <Skeleton style={{ width: '100%', height: 44 }} className="rounded-xl" />
    </div>
  )
}
