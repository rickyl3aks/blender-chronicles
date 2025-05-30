"use client";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-center text-white-600 mb-4">My Blender 3D Journey</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">A glimpse into my ongoing exploration of 3D design and animation with Blender.</p>

      <div className="w-48 h-48 border-4 border-dashed border-white-600 flex items-center justify-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-4xl text-white-600 animate-bounce">🎨</span>
      </div>

      <p className="text-lg text-gray-700 text-center mb-6">
        I started with a curiosity for 3D design and quickly fell in love with Blender’s flexibility. I’m currently learning modeling, texturing, and
        animation, with plans to explore more advanced topics like lighting and procedural generation.
      </p>

      <button
        onClick={() => window.history.back()}
        className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
