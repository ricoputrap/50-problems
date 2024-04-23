import { ICreateProblemParams } from "@/types/problem.types";

export interface IProblemRepository {
  create: (params: ICreateProblemParams) => Promise<void>;
}