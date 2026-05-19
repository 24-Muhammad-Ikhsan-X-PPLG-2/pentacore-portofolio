"use client";

import useInView from "@/hooks/useInView";
import { BadgeCheck, Rocket, Table2 } from "lucide-react";
import { motion } from "motion/react";

const Advantage = () => {
  const { ref, isVisible } = useInView();
  return (
    <section
      ref={ref}
      className="bg-[#131b2e] overflow-hidden py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isVisible ? 0 : 1, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <p className="text-[#c0c9fc] text-sm font-semibold">THE ADVANTAGE</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mt-4">
            Built For Scale, Designed for Impact
          </h1>
          <div className="flex flex-col mt-6 gap-6">
            <div className="flex gap-3 items-start">
              <div className="border border-gray-800 rounded-full p-3">
                <BadgeCheck size={22} color="white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Technical Superiority
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  We build fast, responsive, and scalable websites using modern
                  technologies to ensure smooth performance across all devices.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="border border-gray-800 rounded-full p-3">
                <Table2 size={22} color="white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Data-Driven Strategy
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Every design and development decision is focused on improving
                  user experience, engagement, and business growth.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="border border-gray-800 rounded-full p-3">
                <Rocket size={22} color="white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Agile Execution
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  From planning to launch, we maintain clear communication and
                  efficient workflows to deliver projects on time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full lg:w-1/2 bg-[#0b1326] p-4 sm:p-6 md:p-8 rounded-xl"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#171f32] rounded-xl flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-[#c0c9fc] font-semibold">
                98%
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400 text-center">
                CLIENT SATISFACTION
              </p>
            </div>
            <div className="bg-[#171f32] rounded-xl flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-[#c0c9fc] font-semibold">
                50+
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400 text-center">
                APPS SHIPPED
              </p>
            </div>
            <div className="bg-[#171f32] rounded-xl flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-[#c0c9fc] font-semibold">
                24/7
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400 text-center">
                CS SUPPORT
              </p>
            </div>
            <div className="bg-[#171f32] rounded-xl flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-[#c0c9fc] font-semibold">
                12ms
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400 text-center">
                AVG LATENCY
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantage;
