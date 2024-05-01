"use client"

import { getTopUpvotedProblems } from '@/server/problem';
import { IProblem } from '@/types/problem.types';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import FeedProblems from './FeedProblems';

interface Props {
  nextCursor: number;
}

const MoreProblemPosts: React.FC<Props> = ({ nextCursor }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [problems, setProblems] = useState<IProblem[]>([]);
  const [cursor, setCursor] = useState(nextCursor);

  const getMoreProblems = async () => {
    setIsLoading(true);
    const { pagination, results: moreProblems } = await getTopUpvotedProblems(cursor, 5);

    if (moreProblems.length > 0) {
      setProblems(currentProblems => [...currentProblems, ...moreProblems]);
      setCursor(pagination.next_cursor);
    }
    else {
      setIsFinal(true);
    }

    setIsLoading(false);
  }

  return (
    <>
      <FeedProblems problems={problems} />

      {isFinal ? (
        <p className="py-4 text-center">No more problems</p>
      ) : (
        <Button variant="ghost" onClick={getMoreProblems}>
          {isLoading ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </>
  )
}

export default MoreProblemPosts