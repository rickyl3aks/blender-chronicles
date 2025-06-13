import React from "react";
import { GalleryItem, Items } from "../../types/types";
import galleryItems from "../../data/galleryItems.json";
import previewDataRaw from "../../content/previewData.json";
import Image from "next/image";

const Preview = () => {
  const { galleryItems: items } = galleryItems;
  const previewData = previewDataRaw.previewData as Items[];

  const featuredGalleryItem = items.find((item: GalleryItem) => item.featured);

  return (
    <>
      {previewData.map((item: Items, index: number) => {
        const isGallery = item.title === "🖼️ Gallery";

        return (
          <a
            key={index}
            href={`/${item.href}`}
            className={`
              rounded-xl text-lg block my-8 p-6 text-white shadow-md transition-transform duration-300 cursor-pointer
              ${
                isGallery
                  ? "bg-gradient-to-br from-[#6d537a] via-[#8a7395] to-[#9d7f9f] shadow-[0_0_20px_#9d7f9f] animate-pulseGlowAlt min-h-[450px]"
                  : "bg-[#392d35] hover:bg-[#5a3f58] hover:shadow-lg min-h-[380px]"
              }
              hover:scale-105
            `}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="mb-4 font-title text-[#C6A4B6] font-bold text-2xl">{item.title}</h2>

                {isGallery && featuredGalleryItem ? (
                  featuredGalleryItem.src.endsWith(".mp4") ? (
                    <video
                      width={800}
                      height={400}
                      playsInline
                      className="w-full h-40 object-cover rounded-lg mb-6"
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                    >
                      <source src={featuredGalleryItem.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      width={800}
                      height={400}
                      src={featuredGalleryItem.src}
                      alt={featuredGalleryItem.alt}
                      className="w-full h-40 object-cover rounded-lg mb-6"
                    />
                  )
                ) : (
                  item.img && (
                    <Image
                      width={800}
                      height={400}
                      src={item.img}
                      alt={`${item.title} preview`}
                      className="w-full h-40 object-cover rounded-lg mb-6"
                    />
                  )
                )}
              </div>

              <div>
                <p className="text-white mb-4">{item.description}</p>
                <span className="text-[#E8C4C4] font-bold hover:underline hover:text-[#F5D6D6] transition-colors duration-200 cursor-pointer">
                  {item.label}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Preview;
