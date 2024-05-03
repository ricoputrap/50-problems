import useProblemStore from "@/stores/problem";
import { EnumFeedTab } from "@/types/feed.types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const usePrepareMoreProblems = () => {
  const searchParams = useSearchParams();

  const topProblems = useProblemStore((state) => state.topProblems);
  const newProblems = useProblemStore((state) => state.newProblems);

  const problems = useMemo(() => {
    const tab = searchParams.get('tab') as EnumFeedTab || EnumFeedTab.TOP;

    if (tab === EnumFeedTab.TOP)
      return topProblems.slice(5);

    if (tab === EnumFeedTab.NEW)
      return newProblems.slice(5);

    return [];
  }, [searchParams, topProblems, newProblems])

  return problems;
}

export default usePrepareMoreProblems