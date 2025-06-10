import HeroPage from "./components/heroPage";
import Preview from "./components/preview";
import Image from "next/image";
import { sortedProjects } from "./journey/page";
import Button from "./components/button";

const Home = () => {
  return (
    <div>
      <section className="text-center mt-10 p-6">
        <h2 className="max-sm:text-4xl text-5xl font-title text-[#2a2a2a] m-5 font-extrabold">Latest Render</h2>
        {sortedProjects[0].src.endsWith(".mp4") ? (
          <video width={800} height={400} className="m-auto border-5 rounded-xl" autoPlay loop muted preload="metadata">
            <source src={`${sortedProjects[0].src}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            width={800}
            height={400}
            src={`${sortedProjects[0].src}`}
            className="m-auto border-5 rounded-xl"
            alt="Latest Render"
            priority={true}
          />
        )}
        <div className="mt-8">
          <div className="mt-8">
            <Button href="/journey" icon="→">
              Read the Journey
            </Button>
          </div>
        </div>
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#392d35] to-transparent" />
      </section>
      <HeroPage />
      <Preview />
    </div>
  );
};

export default Home;
