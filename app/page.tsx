import HeroPage from "./components/organisms/heroPage";
import Preview, { renderMedia } from "./components/molecules/preview";
import { Title } from "./components/atoms/title";
import Button from "./components/atoms/button";
import galleryItemsData from "./data/galleryItems.json";
import { GalleryItem } from "./types/types";

  const { galleryItems: items = [] } = galleryItemsData;

  export const featuredGalleryItem = items.find((item: GalleryItem) => item.featured);

const Home = () => {


  return (
    <>
      <section className="text-center mt-10 p-6">
        <Title title="Latest Render" />
        {featuredGalleryItem && (
          <>
            {renderMedia(featuredGalleryItem.src, "Latest Render", "m-auto border-5 rounded-xl")}
            <div className="mt-8">
              <Button href={`/gallery/${featuredGalleryItem.category}`} icon="→">
                View the Gallery
              </Button>
            </div>
          </>
        )}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#392d35] to-transparent" />
      </section>

      <HeroPage />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 m-12">
        <Preview />
      </section>
    </>
  );
};

export default Home;
