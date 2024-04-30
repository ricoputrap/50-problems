import { ICreateProblemParams, IProblem } from "@/types/problem.types";

export interface IProblemRepository {
  getTopUpvoted: (cursor: number, size: number) => Promise<IProblem[]>;
  create: (params: ICreateProblemParams) => Promise<void>;
  upvote: (id: number) => Promise<boolean>;
  downvote: (id: number) => Promise<boolean>;
}