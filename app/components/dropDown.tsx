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
        <span className="circle-arrow ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <ul className="absolute mt-2 left-0 w-48 bg-white border border-black shadow-lg z-10 rounded-lg overflow-hidden border-[3px] border-black">
          <Link href="/rendering">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">3D Render</li>
          </Link>
          <Link href="/lowPoly">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Low Poly</li>
          </Link>
          <Link href="/motionGraphics">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Motion Graphics</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
