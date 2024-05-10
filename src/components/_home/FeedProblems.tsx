"use client"

import { IProblemItem } from '@/types/problem.types'
import React from 'react'
import ProblemPost from '../ProblemPost';

interface Props {
  problems: IProblemItem[];
  startCursor?: number;
}

const FeedProblems: React.FC<Props> = ({ problems, startCursor = 0 }) => {
  return (
    <>
      {problems.map(({
        id,
        content,
        username,
        twitter_username,
        upvote_count,
        created_at,
        is_reported,
        isUpvoted
      }, index) => (
        <ProblemPost
          key={id}
          id={id}
          no={index + startCursor + 1}
          content={content}
          username={username}
          twitterID={twitter_username}
          upvoteCount={upvote_count}
          createdAt={created_at}
          isReported={is_reported == 1}
          isUpvoted={isUpvoted}
        />
      ))}
    </>
  )
}

export default FeedProblems