import { Summaries } from "../types/types";
import Carousel from "./carousel";

const MediaCard = async () => {
  const { summaries }: { summaries: Summaries[] } = await import("../data/summary.json");

  const sortedSummaries = summaries.sort((a, b) => b.date - a.date);

  return (
    <>
      <Carousel summaries={sortedSummaries} />
    </>
  );
};

export default MediaCard;
