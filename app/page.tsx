import HeroPage from "./components/heroPage";
import Preview from "./components/preview";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section className="text-center mt-50">
        <h2 className="max-sm:text-4xl text-5xl font-title text-[var(--accent)] m-5 font-extrabold">Latest Render</h2>
        <Image
          width={800}
          height={400}
          src="https://placehold.co/800x400?text=Latest+Render"
          className="m-auto border-5 rounded-md"
          alt="Latest Render"
        />
        <p className="m-5"> This week I experimented with lighting</p>
      </section>
      <HeroPage />
      <Preview />
    </div>
  );
};

export default Home;
