import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        <Button className="font-bold">
          + Add Problem
        </Button>
      </div>

      {/* Tab - view type selector */}

      {/* Feed */}
    </main>
  );
}
