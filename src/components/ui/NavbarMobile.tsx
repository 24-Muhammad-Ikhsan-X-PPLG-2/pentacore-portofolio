"use client";

import { FC, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

type NavbarMobileProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
  currentPage: string;
};

const NavbarMobile: FC<NavbarMobileProps> = ({
  open,
  setOpen,
  currentPage,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", clickOutside);
    return () => window.removeEventListener("mousedown", clickOutside);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-9998 ${open ? "translate-x-0" : "-translate-x-full pointer-events-none"} transition-transform duration-300`}
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-[#0c1326] p-6 transform transition-transform`}
        aria-hidden={!open}
        ref={sidebarRef}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-white font-black text-2xl">Pentacore Labs</h1>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-white p-1"
          >
            ✕
          </button>
        </div>

        <div className="mt-8">
          <NavLinks
            currentPage={currentPage}
            onLinkClick={() => setOpen(false)}
            mobile
          />
          <div className="mt-6">
            <Link href={"/contact"}>
              <button className="w-full px-4 py-3 font-semibold text-sm bg-[#024ef8] text-white rounded-xl">
                Start Project
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavbarMobile;
