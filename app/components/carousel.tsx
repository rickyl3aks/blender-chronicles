"use client";

import { useState } from "react";
import ImagePopup from "../image-popup";
import { CarouselProps } from "../types/types";

const Carousel = ({ summaries }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % summaries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + summaries.length) % summaries.length);
  };
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center space-x-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
              {summaries[currentIndex].title}
            </h1>

            <div className="relative">
              <ImagePopup render={summaries[currentIndex].render} width={900} height={200} />

              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
                <button
                  onClick={prevSlide}
                  className="text-white bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 hover:bg-opacity-75 transition duration-300"
                >
                  &lt;
                </button>
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
                <button
                  onClick={nextSlide}
                  className="text-white bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 hover:bg-opacity-75 transition duration-300"
                >
                  &gt;
                </button>
              </div>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-xs sm:text-sm py-0.5 px-2 sm:py-1 sm:px-3 rounded-full shadow-md opacity-80">
                {currentIndex + 1}/{summaries.length}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-left sm:text-center text-lg sm:text-xl text-gray-600 font-medium mb-4">
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
      </div>
    </>
  );
};

export default Carousel;
