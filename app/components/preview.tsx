import React from "react";
import { Items } from "../types/types";

const Preview = async () => {
  const { previewData } = await import("../content/previewData.json");

  return (
    <section className="m-12">
      {previewData.map((items: Items) => {
        return (
          <a
            key={items.title}
            href={items.href}
            className="rounded-xl block my-8 p-4 text-white bg-[#392d35] shadow-md hover:bg-[#5a3f58] transition-colors duration-300 hover:shadow-lg cursor-pointer"
          >
            <h2 className="mb-2 font-title text-[#C6A4B6] font-bold">{items.title}</h2>
            <p>{items.description}</p>
            <span className="text-[var(--accent)] no-underline font-bold hover:underline">{items.label}</span>
          </a>
        );
      })}
    </section>
  );
};

export default Preview;
