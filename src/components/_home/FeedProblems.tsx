"use client"

import { IProblem } from '@/types/problem.types'
import React from 'react'
import ProblemPost from '../ProblemPost';

interface Props {
  problems: IProblem[];
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
        created_at
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
        />
      ))}
    </>
  )
}

export default FeedProblems