import ProjectShowcase from "../components/projectShowcase";
import projectData from "../data/projects.json";

export const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);

const Journey = () => {
  return (
    <section className="max-sm:max-w-[300px] max-mobile:max-w-[800px] mx-auto">
      <h1 className="text-5xl max-sm:text-4xl font-title font-bold text-[var(--accent)] mb-6">Journey</h1>
      <ProjectShowcase items={sortedProjects} />
    </section>
  );
};

export default Journey;
