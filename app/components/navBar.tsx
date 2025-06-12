"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Journey", href: "/journey" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="backdrop-blur-md fixed z-10 w-full shadow-2xl">
      {({ open }) => (
        <>
          <nav>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <Link href="/">
                  <Image width={50} height={50} className="h-10 w-auto" src="/images/logo/logo.png" alt="logo" priority={true} />
                </Link>

                <div className="hidden mobile:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive ? "text-white bg-[#5a3f58]/90 backdrop-blur-sm" : "text-[#7a6a5a] hover:bg-[#a18695]/60 hover:text-white",
                            "rounded-md px-3 py-2 text-xl font-medium transition-all duration-200"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="mobile:hidden ml-auto">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </nav>

          <DisclosurePanel className="mobile:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href ? "text-white bg-[#5a3f58]/90 backdrop-blur-sm" : "text-[#7a6a5a] hover:bg-[#a18695]/60 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-all duration-200"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
