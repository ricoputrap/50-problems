'use client';

import { reportProblem } from '@/server/problem';
import React from 'react'

interface Props {
  id: number;
}

const LinkReportProblem: React.FC<Props> = ({ id }) => {
  const handleClick = async () => {
    await reportProblem(id);
  }

  return (
    <span
      className="cursor-pointer hover:underline"
      onClick={handleClick}
    >
      report
    </span>
  )
}

export default LinkReportProblem