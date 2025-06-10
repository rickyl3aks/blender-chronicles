import ProjectShowcase from "../components/projectShowcase";
import projectData from "../data/projects.json";

export const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);

const Journey = () => {
  return (
    <section className="max-mobile:max-w-[800px] mx-auto p-6">
      <h1 className="text-5xl max-sm:text-4xl font-title font-bold text-[#2a2a2a] mb-6">Journey</h1>
      <p className="text-gray-500 mb-10">A peek into the process: raw experiments, work-in-progress snapshots, and early thoughts </p>
      <ProjectShowcase items={sortedProjects} />
    </section>
  );
};

export default Journey;
