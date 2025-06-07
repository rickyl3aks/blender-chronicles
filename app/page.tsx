// import { Manrope } from "next/font/google";
import HeroPage from "./components/heroPage";
import Preview from "./components/preview";
import Image from "next/image";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: "400",
// });

const Home = () => {
  return (
    <div className="p-8 max-w-[900px] mx-auto">
      <section className="text-center mt-50">
        <h2 className="text-4xl m-5 font-bold">Latest Render</h2>
        <Image src="https://placehold.co/800x400?text=Latest+Render" className="m-auto border-5 rounded-md" alt="Latest Render" />
        <p className="m-5"> This week I experimented with lighting</p>
      </section>
      <HeroPage />
      <Preview />
      <p className="mt-30">©{new Date().getFullYear()} by Riccardo Consolandi | All Rights Reserved </p>
    </div>
  );
};

export default Home;
