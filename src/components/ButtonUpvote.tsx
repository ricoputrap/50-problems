'use client';

import React from 'react'
import { Button } from './ui/button'
import { ThumbsUp } from 'lucide-react'
import { cn } from '@/lib/utils';
import useManageUpvoting from '@/hooks/useManageUpvoting';

interface Props {
  id: number;
  count: number;
}

const ButtonUpvote: React.FC<Props> = ({ id, count }) => {
  const { handleVoting, checkIsUpvoted } = useManageUpvoting();

  const isUpvoted = checkIsUpvoted(id);

  return (
    <Button
      onClick={() => handleVoting(id)}
      className={cn(
        "py-8 px-7",
        isUpvoted ? "bg-destructive" : "bg-accent-foreground"
      )}
    >
      <div className="flex flex-col">
        <ThumbsUp size={24} />
        <p className="font-extrabold text-lg">{count}</p>
      </div>
    </Button>
  )
}

export default ButtonUpvote