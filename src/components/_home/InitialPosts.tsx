"use client"

import useProblemStore from '@/stores/problem';
import { EnumFeedTab } from '@/types/feed.types';
import { IProblem } from '@/types/problem.types'
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import FeedProblems from './FeedProblems';

interface Props {
  initialPosts: IProblem[];
}

const InitialPosts: React.FC<Props> = ({ initialPosts }) => {
  const searchParams = useSearchParams();
  const topProblems = useProblemStore((state) => state.topProblems);
  const newProblems = useProblemStore((state) => state.newProblems);
  const setProblems = useProblemStore((state) => state.setProblems);

  // set initial posts
  useEffect(() => {
    if (initialPosts.length === 0) return;
    
    const tab = searchParams.get('tab') as EnumFeedTab || EnumFeedTab.TOP;

    if (tab === EnumFeedTab.TOP && topProblems.length === 0) {
      setProblems(initialPosts, EnumFeedTab.TOP);
      return;
    }

    if (tab === EnumFeedTab.NEW && newProblems.length === 0) {
      setProblems(initialPosts, EnumFeedTab.NEW);
      return;
    }
  }, [initialPosts, topProblems, newProblems, searchParams]);

  return (
    <FeedProblems problems={initialPosts} />
  )
}

export default InitialPosts