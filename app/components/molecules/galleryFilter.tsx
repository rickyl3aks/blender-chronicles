"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import categoriesData from "../../data/categories.json";
import galleryData from "../../data/galleryItems.json";
import { Category, GalleryItem } from "../../types/types";
import Lightbox from "../../components/organisms/lightBox";
import Button from "../../components/atoms/button";
import Link from "next/link";

const categories: Category[] = categoriesData.categories;
const galleryItems: GalleryItem[] = galleryData.galleryItems;

export default function GalleryPage() {
  const { category } = useParams();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filter = category && category !== "all" ? String(category) : "all";
  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <Link key={cat.value} href={`/gallery/${cat.value}`}>
            <Button variant={filter === cat.value ? "accent" : "primary"} aria-pressed={filter === cat.value}>
              {cat.label}
            </Button>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) =>
          item.src.endsWith(".mp4") ? (
            <video
              key={item.id}
              width={500}
              height={300}
              className="cursor-pointer rounded shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedItem(item)}
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={item.id}
              width={500}
              height={300}
              src={item.src}
              alt={item.alt}
              className="cursor-pointer rounded shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedItem(item)}
              priority
            />
          )
        )}
      </div>

      {selectedItem && <Lightbox src={selectedItem.src} title={selectedItem.alt} onClose={() => setSelectedItem(null)} gallery />}
    </section>
  );
}
