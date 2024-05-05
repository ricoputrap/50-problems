"use client"

import useProblemStore from '@/stores/problem';
import { EnumFeedTab } from '@/types/feed.types';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import FeedProblems from './FeedProblems';
import { getTopLatestProblems, getTopUpvotedProblems } from '@/server/problem';

const InitialPosts: React.FC = () => {
  const searchParams = useSearchParams();
  const topProblems = useProblemStore((state) => state.topProblems);
  const newProblems = useProblemStore((state) => state.newProblems);
  const setProblems = useProblemStore((state) => state.setProblems);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const tab = searchParams.get('tab') as EnumFeedTab || EnumFeedTab.TOP;

      if (tab === EnumFeedTab.TOP && topProblems.length === 0) {
        const { results: initialPosts } = await getTopUpvotedProblems(0, 5);
        if (initialPosts.length === 0) return;

        setProblems(initialPosts, EnumFeedTab.TOP);
        return;
      }

      if (tab === EnumFeedTab.NEW && newProblems.length === 0) {
        const { results: initialPosts } = await getTopLatestProblems(0, 5);
        if (initialPosts.length === 0) return;

        setProblems(initialPosts, EnumFeedTab.NEW);
        return;
      }
    }

    fetchInitialPosts();
  }, [searchParams, topProblems, newProblems])

  const getInitialPosts = () => {
    const tab = searchParams.get('tab') as EnumFeedTab || EnumFeedTab.TOP;

    if (tab === EnumFeedTab.TOP)
      return topProblems;

    return newProblems;
  }

  return (
    <FeedProblems problems={getInitialPosts()} />
  )
}

export default InitialPosts