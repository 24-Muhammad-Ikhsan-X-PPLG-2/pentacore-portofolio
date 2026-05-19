"use client";

import useInView from "@/hooks/useInView";
import { motion } from "motion/react";

const CTA = () => {
  const { isVisible, ref } = useInView();
  return (
    <section
      ref={ref}
      className="min-h-40 bg-[#0052fe] flex flex-col text-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 justify-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Ready to initiate your next project?
          </h1>
          <p className="mt-2 text-sm sm:text-base font-light">
            Our engineering team is ready to scale your vision
          </p>
        </motion.div>
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap hover:bg-gray-800 transition-colors"
        >
          Schedule a Consultion
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
