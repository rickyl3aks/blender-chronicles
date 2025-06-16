import projectData from "@/app/data/projects.json";

export const sortedProjects = [...projectData.projectItems].sort((a, b) => b.date - a.date);
