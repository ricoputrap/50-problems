'use client';

import React from 'react'
import { Button } from './ui/button'
import { ThumbsUp } from 'lucide-react'

interface Props {
  id: number;
  count: number;
}

const ButtonUpvote: React.FC<Props> = ({ id, count }) => {
  const handleClick = () => {
    console.log(id)
  }

  return (
    <Button onClick={handleClick} className="bg-accent-foreground py-8 px-7">
      <div className="flex flex-col">
        <ThumbsUp size={24} />
        <p className="font-extrabold text-lg">{count}</p>
      </div>
    </Button>
  )
}

export default ButtonUpvote