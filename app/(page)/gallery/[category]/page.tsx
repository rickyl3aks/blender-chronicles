import { Caption } from "@/app/components/atoms/caption";
import { Title } from "@/app/components/atoms/title";
import GalleryFilter from "@/app/components/molecules/galleryFilter";

const Gallery = async () => {
  return (
    <section id="gallery" className="p-6">
      <Title title="Gallery" />
      <Caption text="A showcase of creative works" />
      <GalleryFilter />
    </section>
  );
};

export default Gallery;
