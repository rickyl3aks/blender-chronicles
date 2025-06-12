import { SubTitle } from "@/app/components/atom/subTitle";
import { Title } from "@/app/components/atom/title";
import GalleryFilter from "@/app/components/galleryFilter";

const Gallery = async () => {
  return (
    <section id="gallery" className="p-6">
      <Title title="Gallery" />
      <SubTitle subT="A showcase of creative works" />
      <GalleryFilter />
    </section>
  );
};

export default Gallery;
