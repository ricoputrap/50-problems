import { create } from "zustand";
import { State, Action } from "./index.types";
import { EnumFeedTab } from "@/types/feed.types";
import { IProblem } from "@/types/problem.types";

const useProblemStore = create<State & Action>(set => ({
  topProblems: [],
  newProblems: [],
  isTopFinal: false,
  isNewFinal: false,

  addProblems(problems, tab) {
    set((prevState) => ({
      ...prevState,
      [`${tab}Problems`]: [...prevState[`${tab}Problems`], ...problems]
    }))
  },
  setProblems: (problems: IProblem[], tab: EnumFeedTab) => set({ [`${tab}Problems`]: problems }),
  setIsFinal: (isFinal: boolean, tab: EnumFeedTab) => set({ [`${tab}Final`]: isFinal }),

  upvoteProblem: (id: number) => {
    set((prevState) => {
      const topProblems = [...prevState.topProblems];
      const indexTop = topProblems.findIndex(problem => problem.id == id);
      const newProblems = [...prevState.newProblems];
      const indexNew = newProblems.findIndex(problem => problem.id == id);

      // the problem post doesn't exist
      if (indexTop === -1 && indexNew === -1)
        return {};

      if (indexTop !== -1) {
        topProblems[indexTop].upvote_count += 1;

        // reorder top problems (only by switching this problem with the previous one)
        if (indexTop !== 0) {
          const prevIndex = indexTop - 1;

          // swap if the previous problem has less upvotes than the current one
          if (topProblems[prevIndex].upvote_count < topProblems[indexTop].upvote_count) {
            const temp = topProblems[indexTop];
            topProblems[indexTop] = topProblems[prevIndex];
            topProblems[prevIndex] = temp;
          }
        }
      }

      if (indexNew !== -1)
        newProblems[indexNew].upvote_count += 1;

      return {
        topProblems,
        newProblems
      }
    })
  },

  downvoteProblem: (id: number) => {
    set((prevState) => {
      const topProblems = [...prevState.topProblems];
      const indexTop = topProblems.findIndex(problem => problem.id === id);
      const newProblems = [...prevState.newProblems];
      const indexNew = newProblems.findIndex(problem => problem.id === id);

      // the problem post doesn't exist
      if (indexTop === -1 && indexNew === -1)
        return {};

      if (indexTop !== -1) {
        topProblems[indexTop].upvote_count -= 1;

        // reoder top problems (only by switching this problem with the next one)
        if (indexTop !== topProblems.length - 1) {
          const nextIndex = indexTop + 1;

          // swap if the next problem has more upvotes than the current one
          if (topProblems[nextIndex].upvote_count > topProblems[indexTop].upvote_count) {
            const temp = topProblems[indexTop];
            topProblems[indexTop] = topProblems[nextIndex];
            topProblems[nextIndex] = temp;
          }
        }
      }

      if (indexNew !== -1)
        newProblems[indexNew].upvote_count -= 1;

      return {
        topProblems,
        newProblems
      }
    })
  }
}));

export default useProblemStore;