import { Caption } from "../atoms/caption";
import { Title } from "../atoms/title";

const HeroPage = () => {
  return (
    <section className="text-center m-12">
      <Title title="Welcome to My Blender Journey" />
      <Caption text="I’m documenting everything I learn in Blender from experiments to finished renders. Come along!" />
    </section>
  );
};

export default HeroPage;
