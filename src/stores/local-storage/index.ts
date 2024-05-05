import { create } from "zustand";
import { State, Action } from "./index.types";

const useLocalStore = create<State & Action>((set) => ({
  username: '',
  upvotedIds: [],
  setUsername: (username: string) => set({ username }),
  setUpvotedIds: (upvotedIds: number[]) => set({ upvotedIds }),
}));

export default useLocalStore;