import { SubTitle } from "@/app/components/atoms/subTitle";
import { Title } from "@/app/components/atoms/title";
import GalleryFilter from "@/app/components/molecules/galleryFilter";

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
