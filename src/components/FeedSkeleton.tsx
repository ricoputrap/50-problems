import React from 'react'
import { Skeleton } from './ui/skeleton'

const FeedSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className='w-full h-24 rounded-xl bg-slate-200' />
      <Skeleton className='w-full h-24 rounded-xl bg-slate-200' />
      <Skeleton className='w-full h-24 rounded-xl bg-slate-200' />
      <Skeleton className='w-full h-24 rounded-xl bg-slate-200' />
      <Skeleton className='w-full h-24 rounded-xl bg-slate-200' />
    </div>
  )
}

export default FeedSkeleton