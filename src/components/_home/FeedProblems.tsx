"use client"

import { IProblem } from '@/types/problem.types'
import React from 'react'
import ProblemPost from '../ProblemPost';

interface Props {
  problems: IProblem[];
}

const FeedProblems: React.FC<Props> = ({ problems }) => {
  return (
    <>
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
    </>
  )
}

export default FeedProblems