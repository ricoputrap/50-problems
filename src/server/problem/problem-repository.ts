import { ICreateProblemParams } from "@/types/problem.types";
import { IProblemRepository } from "./problem-repository.types";
import db from "@/db";
import {
  problem as problemTable,
  report as reportTable
} from "@/db/drizzle.schema";
import { desc, eq, sql } from "drizzle-orm";

class ProblemRepository implements IProblemRepository {
  
  /**
   * Get the top upvoted problems.
   * When two problems have the same upvote count,
   * they are sorted in descending order by created_at (newest first).
   * @param cursor an identifier for the last item fetched.
   * @param size the number of problems to return per page
   * @returns an array top <size> upvoted problems
   */
  async getTopUpvoted(cursor: number, size: number) {
    const problems = await db
      .select()
      .from(problemTable)
      .orderBy(desc(problemTable.upvote_count), desc(problemTable.created_at))
      .limit(size)
      .offset(cursor);

    return problems
  }

  /**
   * Get the top latest problems
   * @param cursor an identifier for the last item fetched
   * @param size the number of problems to return per page
   * @returns an array top <size> latest problems
   */
  async getTopLatest(cursor: number, size: number) {
    const problems = await db
      .select()
      .from(problemTable)
      .orderBy(desc(problemTable.created_at))
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

  async upvote(id: number) {
    try {
      await db
        .update(problemTable)
        .set({
          upvote_count: sql`${problemTable.upvote_count} + 1`
        })
        .where(eq(problemTable.id, id));

      return true;
    }
    catch (error) {
      // TODO: handle error properly
      return false;
    }
  }

  async downvote(id: number) {
    try {
      await db
        .update(problemTable)
        .set({
          upvote_count: sql`${problemTable.upvote_count} - 1`
        })
        .where(eq(problemTable.id, id));

      return true;
    }
    catch (error) {
      // TODO: handle error properly
      return false;
    }
  }

  async report(id: number) {
    try {
      await db
        .insert(reportTable)
        .values({ problem_id: id });

      return true;
    }
    catch (error) {
      // TODO: handle error properly
      return false;
    }
  }
}

export default ProblemRepository;