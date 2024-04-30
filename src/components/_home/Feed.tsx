import React from 'react'
import { unstable_noStore as noStore } from 'next/cache';
import { getTopUpvotedProblems } from '@/server/problem';
import ProblemPost from '@/components/ProblemPost';
import MoreProblemPosts from './MoreProblemPosts';

export default async function Feed() {
  noStore();

  const {
    pagination,
    results: problems
  } = await getTopUpvotedProblems(0, 5);

  return (
    <div className="flex flex-col gap-3">
      {problems.map(({
        id,
        content,
        username,
        twitter_username,
        upvote_count,
        created_at
      }) => (
        <ProblemPost
          key={id}
          id={id}
          content={content}
          username={username}
          twitterID={twitter_username}
          upvoteCount={upvote_count}
          createdAt={created_at}
        />
      ))}

      <MoreProblemPosts nextCursor={pagination.next_cursor} />
    </div>
  )
}
