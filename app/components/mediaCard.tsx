import ImagePopup from "../image-popup";
import { Summaries } from "../types/types";

const MediaCard = async () => {
  const { summaries }: { summaries: Summaries[] } = await import("../data/summary.json");

  return (
    <>
      {summaries.map((summary, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-left text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
            {summary.title}
          </h1>
          <p className="text-left text-lg sm:text-xl text-gray-600 font-medium mb-4">
            {summary.description.includes("CG Cookie") ? (
              <>
                {summary.description.split("CG Cookie")[0]}
                <a
                  href="https://cgcookie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline transition-all duration-300 hover:text-purple-500 hover:underline-offset-4"
                >
                  CG Cookie
                </a>
                {summary.description.split("CG Cookie")[1]}
              </>
            ) : (
              summary.description
            )}
          </p>
          <ImagePopup render={summary.render} width={summary.width} height={summary.height} />
        </div>
      ))}
    </>
  );
};

export default MediaCard;
