import { downvoteProblem as downvote, upvoteProblem as upvote } from '@/server/problem';
import { getCookieClient } from '@/lib/cookies-client.utils';

const useManageUpvoting = () => {
  const checkIsUpvoted = (id: number) => {
    const upvotedIds = getCookieClient<number[]>("upvoted-ids", []);
    const isUpvoted = upvotedIds.includes(id);

    return isUpvoted;
  }

  const handleVoting = async (id: number) => {
    const isUpvoted = checkIsUpvoted(id);
    
    if (isUpvoted) {
      await downvote(id);
      return;
    }

    await upvote(id);
  }

  return {
    checkIsUpvoted,
    handleVoting
  }
}

export default useManageUpvoting