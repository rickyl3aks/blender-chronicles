"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { categories } from "./constant";
import InfoCard from "./infoCard";

interface Summary {
  title: string;
  description?: string;
  render: string;
  date: number;
  link?: string;
}

export interface CategoryData {
  summaries: Summary[];
}

export type DataByCategory = Record<string, CategoryData | null>;

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataByCategory>({});
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    (async () => {
      const results: [string, CategoryData | null][] = await Promise.all(
        categories.map(async ({ slug }) => {
          try {
            const mod = await import(`../data/${slug}.json`);
            return [slug, mod.default as CategoryData];
          } catch (e) {
            console.error(`Failed to load ${slug}.json`, e);
            return [slug, null];
          }
        })
      );
      setData(Object.fromEntries(results));
    })();
  }, []);

  const clearCloseTimeout = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };

  const toggle = () => (open ? setOpen(false) : (clearCloseTimeout(), setOpen(true)));
  const close = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 400);
  };

  return (
    <div className="relative inline-block z-[5]">
      <button
        onClick={toggle}
        onMouseEnter={() => (clearCloseTimeout(), setOpen(true))}
        onMouseLeave={close}
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
          onMouseEnter={() => (clearCloseTimeout(), setOpen(true))}
          onMouseLeave={close}
          className={`absolute mt-2 left-0 w-[500px] max-sm:w-[350px] font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
        >
          {categories.map(({ slug, label, folder }) => {
            const summaries = data[slug]?.summaries;
            const latest = summaries?.reduce((a, b) => (b.date > a.date ? b : a), summaries?.[0]);

            return (
              <li key={slug}>
                <Link
                  href={`section/${slug}`}
                  className={`flex items-center gap-2 py-2 px-3 rounded-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
                >
                  <InfoCard latest={latest} folder={folder} label={label} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
