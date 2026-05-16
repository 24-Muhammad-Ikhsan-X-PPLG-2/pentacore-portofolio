"use client";

import { FC } from "react";

type LinksProps = {
  currentPage: string;
  onLinkClick?: () => void;
  mobile?: boolean;
};

const NavLinks: FC<LinksProps> = ({
  currentPage,
  onLinkClick,
  mobile = false,
}) => {
  const getClassActivePage = (page: string) =>
    page === currentPage ? "font-bold" : "";
  const isActivePage = (page: string) => page === currentPage;

  const baseLinkClasses = mobile
    ? "block py-3 text-lg text-white"
    : "text-white";

  return (
    <div
      className={
        mobile
          ? "flex flex-col"
          : "flex items-center text-white font-medium gap-7"
      }
    >
      <div className={mobile ? "mb-2" : "flex flex-col gap-1 items-center"}>
        <a
          href=""
          className={`${baseLinkClasses} ${getClassActivePage("home")}`}
          onClick={onLinkClick}
        >
          Home
        </a>
        {isActivePage("home") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>

      <div className={mobile ? "mb-2" : "flex flex-col gap-1"}>
        <a
          href=""
          className={`${baseLinkClasses} ${getClassActivePage("services")}`}
          onClick={onLinkClick}
        >
          Services
        </a>
        {isActivePage("services") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>

      <div className={mobile ? "mb-2" : "flex flex-col gap-1"}>
        <a
          href=""
          className={`${baseLinkClasses} ${getClassActivePage("portofolio")}`}
          onClick={onLinkClick}
        >
          Portofolio
        </a>
        {isActivePage("portofolio") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>

      <div className={mobile ? "mb-2" : "flex flex-col gap-1"}>
        <a
          href=""
          className={`${baseLinkClasses} ${getClassActivePage("about")}`}
          onClick={onLinkClick}
        >
          About
        </a>
        {isActivePage("about") ? (
          <div className="h-0.5 w-full bg-white"></div>
        ) : null}
      </div>
    </div>
  );
};

export default NavLinks;
