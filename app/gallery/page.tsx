import GalleryFilter from "../components/galleryFilter";

const Gallery = async () => {
  return (
    <div>
      <section id="gallery" className="p-6">
        <h1 className="font-title text-[var(--accent)] max-sm:text-4xl text-5xl font-bold mb-6">Gallery</h1>
        <p className="text-gray-500 mb-10">
          Step into a gallery where modeling, lighting, and texture combine to tell visual stories and explore ideas
        </p>
        <GalleryFilter />
      </section>
    </div>
  );
};

export default Gallery;
