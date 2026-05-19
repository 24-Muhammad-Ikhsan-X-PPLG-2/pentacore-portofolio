"use client";

import useInView from "@/hooks/useInView";
import { motion } from "motion/react";

const Steps = () => {
  const { isVisible, ref } = useInView();
  return (
    <div ref={ref} className="flex flex-col gap-4 mt-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex items-center gap-4"
      >
        <div className="relative">
          <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
            <p className="font-semibold">1</p>
          </div>
          <div className="hidden md:block border-r-2 border-dashed border-[#c0c9fc] h-10 w-0 absolute left-1/2 -translate-x-1/2 top-5 z-0"></div>
        </div>
        <p className="font-semibold">Discover & Strategy</p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="flex items-center gap-4"
      >
        <div className="relative">
          <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
            <p className="font-semibold">2</p>
          </div>
          <div className="hidden md:block border-r-2 border-dashed border-[#c0c9fc] h-10 w-0 absolute left-1/2 -translate-x-1/2 top-5 z-0"></div>
        </div>
        <p className="font-semibold">Design & Prototype</p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex items-center gap-4"
      >
        <div className="relative">
          <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
            <p className="font-semibold">3</p>
          </div>
          <div className="hidden md:block border-r-2 border-dashed border-[#c0c9fc] h-10 w-0 absolute left-1/2 -translate-x-1/2 top-5 z-0"></div>
        </div>
        <p className="font-semibold">Develop & Build</p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex items-center gap-4"
      >
        <div className="relative">
          <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
            <p className="font-semibold">4</p>
          </div>
        </div>
        <p className="font-semibold">Launch & Support</p>
      </motion.div>
    </div>
  );
};

export default Steps;
