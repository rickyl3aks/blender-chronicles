"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "flowbite-react";
import Lightbox from "./lightBox";
import { CarouselProps } from "../types/types";

const Carousel = ({ items }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="relative w-full  cursor-pointer flex-shrink-0" onClick={() => setLightboxSrc(item.src)}>
            <Image key={item.id} width={900} height={200} src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous slide"
          className="pointer-events-auto p-2 rounded-full shadow-lg bg-white/80 text-gray-800 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next slide"
          className="pointer-events-auto p-2 rounded-full shadow-lg bg-white/80 text-gray-800 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  );
};

export default Carousel;
