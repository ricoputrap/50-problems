import { ICreateProblemParams } from "@/types/problem.types";
import { IProblemRepository } from "./problem-repository.types";
import db from "@/db";
import { problem as problemTable } from "@/db/drizzle.schema";
import { desc } from "drizzle-orm";

class ProblemRepository implements IProblemRepository {
  async getTopUpvoted(cursor: number, size: number) {
    const problems = await db
      .select()
      .from(problemTable)
      .orderBy(desc(problemTable.upvote_count))
      .limit(size)
      .offset(cursor);

    return problems
  }

  async create(params: ICreateProblemParams) {
    const { content, username, twitter_username } = params;

    await db
      .insert(problemTable)
      .values({ content, username, twitter_username });
  }
}

export default ProblemRepository;