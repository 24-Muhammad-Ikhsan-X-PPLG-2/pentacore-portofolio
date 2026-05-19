"use client";

import useInView from "@/hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

const RecentPortofolio = () => {
  const { isVisible, ref } = useInView();
  return (
    <section
      id="recent-catalog"
      ref={ref}
      className="py-16 md:py-24 lg:py-30 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-10 bg-[#0b1326]"
    >
      <div className="w-full max-w-7xl">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-[#c0c9fc] text-sm font-semibold"
        >
          CASE STUDIES
        </motion.p>
        <div className="w-full overflow-hidden flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight mt-4"
          >
            Recent Catalog
          </motion.h1>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-medium text-sm flex items-center gap-2 cursor-pointer group hover:underline"
          >
            View Full Archive{" "}
            <ArrowUpRight
              size={16}
              color="white"
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full items-start justify-items-center">
          <Card isVisible={isVisible} title="Nexus Analytics" />

          <Card isVisible={isVisible} delay={2} title="Fitra" />

          <Card isVisible={isVisible} delay={2.5} title="Apa aja" />
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  delay?: number;
  isVisible: boolean;
};

const Card: FC<CardProps> = ({ title, delay = 1, isVisible }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.5 * delay }}
      className="w-full max-w-sm"
    >
      <img
        src="/img/landing_photo.jpg"
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded-lg object-cover object-center"
        alt=""
      />
      <h3 className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold">
        {title}
      </h3>
      <p className="mt-3 text-gray-400 text-sm sm:text-base">Lorem, ipsum.</p>
    </motion.div>
  );
};

export default RecentPortofolio;
