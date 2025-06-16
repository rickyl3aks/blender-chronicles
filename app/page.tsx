import HeroPage from "./components/organisms/heroPage";
import Preview from "./components/molecules/preview";
import Image from "next/image";
import { Title } from "./components/atoms/title";
import Button from "./components/atoms/button";
import { sortedProjects } from "./functions/sortedProject";

const Home = () => {
  const latest = sortedProjects[0];
  const isVideo = latest.src.endsWith(".mp4");

  return (
    <>
      <section className="text-center mt-10 p-6">
        <Title title="Latest Render" />
        {isVideo ? (
          <video width={800} height={400} playsInline className="m-auto border-5 rounded-xl" autoPlay loop muted preload="metadata">
            <source src={latest.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image width={800} height={400} src={latest.src} className="m-auto border-5 rounded-xl" alt="Latest Render" priority />
        )}
        <div className="mt-8">
          <Button href="/journey" icon="→">
            Read the Journey
          </Button>
        </div>
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
