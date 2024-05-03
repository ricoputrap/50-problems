import { getTopLatestProblems, getTopUpvotedProblems } from "@/server/problem";
import useGeneralStore from "@/stores/general"
import useProblemStore from "@/stores/problem";
import { EnumFeedTab } from "@/types/feed.types";
import { useSearchParams } from "next/navigation";

const useLoadMoreProblems = () => {
  const searchParams = useSearchParams();
  const isLoading = useGeneralStore((state) => state.isLoading);
  const setIsLoading = useGeneralStore((state) => state.setIsLoading);

  const topProblems = useProblemStore((state) => state.topProblems);
  const newProblems = useProblemStore((state) => state.newProblems);
  const addProblems = useProblemStore((state) => state.addProblems);

  const isTopFinal = useProblemStore((state) => state.isTopFinal);
  const isNewFinal = useProblemStore((state) => state.isNewFinal);
  const setIsFinal = useProblemStore((state) => state.setIsFinal);

  const isFinal = searchParams.get('tab') === EnumFeedTab.TOP
    ? isTopFinal
    : isNewFinal;

  const loadMoreProblems = async () => {
    setIsLoading(true);
    const tab = searchParams.get('tab') as EnumFeedTab;

    if (tab === EnumFeedTab.TOP) {
      const cursor = topProblems.length;
      const { results: moreProblems } = await getTopUpvotedProblems(cursor, 5);

      if (moreProblems.length > 0)
        addProblems(moreProblems, EnumFeedTab.TOP);
      else
        setIsFinal(true, EnumFeedTab.TOP);
    }
    else {
      const cursor = newProblems.length;
      const { results: moreProblems } = await getTopLatestProblems(cursor, 5);

      if (moreProblems.length > 0)
        addProblems(moreProblems, EnumFeedTab.NEW);
      else
        setIsFinal(true, EnumFeedTab.NEW);
    }

    setIsLoading(false);
  }

  return { isLoading, isFinal, loadMoreProblems }
}

export default useLoadMoreProblems