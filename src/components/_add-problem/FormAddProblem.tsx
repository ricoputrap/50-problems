"use client"

import { createProblem } from '@/server/problem'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import ButtonAddProblem from './ButtonAddProblem'
import { useFormState } from 'react-dom'
import { getCookieClient } from '@/lib/cookies-client.utils'
import { cn } from '@/lib/utils'

const FormAddProblem: React.FC = () => {
  const [state, action] = useFormState(createProblem, {
    success: false,
    values: {
      content: '',
      username: '',
      twitter_username: '',
    },
    errors: {}
  });

  const usernameCookie = getCookieClient<string>('username', '');
  const twitterUsernameCookie = getCookieClient<string>('twitter_username', '');

  const username = usernameCookie || state.values.username;
  const twitterUsername = twitterUsernameCookie || state.values.twitter_username;

  return (
    <form action={action}>
      <Textarea
        name="content"
        placeholder="What's your problem?"
        className="mt-3"
        maxLength={256}
        defaultValue={state.values.content}
        required
      />

      <div className={cn(
        "mt-8",
        username && "hidden"
      )}>
        <Label htmlFor='username' className="text-sm font-bold">
          Your username*
        </Label>
        <Input
          type="text"
          id="username"
          name="username"
          defaultValue={username}
          required
        />
      </div>

      <div className={cn(
        "mt-8",
        username && "hidden"
      )}>
        <Label htmlFor='twitter_username' className="text-sm font-bold">
          Your twitter ID (<i>e.g. johndoe</i>)*
        </Label>
        <Input
          type="text"
          id="twitter_username"
          name="twitter_username"
          defaultValue={twitterUsername}
        />
      </div>

      <div className="flex justify-end mt-3">
        <ButtonAddProblem />
      </div>
    </form>
  )
}

export default FormAddProblem