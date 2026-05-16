"use client";

import { FC } from "react";

type ButtonCategoryProps = {
  text: string;
  isActive?: boolean;
};

const ButtonCategory: FC<ButtonCategoryProps> = ({
  text,
  isActive = false,
}) => {
  return (
    <div
      className={`bg-[#131b2e] cursor-pointer px-6 py-1.5 w-fit rounded-full border ${isActive ? "border-[#bbc9ff]" : "border-gray-800"}`}
    >
      <p>{text}</p>
    </div>
  );
};
export default ButtonCategory;
