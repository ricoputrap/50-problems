import React from 'react'
import { unstable_noStore as noStore } from 'next/cache';
import { getTopLatestProblems, getTopUpvotedProblems } from '@/server/problem';
import MoreProblemPosts from './MoreProblemPosts';
import { EnumFeedTab } from '@/types/feed.types';
import FeedProblems from './FeedProblems';

const getProblems = async (tab: EnumFeedTab) => {
  if (tab === EnumFeedTab.TOP)
    return await getTopUpvotedProblems(0, 5);

  return await getTopLatestProblems(0, 5);
}

export default async function Feed({ tab }: { tab: EnumFeedTab }) {
  noStore();

  const {
    pagination,
    results: problems
  } = await getProblems(tab);

  return (
    <div className="flex flex-col gap-3">
      <FeedProblems problems={problems} />

      <MoreProblemPosts nextCursor={pagination.next_cursor} />
    </div>
  )
}
