export type State = {
  isLoading: boolean;
}

export type Action = {
  setIsLoading: (isLoading: boolean) => void;
}