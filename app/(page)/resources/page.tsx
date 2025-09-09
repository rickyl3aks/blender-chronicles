import Image from "next/image";
import resourceData from "@/app/content/resourceData.json";
import { ResourcesData } from "@/app/types/types";
import { Title } from "@/app/components/atoms/title";
import { Caption } from "@/app/components/atoms/caption";
import { Content } from "@/app/components/atoms/content";

const resourcesInfo: ResourcesData[] = resourceData.resource;

const Resources = () => {
  return (
    <section className="p-8 mx-auto">
      <Title title="Resources" />
      <Caption text="This section presents the core tools, courses, and communities that have fueled my growth as a designer and 3D artist" />
      {resourcesInfo.map((resource) => {
        return (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener"
            className="block my-8 bg-[#392d35] shadow-md hover:bg-[#5a3f58] transition-colors duration-300 hover:shadow-lg rounded-xl"
          >
            <ul className="rounded-2xl block my-10 p-6 text-white bg-[#392d35] shadow-xl hover:bg-[#5a3f58] transition-colors duration-300 hover:shadow-2xl cursor-pointer text-lg">
              <li className="flex items-center justify-between">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="tag inline-block font-bold bg-indigo-600 text-white text-sm px-2 py-0.5 rounded uppercase">
                        {tag}
                      </span>
                    ))}
                    <span className="font-title text-[#C6A4B6] font-bold no-underline">{resource.title}</span>
                  </div>
                  <Content>{resource.description}</Content>
                </div>
                <Image width={50} height={50} src={resource.img} alt={resource.title} className="w-[50px] h-[50px] rounded-full" priority />
              </li>
            </ul>
          </a>
        );
      })}
    </section>
  );
};

export default Resources;
