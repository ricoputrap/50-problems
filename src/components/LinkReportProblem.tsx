'use client';

import { cn } from '@/lib/utils';
import { reportProblem } from '@/server/problem';
import React from 'react'

interface Props {
  id: number;
  isReported: boolean;
}

const LinkReportProblem: React.FC<Props> = ({ id, isReported }) => {
  const handleClick = async () => {
    if (isReported) return;
    await reportProblem(id);
  }

  return (
    <span
      className={cn(
        isReported ? "text-red-500" : "cursor-pointer hover:underline"
      )}
      onClick={handleClick}
    >
      {isReported ? 'reported' : 'report'}
    </span>
  )
}

export default LinkReportProblem