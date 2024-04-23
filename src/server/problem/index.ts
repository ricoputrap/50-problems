"use server"

import { ICreateProblemParams } from "@/types/problem.types";
import ProblemService from "./problem-service";
import { revalidatePath } from "next/cache";

const problemService = new ProblemService();

export async function createProblem(params: ICreateProblemParams) {
  await problemService.create(params);
  revalidatePath("/");
}