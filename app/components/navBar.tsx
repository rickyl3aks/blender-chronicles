"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { categories } from "./constant";
import InfoCard from "./infoCard";
import { CategoryData, DataByCategory } from "./dropDown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<DataByCategory>({});
  const pathname = usePathname();

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

  return (
    <nav className=" bg-white border-gray-200 dark:bg-gray-900">
      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/images/logo/logo.png"  width={50} height={50} alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="hamburger inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} absolute top-25 left-0 z-[10]  w-full lg:hidden`} id="navbar-default-mobile">
          <ul className="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {categories.map(({ slug, label, folder }) => {
              const isActive = pathname === slug;
              const summaries = data[slug]?.summaries;
              const latest = summaries?.reduce((a, b) => (b.date > a.date ? b : a), summaries?.[0]);

              return (
                <li key={slug}>
                  <Link
                    href={slug}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-2 px-3 rounded-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      isActive ? "bg-blue-700 text-white dark:text-white" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <InfoCard latest={latest} folder={folder} label={label} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:block w-auto" id="navbar-default-desktop">
          <ul className="font-medium flex flex-row space-x-8 border-0 bg-transparent p-0 mt-0 dark:bg-transparent">
            {categories.map(({ slug, label }) => {
              const isActive = pathname === slug;

              return (
                <li key={slug}>
                  <Link
                    href={slug}
                    onClick={() => setIsOpen(false)}
                    className={`text-[2rem] block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
