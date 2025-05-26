"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const urlPage = pathname.replace(/^\//, "");

  return (
    <nav className=" border-b border-transparent px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold">LOGO</div>
      <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ul
        className={`flex-col md:flex-row md:flex gap-8 m-0 p-0 list-none text-2xl font-bold border-b-2 border-transparent md:border-0 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <li className={`cursor-pointer border-b-2 border-transparent ${urlPage.includes("rendering") ? "text-[#3b82f6]" : ""}`}>3D RENDER</li>
        <li className="cursor-pointer hover:border-b-2 hover:border-[#3b82f6] border-b-2 border-transparent">
          <Link href="motionGraphics">MOTION GRAPHICS</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 hover:border-[#3b82f6] border-b-2 border-transparent">
          <Link href="/lowPoly">LOW POLY</Link>
        </li>
      </ul>
    </nav>
  );
}
