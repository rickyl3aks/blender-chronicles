import Image from "next/image";
import resourceData from "../content/resourceData.json";
import { ResourcesData } from "../types/types";

const resourcesInfo: ResourcesData[] = resourceData.resource;

const Resources = () => {
  return (
    <section className="p-8 mx-auto">
      <h2 className="font-title text-[var(--accent)] max-sm:text-4xl text-5xl font-bold mb-6">Resources</h2>
      {resourcesInfo.map((resource) => {
        return (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener"
            className="block my-8 rounded bg-[#392d35] shadow-md hover:bg-[#5a3f58] transition-colors duration-300 hover:shadow-lg"
          >
            <ul className="cursor-pointer list-none">
              <li className="flex items-center justify-between gap-4 p-4 rounded-lg bg-black/5 dark:bg-white/5">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="tag inline-block font-bold bg-indigo-600 text-white text-sm px-2 py-0.5 rounded uppercase">
                        {tag}
                      </span>
                    ))}
                    <span className="font-title text-[#C6A4B6] font-bold no-underline">{resource.title}</span>
                  </div>
                  <p className="max-[900px]:text-[1.3rem] text-white mt-1">{resource.description}</p>
                </div>
                <Image width={50} height={50} src={resource.img} alt={resource.title} className="w-[50px] h-[50px] rounded-full" />
              </li>
            </ul>
          </a>
        );
      })}
    </section>
  );
};

export default Resources;
