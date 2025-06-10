const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-lg">
      <h1 className="font-title max-sm:text-4xl text-3xl text-[#2a2a2a] font-bold text-center text-white-600 mb-4">My Blender 3D Journey</h1>
      <p className="text-gray-700 mb-6 text-center">A glimpse into my ongoing exploration of 3D design and animation with Blender</p>
      <div className="w-48 h-48 border-4 border-dashed border-white-600 flex items-center justify-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-4xl text-white-600 animate-bounce">🎨</span>
      </div>
      <p className="text-gray-700 text-center mb-6">
        I started with a curiosity for 3D design and quickly fell in love with Blender’s flexibility. I’m currently learning modeling, texturing, and
        animation, with plans to explore more advanced topics like lighting and procedural generation
      </p>
      <div className="w-48 h-48 border-4 border-dashed border-white-600 flex items-center justify-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-4xl text-white-600 animate-bounce">💻</span>
      </div>
      <p className="text-gray-700 text-center mb-6">
        As a developer, I built this website from scratch using <span className="font-semibold">Next.js</span>,
        <span className=" font-semibold"> TypeScript</span>, and <span className="font-semibold">Tailwind CSS</span> to document and share my
        progress. It’s both a portfolio and a creative space where I combine my love for code and design
      </p>
    </div>
  );
};

export default About;
