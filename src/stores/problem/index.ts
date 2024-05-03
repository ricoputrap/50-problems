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
}));

export default useProblemStore;