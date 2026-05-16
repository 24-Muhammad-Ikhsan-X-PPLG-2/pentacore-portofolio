"use client";

import React, { FC } from "react";

type CardProjectProps = {
  img: string;
  category: string;
  title: string;
  desc: string;
};

const CardProject: FC<CardProjectProps> = ({ category, desc, img, title }) => {
  return (
    <div className="w-full h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-xl bg-[#131b2e] border border-gray-800 shadow-lg overflow-hidden flex flex-col">
      <img
        src={img}
        className="w-full h-28 sm:h-32 md:h-40 lg:h-40 xl:h-44 object-cover object-center"
        alt=""
      />
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
        <div>
          <p className="text-[#bbc9ff] font-semibold text-sm">{category}</p>
          <h1 className="text-2xl font-bold mt-1 sm:mt-2 line-clamp-2">
            {title}
          </h1>
        </div>
        <p className="text-base text-gray-300 font-light mt-2 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
