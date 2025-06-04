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

const Home = async () => {
  return (
    <div className="p-8 min-h-screen box-border relative">
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] opacity-50 -z-10 [background:repeating-linear-gradient(-45deg,transparent_0,transparent_28%,#c7c7c7_28%,#c7c7c7_35%,#f1ebde_35%,#f1ebde_38%,#c7c7c7_38%,#c7c7c7_43%,#f1ebde_43%,#f1ebde_46%,#c7c7c7_46%,#c7c7c7_52%,#f1ebde_52%,#f1ebde_56%,#c7c7c7_56%,#c7c7c7_64%,transparent_64%)]" />

      <div className="inner-container">
        <h1 className="text-[4vw] m-0 whitespace-nowrap">Welcome to Blender</h1>
        <div
          className={`col-start-2 col-end-3 text-[4vw] font-bold tracking-[0.2em] [writing-mode:vertical-rl] w-[100px] mt-5 [text-shadow:4px_3px_0_#fff,9px_8px_0_rgba(0,0,0,0.15)] ${pacifico.className}`}
        >
          Chronicles
        </div>
      </div>

      <div className="main-layout">
        <p className="row-start-1 row-end-3">
          Dive into my journey of learning 3D design, Blender techniques, and creative explorations. Here, you'll find projects, experiments, and
          reflections as I continue to grow in the world of 3D art
        </p>

        <div className="col-start-1 col-end-2 h-[50px] w-[140px]">
          <DropDown></DropDown>
        </div>
        <div className="right-box">
          <video width="640" height="360" autoPlay muted loop playsInline className="rounded-[0.75rem]">
            <source src={`/images/homepage/blender-logo.mp4`} type="video/mp4" /> Your browser does not support the video tag.
          </video>
        </div>
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
