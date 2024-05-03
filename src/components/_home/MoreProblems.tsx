"use client"

import useLoadMoreProblems from '@/hooks/useLoadMoreProblems';
import usePrepareMoreProblems from '@/hooks/usePrepareMoreProblems'
import React from 'react'
import FeedProblems from './FeedProblems';
import { Button } from '../ui/button';

const MoreProblems: React.FC = () => {
  const problems = usePrepareMoreProblems();
  const { isLoading, isFinal, loadMoreProblems } = useLoadMoreProblems();

  return (
    <>
      <FeedProblems problems={problems} startCursor={5} />

      {isFinal ? (
        <p className="py-4 text-center">No more problems</p>
      ) : (
        <Button variant="ghost" onClick={loadMoreProblems}>
          {isLoading ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </>
  )
}

export default MoreProblems