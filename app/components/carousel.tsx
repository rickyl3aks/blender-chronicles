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
            <h1 className="text-[3rem] sm:text-[4rem] font-extrabold text-left sm:text-left text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-6">
              {summaries[currentIndex].title}
            </h1>

            <div className="relative">
              {summaries[currentIndex]?.video ? (
                <video
                  width="640"
                  height="360"
                  autoPlay
                  muted
                  loop
                  controls
                  className="cursor-pointer border-[5px] border-white rounded-[0.75rem] hover:border-gray-300 shadow-[4px_3px_0px_black,9px_8px_0px_rgba(0,0,0,0.15)]"
                >
                  <source src={`/images/render/${summaries[currentIndex].render}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <ImagePopup render={summaries[currentIndex].render} type={type} width={900} height={200} />
              )}

              {summaries.length > 1 && (
                <>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
                    <span
                      title="prev"
                      onClick={prevSlide}
                      className="btn cursor-pointer bg-white border-[2px] border-black rounded-md hover:shadow-[4px_3px_0px_black,9px_8px_0px_rgba(0,0,0,0.15)] flex items-center justify-center"
                    >
                      <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
                    <span
                      title="next"
                      onClick={nextSlide}
                      className="btn cursor-pointer bg-white border-[2px] border-black rounded-md hover:shadow-[4px_3px_0px_black,9px_8px_0px_rgba(0,0,0,0.15)] flex items-center justify-center"
                    >
                      <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
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
