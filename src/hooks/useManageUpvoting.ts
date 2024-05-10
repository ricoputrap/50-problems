import { downvoteProblem as downvote, upvoteProblem as upvote } from '@/server/problem';
import { getCookieClient } from '@/lib/cookies-client.utils';
import { COOKIE_KEY_UPVOTED_IDS } from '../../constants';

const useManageUpvoting = () => {
  const checkIsUpvoted = (id: number) => {
    const upvotedIds = getCookieClient<number[]>(COOKIE_KEY_UPVOTED_IDS, []);
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