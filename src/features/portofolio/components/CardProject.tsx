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
    <div className="w-100 h-80 rounded-xl bg-[#131b2e] border border-gray-800 shadow-lg">
      <img
        src={img}
        className="w-full h-40 object-cover object-center rounded-t-xl"
        alt=""
      />
      <div className="p-4">
        <p className="text-[#bbc9ff] font-semibold text-sm">{category}</p>
        <h1 className="text-2xl font-bold mt-2">{title}</h1>
        <p className="mt-2 font-light">{desc}</p>
      </div>
    </div>
  );
};

export default CardProject;
