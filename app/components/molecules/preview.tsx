import { GalleryItem, Items } from "../../types/types";
import galleryItems from "../../data/galleryItems.json";
import previewDataRaw from "../../content/previewData.json";
import Image from "next/image";
import { sortedProjects } from "@/app/functions/sortedProject";

export const renderMedia = (src: string, alt: string, className?: string) =>
  src.endsWith(".mp4") ? (
    <video
      width={800}
      height={400}
      playsInline
      autoPlay
      loop
      muted
      preload="metadata"
      property="true"
      className="w-full h-40 object-cover rounded-lg mb-6"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <Image width={800} height={400} src={src} alt={alt} priority className={className ?? "w-full h-40 object-cover rounded-lg mb-6"} />
  );

const Preview = () => {
  const { galleryItems: items } = galleryItems;
  const previewData = previewDataRaw.previewData as Items[];

  const featuredGalleryItem = items.find((item: GalleryItem) => item.featured);
  const latest = sortedProjects[0];

  return (
    <>
      {previewData.map((item: Items, index: number) => {
        const isGallery = item.title === "🖼️ Gallery";
        const isJourney = item.title === "📝 Journey";

        let media = null;
        if (isGallery && featuredGalleryItem) {
          media = renderMedia(featuredGalleryItem.src, featuredGalleryItem.alt);
        } else if (isJourney && latest?.src) {
          media = renderMedia(latest.src, `${latest.title || "Latest item"} preview`);
        } else if (item.img) {
          media = renderMedia(item.img, `${item.title} preview`);
        }

        return (
          <a
            key={index}
            href={`/gallery/${featuredGalleryItem?.category}`}
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
                {media}
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
