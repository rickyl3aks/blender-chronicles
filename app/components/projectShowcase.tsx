"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./lightBox";
import { ProjectProps } from "../types/types";
import { formatDate } from "../functions/formatDate";

const ITEMS_PER_PAGE = 8;

const ProjectShowcase = ({ items }: ProjectProps) => {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[number] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl shadow-md bg-white hover:shadow-lg transition cursor-pointer overflow-hidden"
            onClick={() => setSelectedItem(item)}
          >
            <div className="overflow-hidden">
              {item.src.endsWith(".mp4") ? (
                <video
                  width={800}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-130"
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  width={600}
                  height={400}
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-130"
                />
              )}
            </div>

            <div className="p-4 bg-[#392d35]  h-[300px] flex flex-col transition-colors duration-300 group-hover:bg-[#5a3f58] max-mobile:h-[200px]">
              <h3 className="text-xl font-bold font-title text-[#C6A4B6]">{item.title}</h3>
              <p className="text-sm md:text-base text-white mt-2">
                {item.description.length > 200 ? item.description.slice(0, 200) + "..." : item.description}
              </p>
              <p className="text-xs italic text-gray-300 mt-auto">{formatDate(item.date)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 text-white m-10">
        <button
          onClick={() => goToPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="cursor-pointer px-4 py-2 bg-[#5a3f58] rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`cursor-pointer px-3 py-1 rounded ${currentPage === page ? "bg-[#C6A4B6] text-black" : "bg-[#5a3f58]"}`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="cursor-pointer px-4 py-2 bg-[#5a3f58] rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {selectedItem && (
        <Lightbox
          src={selectedItem.src}
          title={selectedItem.title}
          description={selectedItem.description}
          date={selectedItem.date}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default ProjectShowcase;
