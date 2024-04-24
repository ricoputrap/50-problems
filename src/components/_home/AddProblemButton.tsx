'use client';

import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const AddProblemButton = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/problem/add');
  }

  return (
    <Button className="font-bold" onClick={handleClick}>
      + Add Problem
    </Button>
  )
}

export default AddProblemButton