import Image from "next/image";
import GalleryFilter from "../components/galleryFilter";

const Gallery = async () => {
  return (
    <div>
      <section id="gallery" className="p-6">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>

        <GalleryFilter />
      </section>
    </div>
  );
};

export default Gallery;
