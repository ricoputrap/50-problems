"use client";

import { cn } from '@/lib/utils';
import { EnumFeedTab } from '@/types/feed.types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const FeedTab: React.FC = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const activeTab: EnumFeedTab = searchParams.get('tab') as EnumFeedTab || EnumFeedTab.TOP;
  
  const changeTab = (tab: EnumFeedTab) => {
    const params = new URLSearchParams(searchParams);

    if (params.get('tab') === tab)
      return;

    params.set('tab', tab);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <div className='mt-4 p-1 w-full grid grid-cols-2 bg-accent-foreground rounded-lg'>
        <div
          onClick={() => changeTab(EnumFeedTab.TOP)}
          className={cn(
            "text-center cursor-pointer py-2 rounded-md text-accent font-bold",
            activeTab === EnumFeedTab.TOP && "bg-accent text-accent-foreground font-bold"
          )}
        >
          Top
        </div>
        <div
          onClick={() => changeTab(EnumFeedTab.NEW)}
          className={cn(
            "text-center cursor-pointer py-2 rounded-md text-accent font-bold",
            activeTab === EnumFeedTab.NEW && "bg-accent text-accent-foreground font-bold"
          )}
        >
          New
        </div>
      </div>
    </div>
  )
}

export default FeedTab