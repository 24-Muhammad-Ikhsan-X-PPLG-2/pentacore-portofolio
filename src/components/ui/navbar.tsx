"use client";

import { FC } from "react";

type NavbarProps = {
  currentPage?: string;
};

const Navbar: FC<NavbarProps> = ({ currentPage = "home" }) => {
  return (
    <nav className="w-full fixed z-9999 bg-[#0c1326] border-b border-gray-800">
      <div className="h-18 flex items-center px-4 justify-between">
        <h1 className="text-white font-black text-2xl">Pentacore Labs</h1>
        <Links currentPage={currentPage} />
        <button className="px-7 py-2.5 font-semibold text-sm cursor-pointer hover:-translate-y-1 transition duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)] bg-[#024ef8] text-white rounded-xl">
          Start Project
        </button>
      </div>
    </nav>
  );
};

type LinksProps = {
  currentPage: string;
};

const Links: FC<LinksProps> = ({ currentPage }) => {
  const getClassActivePage = (page: string) => {
    if (page === currentPage) {
      return "font-bold";
    }
    return "";
  };
  const isActivePage = (page: string) => {
    if (page === currentPage) {
      return true;
    }
    return false;
  };
  return (
    <div className="flex items-center text-white font-medium gap-7">
      <div className="flex flex-col gap-1 items-center">
        <a href="" className={getClassActivePage("home")}>
          Home
        </a>
        {isActivePage("home") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>
      <div className="flex flex-col gap-1">
        <a href="" className={getClassActivePage("services")}>
          Services
        </a>
        {isActivePage("services") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>
      <div className="flex flex-col gap-1">
        <a href="" className={getClassActivePage("portofolio")}>
          Portofolio
        </a>
        {isActivePage("portofolio") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>
      <div className="flex flex-col gap-1">
        <a href="" className={getClassActivePage("about")}>
          About
        </a>
        {isActivePage("about") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
