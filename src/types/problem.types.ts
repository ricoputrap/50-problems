export interface IProblem {
  id: number
  content: string
  upvote_count: number
  username: string
  twitter_username: string
  created_at: number
  is_reported: number
}

export interface IProblemItem extends IProblem {
  isUpvoted: boolean
}

export interface ICreateProblemParams {
  content: string
  username: string
  twitter_username?: string
}

export interface IFormState {
  success: boolean;
  values: {
    content: string;
    username: string;
    twitter_username: string;
  }
  errors: {
    content?: string;
    username?: string;
    twitter_username?: string;
  }
}
