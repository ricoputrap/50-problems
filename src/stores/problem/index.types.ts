import { EnumFeedTab } from "@/types/feed.types";
import { IProblem } from "@/types/problem.types";

export type State = {
  topProblems: IProblem[],
  newProblems: IProblem[],

  isTopFinal: boolean,
  isNewFinal: boolean
}

export type Action = {
  addProblems: (problems: IProblem[], tab: EnumFeedTab) => void,
  setProblems: (problems: IProblem[], tab: EnumFeedTab) => void,
  setIsFinal: (isFinal: boolean, tab: EnumFeedTab) => void,
  upvoteProblem: (id: number) => void,
  downvoteProblem: (id: number) => void
}