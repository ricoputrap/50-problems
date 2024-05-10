import React from 'react'
import { EnumFeedTab } from '@/types/feed.types';
import { getAllTopLatestProblems, getAllTopUpvotedProblems } from '@/server/problem';
import FeedProblems from './FeedProblems';
import { getCookie } from '@/lib/cookies.utils';
import { IProblemItem } from '@/types/problem.types';

const getProblems = async (tab: EnumFeedTab) => {
  const problems = tab === EnumFeedTab.TOP
    ? await getAllTopUpvotedProblems()
    : await getAllTopLatestProblems();

  const upvotedIds = getCookie<number[]>("upvoted-ids", []);

  return problems.map((item) => {
    const problem: IProblemItem = {
      ...item,
      isUpvoted: upvotedIds.includes(item.id)
    }

    return problem;
  })
}

export default async function Feed({ tab }: { tab: EnumFeedTab }) {
  const problems = await getProblems(tab);

  return (
    <div className="flex flex-col gap-3">
      <FeedProblems problems={problems} />
    </div>
  )
}
