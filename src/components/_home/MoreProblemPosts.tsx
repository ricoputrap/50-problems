"use client"

import { getTopLatestProblems, getTopUpvotedProblems } from '@/server/problem';
import { IProblem } from '@/types/problem.types';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import FeedProblems from './FeedProblems';
import { useSearchParams } from 'next/navigation';
import { EnumFeedTab } from '@/types/feed.types';

interface Props {
  nextCursor: number;
}

const MoreProblemPosts: React.FC<Props> = ({ nextCursor }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isTopFinal, setIsTopFinal] = useState(false);
  const [topProblems, setTopProblems] = useState<IProblem[]>([]);
  const [topCursor, setTopCursor] = useState(nextCursor);

  const [isNewFinal, setIsNewFinal] = useState(false);
  const [newProblems, setNewProblems] = useState<IProblem[]>([]);
  const [newCursor, setNewCursor] = useState(nextCursor);

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') as EnumFeedTab;
  const isFinal = tab === EnumFeedTab.TOP ? isTopFinal : isNewFinal;
  const problems = tab === EnumFeedTab.TOP ? topProblems : newProblems;

  const getMoreProblems = async () => {
    setIsLoading(true);
    const { pagination, results: moreProblems } = tab === EnumFeedTab.TOP
      ? await getTopUpvotedProblems(topCursor, 5)
      : await getTopLatestProblems(newCursor, 5);

    if (moreProblems.length > 0) {
      if (tab === EnumFeedTab.TOP) {
        setTopProblems(prevProblems => [...prevProblems, ...moreProblems]);
        setTopCursor(pagination.next_cursor);
      }
      else {
        setNewProblems(prevProblems => [...prevProblems, ...moreProblems]);
        setNewCursor(pagination.next_cursor);
      }
    }
    else {
      if (tab === EnumFeedTab.TOP)
        setIsTopFinal(true);
      else
        setIsNewFinal(true);
    }

    setIsLoading(false);
  }

  return (
    <>
      <FeedProblems problems={problems} startCursor={nextCursor} />

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