"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // To know which URL you're on
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="section-containter ">
      <div className="w-full flex justify-between items-center my-5">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={47}
          className="object-contain"
        />

        {/* Tablet and Desktop Navbar */}
        <div className="md:flex hidden items-center gap-8">
          {navLinks.map((navLink) => {
            const isActive =
              (pathname.includes(navLink.route) && navLink.route.length > 1) ||
              pathname === navLink.route;

            return (
              <Link
                key={navLink.label}
                href={navLink.route}
                className={`text-xl hover:text-primary ${
                  isActive && "text-primary font-semibold"
                }`}
              >
                {navLink.label}
              </Link>
            );
          })}
        </div>

        <div className="relative md:hidden ">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="Mobile Menubar"
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "absolute"
            } right-4 bg-green-100 py-6 px-10 rounded-lg mt-2`}
          >
            <div className="flex flex-col justify-end items-center gap-1">
              {navLinks.map((navLink) => {
                const isActive =
                  (pathname.includes(navLink.route) &&
                    navLink.route.length > 1) ||
                  pathname === navLink.route;

                return (
                  <Link
                    key={navLink.label}
                    href={navLink.route}
                    className={`text-xl hover:text-primary ${
                      isActive && "text-primary font-semibold"
                    }`}
                  >
                    {navLink.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
