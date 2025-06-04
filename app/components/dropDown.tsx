"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./constant";

interface Summary {
  title: string;
  description?: string;
  render: string;
  date: number;
  link?: string;
}

interface CategoryData {
  summaries: Summary[];
}

type DataByCategory = {
  [slug: string]: CategoryData | null;
};

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [dataByCategory, setDataByCategory] = useState<DataByCategory>({});
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function loadData() {
      const results: DataByCategory = {};

      await Promise.all(
        categories.map(async ({ slug }) => {
          try {
            const mod = await import(`../data/${slug}.json`);
            results[slug] = mod.default as CategoryData;
          } catch (e) {
            console.error(`Failed to load ${slug}.json`, e);
            results[slug] = null;
          }
        })
      );

      setDataByCategory(results);
    }

    loadData();
  }, []);

  const getLatestSummary = (summaries?: Summary[] | null): Summary | null => {
    if (!summaries || summaries.length === 0) return null;
    return summaries.reduce((latest, current) => (current.date > latest.date ? current : latest));
  };

  const openDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      closeTimeout.current = null;
    }, 400);
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className="btn-projects flex items-center gap-2 px-4 py-2 relative overflow-hidden"
        type="button"
      >
        <span className="relative z-10">Projects</span>
        <span className="circle-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <ul
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={`absolute mt-2 left-0 w-[400px] max-sm:w-[300px] bg-white shadow-lg z-10 rounded-lg border-[3px] border-black overflow-hidden
            transition-all duration-300 ease-in-out
            transform origin-top
            ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          {categories.map(({ slug, label, folder }) => {
            const latestSummary = getLatestSummary(dataByCategory[slug]?.summaries);

            return (
              <li key={slug}>
                <Link href={`section/${slug}`} className="flex items-center gap-4 px-4 py-2 hover:bg-gray-200 text-black">
                  <div className="rounded-[10px] overflow-hidden">
                    {latestSummary ? (
                      <Image src={`/images/render/${folder}/${latestSummary.render}.png`} alt={latestSummary.title} width={150} height={150} />
                    ) : (
                      <div>No Image</div>
                    )}
                  </div>
                  <div className="text-base font-medium">{label}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
