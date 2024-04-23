import { ICreateProblemParams } from "@/types/problem.types";
import ProblemRepository from "./problem-repository";
import { IProblemRepository } from "./problem-repository.types";

class ProblemService {
  private problemRepository: IProblemRepository;

  constructor() {
    this.problemRepository = new ProblemRepository();
  }

  async create(params: ICreateProblemParams) {
    await this.problemRepository.create(params);
  }
}

export default ProblemService;