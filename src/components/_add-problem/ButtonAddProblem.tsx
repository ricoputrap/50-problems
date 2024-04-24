"use client";

import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

const ButtonAddProblem: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Adding...' : '+ Add Problem'}
    </Button>
  )
}

export default ButtonAddProblem