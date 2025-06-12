import { SubTitle } from "@/app/components/atom/subTitle";
import { Title } from "@/app/components/atom/title";
import ProjectShowcase from "@/app/components/projectShowcase";
import projectData from "@/app/data/projects.json";

export const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);

const Journey = () => {
  return (
    <section className="max-mobile:max-w-[800px] mx-auto p-6">
      <Title title="Journey" />
      <SubTitle subT="A peek into the process: raw experiments, work-in-progress snapshots, and early thoughts" />
      <ProjectShowcase items={sortedProjects} />
    </section>
  );
};

export default Journey;
