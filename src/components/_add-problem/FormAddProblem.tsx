import { createProblem } from '@/server/problem'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import ButtonAddProblem from './ButtonAddProblem'

const FormAddProblem: React.FC = () => {
  return (
    <form action={createProblem}>
      <Textarea
        name="content"
        placeholder="What's your problem?"
        className="mt-3"
        maxLength={256}
        required
      />

      <div className="mt-8">
        <Label htmlFor='username' className="text-sm font-bold">
          Your username*
        </Label>
        <Input type="text" id="username" name="username" required />
      </div>

      <div className="mt-8">
        <Label htmlFor='twitter_username' className="text-sm font-bold">
          Your twitter ID (<i>e.g. johndoe</i>)*
        </Label>
        <Input type="text" id="twitter_username" name="twitter_username" />
      </div>

      <div className="flex justify-end mt-3">
        <ButtonAddProblem />
      </div>
    </form>
  )
}

export default FormAddProblem