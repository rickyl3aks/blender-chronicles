import { Items } from "@/app/types/types";
import React from "react";

interface PreviewCardProps {
  item: Items;
  media: React.ReactNode;
  href: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ item, media, href }) => {
  return (
    <a
      href={href}
      className={`
              rounded-xl text-lg block my-8 p-6 text-white shadow-md transition-transform duration-300 cursor-pointer
              ${"bg-[#392d35] hover:bg-[#5a3f58] hover:shadow-lg min-h-[380px]"}
              hover:scale-105
            `}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="mb-4 font-title text-[#C6A4B6] font-bold text-2xl">
            {item.title}
          </h2>
          {media}
        </div>

        <div>
          <p className="text-white mb-4">{item.description}</p>
          <span className="text-[#E8C4C4] font-bold hover:underline hover:text-[#F5D6D6] transition-colors duration-200 cursor-pointer">
            {item.label}
          </span>
        </div>
      </div>
    </a>
  );
};

export default PreviewCard;
