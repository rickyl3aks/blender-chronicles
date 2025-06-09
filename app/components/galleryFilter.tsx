"use client";

import Image from "next/image";
import { useState } from "react";
import categoriesData from "../data/categories.json";
import galleryData from "../data/galleryItems.json";
import { Category, GalleryItem } from "../types/types";
import Lightbox from "./lightBox";

const categories: Category[] = categoriesData.categories;
const galleryItems: GalleryItem[] = galleryData.galleryItems;

const GalleryFilter = () => {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`cursor-pointer px-4 py-2 rounded transition-colors ${
              filter === cat.value ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) =>
          item.src.endsWith(".mp4") ? (
            <video
              key={item.id}
              width={300}
              height={200}
              className="cursor-pointer rounded shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedItem(item)}
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
              key={item.id}
              width={300}
              height={200}
              src={item.src}
              alt={item.alt}
              className="cursor-pointer rounded shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedItem(item)}
            />
          )
        )}
      </div>

      {selectedItem && (
        <Lightbox
          src={selectedItem.src}
          title={selectedItem.alt}
          onClose={() => setSelectedItem(null)}
          gallery={true}
        />
      )}
    </section>
  );
};

export default GalleryFilter;
