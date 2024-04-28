import ProblemPost from "@/components/ProblemPost";
import AddProblemButton from "@/components/_home/AddProblemButton";
import { Button } from "@/components/ui/button";

export default function Home() {
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

      {/* Feed */}
      <div className="mt-4 flex flex-col gap-3">
        <ProblemPost
          id={1}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, esse! Earum neque maxime animi provident, fugiat minus repudiandae magni et at consectetur optio repellat quo, nisi quas adipisci voluptate itaque?"
          username="rico_rpp21"
          twitterID="rico_rpp21"
          upvoteCount={40}
          createdAt={Math.floor(new Date().getTime() / 1000)}
        />

        <ProblemPost
          id={2}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, esse! Earum neque maxime animi provident, fugiat minus repudiandae magni et at consectetur optio repellat quo, nisi quas adipisci voluptate itaque?"
          username="rico_rpp21"
          upvoteCount={50}
          createdAt={Math.floor(new Date().getTime() / 1000)}
        />
      </div>
    </main>
  );
}
