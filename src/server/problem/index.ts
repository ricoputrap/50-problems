"use server"

import { ICreateProblemParams } from "@/types/problem.types";
import ProblemService from "./problem-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import { getCookie, setCookie } from "@/lib/cookies.utils";
import { COOKIE_KEY_UPVOTED_IDS } from "../../../constants";

const problemService = new ProblemService();

const schema = z.object({
  content: z.string().min(1).max(256),
  username: z.string().min(1),
  twitter_username: z.string().optional(),
})

export async function createProblem(formData: FormData) {
  try {
    const validatedFields = schema.safeParse(Object.fromEntries(formData));
    if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors);
      throw new Error("Failed to create problem")
    }
  
    const params: ICreateProblemParams = {
      content: validatedFields.data.content,
      username: validatedFields.data.username,
      twitter_username: validatedFields.data.twitter_username
    }
    
    await problemService.create(params);
  }
  catch (error) {
    return {
      message: "Failed to create problem",
    }
  }
  revalidatePath("/");
  redirect("/");
}

/**
 * Get the top upvoted problems
 * @param cursor an identifier for the last item fetched. The DB query will make use of this identifier.
 * @param size the number of problems to return per page
 */
export async function getTopUpvotedProblems(cursor: number, size: number) {
  const problems = await problemService.getTopUpvoted(cursor, size);

  return {
    pagination: {
      size,
      next_cursor: cursor + size
    },
    results: problems
  }
}

/**
 * Get the top latest problems
 * @param cursor an identifier for the last item fetched. The DB query will make use of this identifier.
 * @param size the number of problems to return per page
 */
export async function getTopLatestProblems(cursor: number, size: number) {
  const problems = await problemService.getTopLatest(cursor, size);

  return {
    pagination: {
      size,
      next_cursor: cursor + size
    },
    results: problems
  }
}

export async function upvoteProblem(id: number) {
  const success = await problemService.upvote(id);

  if (success) {
    const upvotedIds = getCookie<number[]>(COOKIE_KEY_UPVOTED_IDS, []);
    upvotedIds.push(id);

    setCookie<number[]>(COOKIE_KEY_UPVOTED_IDS, upvotedIds);
  }

  revalidatePath("/");
  return success;
}

export async function downvoteProblem(id: number) {
  const success = await problemService.downvote(id);

  if (success) {
    const upvotedIds = getCookie<number[]>(COOKIE_KEY_UPVOTED_IDS, []);
    upvotedIds.splice(upvotedIds.indexOf(id), 1);

    setCookie<number[]>(COOKIE_KEY_UPVOTED_IDS, upvotedIds);
  }

  revalidatePath("/");
  return success;
}

export async function getAllTopUpvotedProblems() {
  const MAX_SIZE = 50;

  return await problemService.getTopUpvoted(0, MAX_SIZE);
}

export async function getAllTopLatestProblems() {
  const MAX_SIZE = 50;

  return await problemService.getTopLatest(0, MAX_SIZE);
}