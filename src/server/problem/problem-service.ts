import { ICreateProblemParams } from "@/types/problem.types";
import ProblemRepository from "./problem-repository";
import { IProblemRepository } from "./problem-repository.types";

class ProblemService {
  private problemRepository: IProblemRepository;

  constructor() {
    this.problemRepository = new ProblemRepository();
  }

  async getTopUpvoted(cursor: number, size: number) {
    return await this.problemRepository.getTopUpvoted(cursor, size);
  }

  async getTopLatest(cursor: number, size: number) {
    return await this.problemRepository.getTopLatest(cursor, size);
  }

  async create(params: ICreateProblemParams) {
    await this.problemRepository.create(params);
  }

  async upvote(id: number) {
    return await this.problemRepository.upvote(id);
  }

  async downvote(id: number) {
    return await this.problemRepository.downvote(id);
  }
}

export default ProblemService;