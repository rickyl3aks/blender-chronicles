"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./lightBox";
import { ProjectProps } from "../types/types";

const ProjectShowcase = ({ items }: ProjectProps) => {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[number] | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl shadow-md bg-white hover:shadow-lg transition cursor-pointer group overflow-hidden"
          onClick={() => setSelectedItem(item)}
        >
          <Image
            width={600}
            height={400}
            src={item.src}
            alt={item.title}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-4 bg-[#392d35] h-[300px] flex flex-col group-hover:bg-[#5a3f58] transition-colors">
            <h3 className="text-xl font-bold font-title text-[#C6A4B6] ">{item.title}</h3>
            <p className="text-sm md:text-base text-white mt-2">
              {item.description.length > 200 ? item.description.slice(0, 200) + "..." : item.description}
            </p>
            <p className="text-xs italic text-gray-300 mt-auto">
              {new Date(item.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}

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
