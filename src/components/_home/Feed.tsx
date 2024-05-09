import React from 'react'
import { EnumFeedTab } from '@/types/feed.types';
import { getAllTopLatestProblems, getAllTopUpvotedProblems } from '@/server/problem';
import FeedProblems from './FeedProblems';

export default async function Feed({ tab }: { tab: EnumFeedTab }) {
  const problems = tab === EnumFeedTab.TOP
    ? await getAllTopUpvotedProblems()
    : await getAllTopLatestProblems();

  return (
    <div className="flex flex-col gap-3">
      <FeedProblems problems={problems} />
    </div>
  )
}
