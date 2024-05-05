export type State = {
  username: string;
  upvotedIds: number[];
}

export type Action = {
  setUsername: (username: string) => void;
  setUpvotedIds: (upvotedIds: number[]) => void;
}