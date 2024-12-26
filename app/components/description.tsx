import { DescriptionProps } from "../types/types";

const Description = ({ summaries, currentIndex }: DescriptionProps) => {
  if (!summaries || currentIndex < 0 || currentIndex >= summaries.length) {
    return null;
  }

  const { description, link } = summaries[currentIndex];

  return (
    <p className="mt-8 text-left sm:text-left text-lg sm:text-xl text-gray-600 font-medium mb-4">
      {description.split(/(\/.*?\/)/g).map((part, index) =>
        part.startsWith("/") && part.endsWith("/") ? (
          <a key={index} href={link || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {part.slice(1, -1)}
          </a>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default Description;
