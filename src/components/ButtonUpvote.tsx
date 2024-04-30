'use client';

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ThumbsUp } from 'lucide-react'
import { downvoteProblem, upvoteProblem } from '@/server/problem';
import { cn } from '@/lib/utils';

interface Props {
  id: number;
  count: number;
}

const ButtonUpvote: React.FC<Props> = ({ id, count }) => {
  /**
   * TODO: use local storage to store the id of upvoted problems
   */
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvotedCount, setUpvotedCount] = useState(count);

  const handleClick = async () => {
    if (isUpvoted) {
      const success = await downvoteProblem(id);
      if (success) {
        setIsUpvoted(false);
        setUpvotedCount(prevCount => prevCount - 1)
      }

      return;
    }

    const success = await upvoteProblem(id);
    if (success) {
      setIsUpvoted(true);
      setUpvotedCount(prevCount => prevCount + 1)
    }
  }

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "py-8 px-7",
        isUpvoted ? "bg-destructive" : "bg-accent-foreground"
      )}
    >
      <div className="flex flex-col">
        <ThumbsUp size={24} />
        <p className="font-extrabold text-lg">{upvotedCount}</p>
      </div>
    </Button>
  )
}

export default ButtonUpvote