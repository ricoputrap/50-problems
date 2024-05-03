import { create } from "zustand";
import { State, Action } from "./index.types";

const useGeneralStore = create<State & Action>(set => ({
  isLoading: false,

  setIsLoading: (isLoading: boolean) => set({ isLoading })
}));

export default useGeneralStore;