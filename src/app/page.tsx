import FeedSkeleton from "@/components/FeedSkeleton";
import AddProblemButton from "@/components/_home/AddProblemButton";
import Feed from "@/components/_home/Feed";
import FeedTab from "@/components/_home/FeedTab";
import { EnumFeedTab } from "@/types/feed.types";
import { Suspense } from "react";

export default function Home({
  searchParams
} : {
  searchParams: {
    tab?: EnumFeedTab
  }
}) {
  return (
    <main>
      {/* Top 50 problems ... */}
      <div className="flex justify-center py-7">
        <div className="max-w-80">
          <h1 className="text-center text-3xl font-bold">
            Top 50 problems<br />
            reported by you<br />
            and ready to solve by<br />
            great engineers
          </h1>
        </div>
      </div>

      {/* Button [+ Add Problem] */}
      <div className="flex justify-center">
        <AddProblemButton />
      </div>

      {/* Tab - view type selector */}
      <FeedTab />

      {/* Feed */}
      <section className="mt-8">
        <Suspense fallback={<FeedSkeleton />}>
          <Feed />
        </Suspense>
      </section>
    </main>
  );
}
