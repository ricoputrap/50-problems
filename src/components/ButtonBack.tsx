'use client'

import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const ButtonBack: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "w-fit pl-2 pr-3 py-2 rounded-md ",
        "flex items-center gap-2",
        "cursor-pointer hover:bg-slate-200"
      )}
    >
      <ChevronLeft className="h-4 w-4" />
      Back
    </div>
  )
}

export default ButtonBack