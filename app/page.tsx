// import Image from "next/image";
// import ImagePopup from "./image-popup";

import { Pacifico } from "next/font/google";
// import { Indie_Flower } from "next/font/google";
import DropDown from "./components/dropDown";

// const indieFlower = Indie_Flower({ subsets: ["latin"], weight: "400" });

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div className="container">
      <div className="striped-bg" />

      <div className="inner-container">
        <h1 className="main-title">Welcome to Blender</h1>
        <div className={`vertical-text ${pacifico.className}`}>Chronicles</div>
      </div>

      <div className="main-layout">
        <p className="intro">
          Dive into my journey of learning 3D design, Blender techniques, and creative explorations. Here, you'll find projects, experiments, and
          reflections as I continue to grow in the world of 3D art
        </p>
        <button className="btn-projects flex items-center gap-2 relative overflow-hidden px-4 py-2">
          projects
          <span className="circle-arrow flex items-center justify-center w-6 h-6 rounded-full border-2 border-black transition-transform duration-300 hover:translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        <DropDown />

        <div className="right-box"></div>
      </div>

      <div className="buttons-right-grid">
        <button>
          <a href="/about">about ME.</a>
        </button>
        <button>
          <a href="mailto:rconsolandi@gmail.com">contact ME.</a>
        </button>
        <button className={pacifico.className}>
          <a href="https://github.com/rickyl3aks">CODE stuff</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
