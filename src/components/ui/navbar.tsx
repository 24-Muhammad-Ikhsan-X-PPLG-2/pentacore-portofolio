"use client";

import { FC, useState } from "react";
import NavLinks from "./NavLinks";
import NavbarMobile from "./NavbarMobile";
import Link from "next/link";

type NavbarProps = {
  currentPage?: string;
};

const Navbar: FC<NavbarProps> = ({ currentPage = "home" }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed z-9999 bg-[#0c1326]/90 backdrop-blur-lg border-b border-gray-800">
        <div className="h-18 flex items-center px-4 justify-between">
          <Link href={"/"}>
            <div className="flex gap-1 items-center">
              <img src="/logo.webp" className="w-16" width={64} alt="" />
              <h1 className="text-white font-black text-2xl">Pentacore Labs</h1>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            <NavLinks currentPage={currentPage} />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href={"/contact"}>
              <button className="px-7 py-2.5 font-semibold text-sm cursor-pointer hover:-translate-y-1 transition duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)] bg-[#024ef8] text-white rounded-xl">
                Start Project
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="p-2 rounded-md text-white hover:bg-white/5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar / Drawer */}
      <NavbarMobile currentPage={currentPage} open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
