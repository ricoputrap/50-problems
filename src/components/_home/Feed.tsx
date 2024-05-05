import React from 'react'
import InitialPosts from './InitialPosts';
import MoreProblems from './MoreProblems';

export default function Feed() {
  return (
    <div className="flex flex-col gap-3">
      <InitialPosts />
      <MoreProblems />
    </div>
  )
}
