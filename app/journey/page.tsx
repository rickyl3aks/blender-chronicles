import ProjectShowcase from "../components/projectShowcase";
import projectData from "../data/projects.json";

const Journey = () => {
  const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);

  return (
    <section>
      <h1 className="text-5xl max-sm:text-4xl font-title font-bold text-[var(--accent)] mb-6">Journey</h1>
      <ProjectShowcase items={sortedProjects} />
    </section>
  );
};

export default Journey;
