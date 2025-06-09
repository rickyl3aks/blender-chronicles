import ProjectShowcase from "../components/projectShowcase";
import projectData from "../data/projects.json";

const Journey = () => {
  const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);

  return (
    <section className="mobile:text-white px-4 py-8 max-w-[950px] mx-auto">
      <h1 className="text-5xl max-sm:text-4xl font-title font-bold text-[var(--accent)] mb-6">Journey</h1>
      <ProjectShowcase items={sortedProjects} />
    </section>
  );
};

export default Journey;
