'use client';

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ThumbsUp } from 'lucide-react'
import { downvoteProblem as downvote, upvoteProblem as upvote } from '@/server/problem';
import { cn } from '@/lib/utils';
import useProblemStore from '@/stores/problem';

interface Props {
  id: number;
  count: number;
}

const ButtonUpvote: React.FC<Props> = ({ id, count }) => {
  /**
   * TODO: use local storage to store the id of upvoted problems
   */
  const [isUpvoted, setIsUpvoted] = useState(false);
  const upvoteProblem = useProblemStore((state) => state.upvoteProblem);
  const downvoteProblem = useProblemStore((state) => state.downvoteProblem);

  const handleClick = async () => {
    if (isUpvoted) {
      const success = await downvote(id);
      if (success) {
        setIsUpvoted(false);
        downvoteProblem(id);
        // setUpvotedCount(prevCount => prevCount - 1)
      }

      return;
    }

    const success = await upvote(id);
    if (success) {
      setIsUpvoted(true);
      upvoteProblem(id);
      // setUpvotedCount(prevCount => prevCount + 1)
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
        <p className="font-extrabold text-lg">{count}</p>
      </div>
    </Button>
  )
}

export default ButtonUpvote