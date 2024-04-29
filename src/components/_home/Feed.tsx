import React from 'react'
import { getTopUpvotedProblems } from '@/server/problem';
import ProblemPost from '@/components/ProblemPost';

export default async function Feed() {
  const problems = await getTopUpvotedProblems(0, 10);

  return (
    <div className="mt-4 flex flex-col gap-3">
      {problems.results.map(({
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
    </div>
  )
}
