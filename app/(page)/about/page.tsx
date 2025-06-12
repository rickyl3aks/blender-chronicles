import { Content } from "@/app/components/atoms/content";
import { Title } from "@/app/components/atoms/title";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-lg">
      <Title title="My Blender 3D Journey" />
      <Content className="text-gray-500 max-w-150 mb-5">A glimpse into my ongoing exploration of 3D design and animation with Blender</Content>
      <div className="w-48 h-48 border-4 border-dashed border-white-600 flex items-center justify-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-4xl text-white-600 animate-bounce">🎨</span>
      </div>
      <Content className="text-gray-500 max-w-150 mb-5">
        I started with a curiosity for 3D design and quickly fell in love with Blender’s flexibility. I’m currently learning modeling, texturing, and
        animation, with plans to explore more advanced topics like lighting and procedural generation
      </Content>
      <div className="w-48 h-48 border-4 border-dashed border-white-600 flex items-center justify-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-4xl text-white-600 animate-bounce">💻</span>
      </div>
      <Content className="text-gray-500 max-w-150 mb-5">
        As a developer, I built this website from scratch using <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">Tailwind CSS</span> to document and share my progress.
        It’s both a portfolio and a creative space where I combine my love for code and design.
      </Content>
    </div>
  );
};

export default About;
