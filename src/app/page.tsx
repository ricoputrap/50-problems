import FeedSkeleton from "@/components/FeedSkeleton";
import AddProblemButton from "@/components/_home/AddProblemButton";
import Feed from "@/components/_home/Feed";
import FeedTab from "@/components/_home/FeedTab";
import { EnumFeedTab } from "@/types/feed.types";
import Link from "next/link";
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
          <Feed tab={searchParams.tab || EnumFeedTab.NEW} />
        </Suspense>
      </section>

      <footer className="bg-background">
        <p className="text-center text-sm">
          © 2024 - 50 Problems -

          made with ❤️ by&nbsp;
            <Link
              target="_blank"
              href="https://twitter.com/rico_rpp21"
              className="text-blue-500"
            >
              Rico
            </Link>
        </p>
      </footer>
    </main>
  );
}
