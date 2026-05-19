"use client";

import useInView from "@/hooks/useInView";
import { Pentagon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const CTA = () => {
  const { isVisible, ref } = useInView();
  return (
    <section
      ref={ref}
      className="pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b1326] flex justify-center text-white"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-[#0052fe] rounded-2xl py-8 px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-8"
      >
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to engineer your next digital breakthrough?
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <Link href={"/contact"}>
              <button className="w-full sm:w-auto bg-white font-semibold text-[#0052fe] px-6 py-3 rounded-xl cursor-pointer text-center">
                Consult Now
              </button>
            </Link>
            <Link href={"/services"}>
              <button className="w-full sm:w-auto bg-transparent text-white border border-white px-6 py-3 rounded-xl cursor-pointer font-semibold text-center">
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <Pentagon size={120} color="rgba(255,255,255,0.5)" />
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
