"use client";

import { FC } from "react";
import { motion } from "motion/react";

type CardProjectProps = {
  img: string;
  category: string;
  title: string;
  desc: string;
  delay?: number;
  isVisible: boolean;
  href?: string;
  onGoing?: boolean;
};

const CardProject: FC<CardProjectProps> = ({
  category,
  desc,
  img,
  title,
  delay = 0.3,
  isVisible,
  href = "#",
  onGoing = false,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className="w-full h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-xl bg-[#131b2e] border border-gray-800 shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={img}
        className="w-full h-28 sm:h-32 md:h-40 lg:h-40 xl:h-44 object-cover object-center"
        alt=""
      />
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between items-center w-full">
            <p className="text-[#bbc9ff] font-semibold text-sm">{category}</p>
            <div className="bg-gray-800 px-3 py-1.5 text-xs rounded-full font-semibold flex items-center gap-2">
              {onGoing ? (
                <>
                  <div className="size-3 bg-blue-500 rounded-full"></div>
                  <p>Ongoing Project</p>
                </>
              ) : (
                <>
                  <div className="size-3 bg-green-500 rounded-full"></div>
                  <p>Completed Project</p>
                </>
              )}
            </div>
          </div>
          <a href={href} target="_blank">
            <h1 className="text-2xl hover:underline font-bold mt-1 sm:mt-2 line-clamp-2">
              {title}
            </h1>
          </a>
        </div>
        <p className="text-base text-gray-300 font-light mt-2 line-clamp-3">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default CardProject;
