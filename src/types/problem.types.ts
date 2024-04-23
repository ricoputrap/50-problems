export interface IProblem {
  id: number
  content: string
  upvote_count: number
  username: string
  twitter_username: string
  created_at: number
}

export interface ICreateProblemParams {
  content: string
  username: string
  twitter_username?: string
}