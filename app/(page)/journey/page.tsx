import { Caption } from "@/app/components/atoms/caption";
import { Title } from "@/app/components/atoms/title";
import ProjectShowcase from "@/app/components/organisms/projectShowcase";
import { sortedProjects } from "@/app/functions/sortedProject";

const Journey = () => {
  return (
    <section className="max-mobile:max-w-[800px] mx-auto p-6">
      <Title title="Journey" />
      <Caption text="A peek into the process: raw experiments, work-in-progress snapshots, and early thoughts" />
      <ProjectShowcase items={sortedProjects} />
    </section>
  );
};

export default Journey;
