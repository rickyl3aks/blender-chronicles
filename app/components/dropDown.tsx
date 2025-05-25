"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button onClick={() => setOpen((prev) => !prev)} className="btn-projects flex items-center gap-2 relative overflow-hidden px-4 py-2">
        projects
        <span className="circle-arrow flex items-center justify-center w-6 h-6 rounded-full border-2 border-black transition-transform duration-300 hover:translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <ul className="absolute mt-2 left-0 w-48 bg-white border border-black shadow-lg z-10 rounded-lg overflow-hidden">
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <Link href="/rendering" onClick={() => setOpen(false)}>
              3D Render
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <Link href="/lowPoly" onClick={() => setOpen(false)}>
              Low Poly
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <Link href="/motionGraphics" onClick={() => setOpen(false)}>
              Motion Graphics
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
