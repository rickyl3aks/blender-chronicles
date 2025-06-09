import GalleryFilter from "../components/galleryFilter";

const Gallery = async () => {
  return (
    <section id="gallery" className="p-6">
      <h1 className="font-title text-[var(--accent)] max-sm:text-4xl text-5xl font-bold mb-6">Gallery</h1>
      <p className="text-gray-500 mb-10">A showcase of creative works</p>
      <GalleryFilter />
    </section>
  );
};

export default Gallery;
