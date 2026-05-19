"use client";

import useInView from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const HeroSection = () => {
  const { ref, isVisible } = useInView();
  return (
    <section
      ref={ref}
      className="pb-15 pt-35 text-white bg-[#0b1326] px-6 md:px-10 xl:px-20 flex justify-center items-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
        className="flex flex-col lg:flex-row justify-center items-center gap-12"
      >
        <div className="w-full max-w-3xl lg:max-w-2xl">
          <div className="inline-flex px-3 py-1 bg-gray-500/50 border border-gray-500/80 rounded-full">
            <p className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
              PRECISSION ENGINEERING
            </p>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-left max-w-3xl">
            <span className="bg-linear-to-r from-white to-[#c0c9fc] text-transparent bg-clip-text">
              Transforming Ideas into
            </span>{" "}
            <span className="text-[#c0c9fc]">Digital Reality</span>
          </h1>
          <p className="mt-7 leading-relaxed text-base text-gray-300 max-w-2xl">
            We are a digital agency focused on website design and development
            for UMKM, F&B businesses, and educational institutions, delivering
            modern, responsive, and high-performance websites tailored to each
            client’s needs. We prioritize clear communication and close
            collaboration to ensure every project is executed effectively and
            aligns with the client’s vision, combining creativity, strategy, and
            technology to help businesses grow online.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-4">
            <Link href={"/contact"}>
              <button className="w-full sm:w-auto px-7 py-3 rounded-lg font-semibold bg-[#024ef8] text-white hover:-translate-y-1 cursor-pointer transition duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)]">
                Get Started
              </button>
            </Link>

            <a
              href="#recent-catalog"
              className="w-full sm:w-auto px-7 py-3 rounded-lg flex items-center justify-center sm:justify-start gap-2 font-semibold bg-transparent border border-gray-300 transition-all cursor-pointer group duration-300 text-gray-300 hover:text-white"
            >
              View Our Work{" "}
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform duration-300"
                size={16}
              />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="/img/landing_photo1.jpg"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-xl"
            alt="Landing showcase"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
