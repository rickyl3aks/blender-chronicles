import { Button } from "../components/button";
import MediaCard from "../components/mediaCard";
import { Summaries } from "../types/types";

const Projects = async () => {
  const { summaries }: { summaries: Summaries[] } = await import("../data/summary.json");

  return (
    <div className="m-4 space-y-12">
      <Button />

      <div className="flex flex-col items-center justify-start min-h-screen space-y-10 px-6">
        <div>
          <MediaCard render={summaries} />
        </div>

        <div className="text-center animate-bounceSlow">
          <h2 className="text-2xl font-semibold text-gray-700">More to come...</h2>
          <p className="text-lg text-gray-600">Stay tuned for more exciting designs and experiments.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
