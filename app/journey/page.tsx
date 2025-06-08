import Carousel from "../components/carousel";
import projectData from "../data/projects.json";

const Journey = () => {
  const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-5xl max-sm:text-4xl font-title font-bold text-[var(--accent)] mb-6">Journey</h1>
      <Carousel items={sortedProjects} />
    </section>
  );
};

export default Journey;
