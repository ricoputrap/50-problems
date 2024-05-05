import useProblemStore from '@/stores/problem';
import { downvoteProblem as downvote, upvoteProblem as upvote } from '@/server/problem';
import { useEffect } from 'react';
import useLocalStore from '@/stores/local-storage';
import { getItem, setItem } from '@/lib/local-storage.utils';

const LS_KEY_UPVOTED_IDS = "upvotedIds"

const useManageUpvoting = () => {
  const upvoteProblem = useProblemStore((state) => state.upvoteProblem);
  const downvoteProblem = useProblemStore((state) => state.downvoteProblem);
  const upvotedIds = useLocalStore((state) => state.upvotedIds);
  const setUpvotedIds = useLocalStore((state) => state.setUpvotedIds);

  useEffect(() => {
    const upvotedIds = getItem<number[]>(LS_KEY_UPVOTED_IDS, []);
    setUpvotedIds(upvotedIds);
  }, [])

  const checkIsUpvoted = (id: number) => upvotedIds.includes(id);

  const addUpvotedId = (id: number) => {
    const newUpvotedIds = [...upvotedIds, id];
    setUpvotedIds(newUpvotedIds);
    setItem<number[]>(LS_KEY_UPVOTED_IDS, newUpvotedIds);
  }

  const removeUpvotedId = (id: number) => {
    const newUpvotedIds = upvotedIds.filter((upvotedId) => upvotedId !== id);
    setUpvotedIds(newUpvotedIds);
    setItem<number[]>(LS_KEY_UPVOTED_IDS, newUpvotedIds);
  }

  const handleVoting = async (id: number) => {
    const isUpvoted = checkIsUpvoted(id);
    
    if (isUpvoted) {
      const success = await downvote(id);
      if (success) {
        downvoteProblem(id);
        removeUpvotedId(id);
      }

      return;
    }

    const success = await upvote(id);
    if (success) {
      upvoteProblem(id);
      addUpvotedId(id);
    }
  }

  return {
    checkIsUpvoted,
    handleVoting
  }
}

export default useManageUpvoting