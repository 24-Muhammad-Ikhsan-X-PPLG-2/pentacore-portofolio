"use client";

import { useEffect, useState } from "react";
import SpecializedCard from "./SpecializedCard";
import { Code, MonitorSmartphone, PencilRuler } from "lucide-react";
import { motion } from "motion/react";
import useInView from "@/hooks/useInView";

const SpecializedSection = () => {
  const { isVisible, ref } = useInView();
  return (
    <section
      ref={ref}
      className="bg-[#070e20] text-white px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-sm font-bold leading-tight text-[#c0c9fc]">
            OUR EXPERTISE
          </h3>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight bg-linear-to-r from-white to-[#c0c9fc] bg-clip-text text-transparent">
            Specialized Tech Services
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#c0c9fc] mt-4"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 justify-items-center">
          <SpecializedCard
            isVisible={isVisible}
            delay={1}
            Icon={Code}
            desc="Building modern, responsive, and high-performance websites tailored to business and user needs."
            title="Web Development"
          />
          <SpecializedCard
            delay={2}
            isVisible={isVisible}
            Icon={PencilRuler}
            desc="Designing clean and intuitive digital experiences that improve usability, engagement, and user satisfaction."
            title="UI/UX Design"
          />
          <SpecializedCard
            delay={3}
            isVisible={isVisible}
            Icon={MonitorSmartphone}
            desc="Creating functional and scalable mobile or web applications to support business growth and digital transformation."
            title="App Development"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecializedSection;
