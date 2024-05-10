import React, { memo } from 'react'
import { Card, CardContent } from './ui/card';
import ButtonUpvote from './ButtonUpvote';
import { getFormattedTime } from '@/lib/utils';
import Link from 'next/link';
import LinkReportProblem from './LinkReportProblem';

interface Props {
  id: number;
  no: number;
  content: string;
  username: string;
  twitterID?: string;
  upvoteCount: number;
  createdAt: number;
  isUpvoted: boolean;
}

const ProblemPost: React.FC<Props> = ({
  id,
  no,
  content,
  username,
  twitterID,
  upvoteCount,
  createdAt,
  isUpvoted
}) => {
  const formattedTime = getFormattedTime(createdAt);

  return (
    <Card>
      <CardContent className="px-4 py-2">
        <div className="flex justify-between items-center gap-3">
          <div className="flex gap-2">
            <div>{no}.</div>
            <div>
              <p>{content}</p>

              <div className="mt-4 text-sm text-gray-500">
                <div className="flex gap-1">
                  <p>By</p>
                  <p>
                    {twitterID ? (
                      <Link
                        className='text-blue-500'
                        href={`https://twitter.com/${twitterID}`}
                        target="_blank"
                      >
                        @{username}
                      </Link>
                    ) : (
                      <>{username}</>
                    )}
                  </p>

                  <p className="ml-1">{formattedTime}</p>
                  <span>| <LinkReportProblem id={id} /></span>
                </div>
              </div>
            </div>
          </div>

          <ButtonUpvote
            id={id}
            count={upvoteCount}
            isUpvoted={isUpvoted}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default memo(ProblemPost);