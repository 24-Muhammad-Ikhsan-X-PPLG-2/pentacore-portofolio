"use client";

import { ArrowUpRight } from "lucide-react";

const RecentPortofolio = () => {
  return (
    <section className="py-16 md:py-24 lg:py-30 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-10 bg-[#0b1326]">
      <div className="w-full max-w-7xl">
        <p className="text-[#c0c9fc] text-sm font-semibold">CASE STUDIES</p>
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight mt-4">
            Recent Portofolio
          </h1>
          <p className="font-medium text-sm flex items-center gap-2 cursor-pointer group hover:underline">
            View Full Archive{" "}
            <ArrowUpRight
              size={16}
              color="white"
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full items-start justify-items-center">
          <div className="w-full max-w-sm">
            <img
              src="/img/landing_photo.jpg"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded-lg object-cover object-center"
              alt=""
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold">
              Nexus Analytics
            </h3>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              Lorem, ipsum.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <img
              src="/img/landing_photo.jpg"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded-lg object-cover object-center"
              alt=""
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold">
              Barra PMO
            </h3>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              Lorem, ipsum.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <img
              src="/img/landing_photo.jpg"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded-lg object-cover object-center"
              alt=""
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold">
              Apa aja
            </h3>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              Lorem, ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPortofolio;
