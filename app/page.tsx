import Image from "next/image";
import ImagePopup from "./image-popup";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ImagePopup />
        <h1 className="text-3xl font-bold text-center sm:text-left">Welcome to Blender Chronicles</h1>
        <p className="text-base text-center sm:text-left text-gray-600 dark:text-gray-400">
          Dive into my journey of learning 3D design, Blender techniques, and creative explorations. Here, you'll find projects, experiments, and
          reflections as I continue to grow in the world of 3D art.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Start exploring by navigating to the
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">Projects</code> section
          </li>
          <li>Check out my latest renders and experiments.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/projects"
            rel="noopener noreferrer"
          >
            Browse Projects
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/rickyl3aks"
          >
            View my GitHub
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/about">
          <Image aria-hidden src="/images/icon/about.svg" alt="About me" width={16} height={16} />
          About Me
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="mailto:rconsolandi@gmail.com">
          {" "}
          <Image aria-hidden src="/images/icon/contact.svg" alt="Contact icon" width={16} height={16} />
          Contact Me
        </a>
      </footer>
    </div>
  );
}
