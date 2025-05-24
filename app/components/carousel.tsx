"use client";

import { useState } from "react";
import ImagePopup from "../image-popup";
import { CarouselProps } from "../types/types";
import Description from "./description";

const Carousel = ({ summaries, type }: CarouselProps) => {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-left sm:text-left text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
              {summaries[currentIndex].title}
            </h1>

            <div className="relative">
              {summaries[currentIndex]?.video ? (
                <video width="640" height="360" autoPlay muted loop controls className="rounded-[0.75rem]">
                  <source src={`/images/render/${summaries[currentIndex].render}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <ImagePopup render={summaries[currentIndex].render} type={type} width={900} height={200} />
              )}

              {summaries.length > 1 && (
                <>
                  {" "}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
                    <button
                      onClick={prevSlide}
                      className="cursor-pointer text-white bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 hover:bg-opacity-75 transition duration-300"
                    >
                      &lt;
                    </button>
                  </div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
                    <button
                      onClick={nextSlide}
                      className="cursor-pointer text-white bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 hover:bg-opacity-75 transition duration-300"
                    >
                      &gt;
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-xs sm:text-sm py-0.5 px-2 sm:py-1 sm:px-3 rounded-full shadow-md opacity-80">
                    {currentIndex + 1}/{summaries.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl">
          <Description summaries={summaries} currentIndex={currentIndex} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
