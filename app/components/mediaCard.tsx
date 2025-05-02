import { MediaCardProps } from "../types/types";
import Carousel from "./carousel";

//to be changed
const MediaCard = async ({ render }: MediaCardProps) => {
  const sortedSummaries = render.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Carousel summaries={sortedSummaries} />
    </>
  );
};

export default MediaCard;
