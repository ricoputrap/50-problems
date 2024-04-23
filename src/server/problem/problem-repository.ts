import { ICreateProblemParams } from "@/types/problem.types";
import { IProblemRepository } from "./problem-repository.types";
import db from "@/db";
import { problem as problemTable } from "@/db/drizzle.schema";

class ProblemRepository implements IProblemRepository {
  async create(params: ICreateProblemParams) {
    const { content, username, twitter_username } = params;

    await db
      .insert(problemTable)
      .values({ content, username, twitter_username });
  }
}

export default ProblemRepository;