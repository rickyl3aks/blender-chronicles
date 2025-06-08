"use client";
import Image from "next/image";
import { useState } from "react";
import categoriesData from "../data/categories.json";
import galleryData from "../data/galleryItems.json";
import { Category } from "../types/types";

const categories: Category[] = categoriesData.categories;
const galleryItems = galleryData.galleryItems;

const GalleryFilter = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item: { category: string }) => item.category === filter);

  return (
    <section id="gallery">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 py-2 rounded ${filter === cat.value ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
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
              onClick={() => setLightboxSrc(item.src)}
              autoPlay
              loop
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
              onClick={() => setLightboxSrc(item.src)}
            />
          )
        )}
      </div>

      {lightboxSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setLightboxSrc(null)}>
          {lightboxSrc.endsWith(".mp4") ? (
            <video src={lightboxSrc} autoPlay loop controls className="max-w-4xl max-h-[80vh] rounded" onClick={(e) => e.stopPropagation()} />
          ) : (
            <Image
              width={800}
              height={600}
              src={lightboxSrc}
              alt="Expanded view"
              className="max-w-4xl max-h-[80vh] rounded"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default GalleryFilter;
