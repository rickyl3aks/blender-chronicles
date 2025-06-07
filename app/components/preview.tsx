import React from "react";
import { items } from "../types/types";

const Preview = async () => {
  const { previewData } = await import("../content/previewData.json");

  return (
    <section>
      {previewData.map((items: items) => {
        return (
          <div key={items.title} className="my-8 p-4 rounded bg-[var(--bg-alt)] shadow-md">
            <h2 className="mb-2">{items.title}</h2>
            <p>{items.description}</p>
            <a href={`${items.href}`} className="text-[var(--accent)] no-underline font-bold hover:underline">
              {items.label}
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Preview;
