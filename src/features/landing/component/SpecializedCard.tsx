"use client";

import { ElementType, FC } from "react";

type SpecializedCardProps = {
  Icon: ElementType;
  title: string;
  desc: string;
};

const SpecializedCard: FC<SpecializedCardProps> = ({ desc, Icon, title }) => {
  return (
    <div
      className="bg-[#171f32] p-5 w-100 h-57.5 rounded-lg shadow-xl"
      suppressHydrationWarning
    >
      <div className="bg-[#252c48] w-fit p-2 rounded-lg">
        <Icon size={20} color="#c0c9fc" />
      </div>
      <h1 className="mt-4 text-3xl font-bold">{title}</h1>
      <p className="mt-4 leading-relaxed text-gray-300">{desc}</p>
    </div>
  );
};

export default SpecializedCard;
