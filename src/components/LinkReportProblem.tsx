'use client';

import React from 'react'

interface Props {
  id: number;
}

const LinkReportProblem: React.FC<Props> = ({ id }) => {
  const handleClick = () => {
    console.log("Report problem ", id);
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