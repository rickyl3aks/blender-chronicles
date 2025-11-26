import { GalleryItem, Items } from "../../types/types";
import galleryItems from "../../data/galleryItems.json";
import previewDataRaw from "../../content/previewData.json";
import Image from "next/image";
import { sortedProjects } from "@/app/functions/sortedProject";
import PreviewCard from "./previewCard";

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
    <Image
      width={800}
      height={400}
      src={src}
      alt={alt}
      className={className ?? "w-full h-40 object-cover rounded-lg mb-6"}
    />
  );

const Preview = () => {
  const { galleryItems: items } = galleryItems;
  const previewData = previewDataRaw.previewData as Items[];

  const featuredGalleryItem = items.find((item: GalleryItem) => item.featured);
  const latest = sortedProjects[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4">
      {previewData.map((item: Items, index: number) => {
        const isGallery = item.href === "gallery";
        const isJourney = item.href === "journey";

        let media = null;
        if (isGallery && featuredGalleryItem) {
          media = renderMedia(featuredGalleryItem.src, featuredGalleryItem.alt);
        } else if (isJourney && latest?.src) {
          media = renderMedia(
            latest.src,
            `${latest.title || "Latest item"} preview`
          );
        } else if (item.img) {
          media = renderMedia(item.img, `${item.title} preview`);
        }

        const href = `/${item.href}${
          isGallery && featuredGalleryItem
            ? `/${featuredGalleryItem.category}`
            : ""
        }`;

        return (
          <PreviewCard key={index} item={item} media={media} href={href} />
        );
      })}
    </div>
  );
};

export default Preview;
