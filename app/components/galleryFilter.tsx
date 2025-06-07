"use client";
import Image from "next/image";

import { useState } from "react";

const galleryItems = [
  { id: 1, src: "https://placehold.co/300x200?text=Render+1", alt: "Motion Graphic 1", category: "motion" },
  { id: 2, src: "https://placehold.co/300x200?text=Render+2", alt: "Low Poly 1", category: "lowpoly" },
  { id: 3, src: "https://placehold.co/300x200?text=Render+3", alt: "Stylized 1", category: "stylized" },
  { id: 4, src: "https://placehold.co/300x200?text=Render+4", alt: "Realism 1", category: "realism" },
  { id: 5, src: "https://placehold.co/300x200?text=Render+5", alt: "Motion Graphic 2", category: "motion" },
  { id: 6, src: "https://placehold.co/300x200?text=Render+6", alt: "Low Poly 2", category: "lowpoly" },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Motion Graphics", value: "motion" },
  { label: "Low Poly", value: "lowpoly" },
  { label: "Stylized", value: "stylized" },
  { label: "Realism", value: "realism" },
];

const GalleryFilter = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  return (
    <>
      <section id="gallery" >
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
          {filteredItems.map((item) => (
            <Image
              width={300}
              height={200}
              key={item.id}
              src={item.src}
              alt={item.alt}
              className="cursor-pointer rounded shadow"
              onClick={() => setLightboxSrc(item.src)}
            />
          ))}
        </div>

        {lightboxSrc && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setLightboxSrc(null)}>
            <Image
              width={300}
              height={200}
              src={lightboxSrc}
              alt="Expanded view"
              className="max-w-4xl max-h-[80vh] rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default GalleryFilter;
