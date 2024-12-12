import { DescriptionProps } from "../types/types";

const Description = ({ summaries, currentIndex }: DescriptionProps) => {
  return (
    <p className="mt-8 text-left sm:text-left text-lg sm:text-xl text-gray-600 font-medium mb-4">
      {["CG Cookie", "Nier: Automata"].some((keyword) => summaries[currentIndex].description.includes(keyword))
        ? summaries[currentIndex].description.split(/(CG Cookie|Nier: Automata)/).map((part, index) =>
            part === "CG Cookie" ? (
              <a
                key={index}
                href="https://cgcookie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline transition-all duration-300 hover:text-purple-500 hover:underline-offset-4"
              >
                {part}
              </a>
            ) : part === "Nier: Automata" ? (
              <a
                key={index}
                href="https://www.square-enix-games.com/en_EU/games/nier-automata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline transition-all duration-300 hover:text-purple-500 hover:underline-offset-4"
              >
                {part}
              </a>
            ) : (
              part
            )
          )
        : summaries[currentIndex].description}
    </p>
  );
};

export default Description;
