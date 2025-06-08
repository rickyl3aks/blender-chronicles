import Image from "next/image";
import resourceData from "../content/resourceData.json";
import { ResourcesData } from "../types/types";

const resourcesInfo: ResourcesData[] = resourceData.resource;

const Resources = () => {
  return (
    <section className="p-8 max-w-[900px] mx-auto">
      <h2 className="text-4xl font-bold mb-6">Resources</h2>
      {resourcesInfo.map((resource) => {
        return (
          <ul key={resource.title} className="my-8 p-4 rounded bg-[var(--bg-alt)] shadow-md list-none pl-0 space-y-6">
            <li className="flex items-center justify-between gap-4 p-4 rounded-lg bg-black/5 dark:bg-white/5">
              <div className="flex flex-col flex-1">
                <div className="flex items-center flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="tag inline-block font-bold bg-indigo-600 text-white text-sm px-2 py-0.5 rounded uppercase">
                      {tag}
                    </span>
                  ))}
                  <a href={resource.url} target="_blank" rel="noopener" className="text-[var(--accent)] font-bold no-underline hover:underline">
                    {resource.title}
                  </a>
                </div>
                <p className="max-[900px]:text-[1.3rem] text-gray-700 dark:text-gray-400 mt-1">{resource.description}</p>
              </div>
              <Image width={50} height={50} src={resource.img} alt={resource.title} className="w-[50px] h-[50px] rounded-full" />
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default Resources;
