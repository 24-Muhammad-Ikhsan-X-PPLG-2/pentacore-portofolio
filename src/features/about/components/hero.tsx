"use client";

import useInView from "@/hooks/useInView";
import { motion } from "motion/react";

const HeroSection = () => {
  const { isVisible, ref } = useInView();
  return (
    <section
      ref={ref}
      className="min-h-screen bg-linear-to-br from-[#0a1225] to-[#0f1a35] text-white pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center lg:items-start">
          {/* Left Content */}
          <div className="flex-1 w-full text-center lg:text-left order-1">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="text-[#c0c9fc] text-xs sm:text-sm font-semibold tracking-widest uppercase"
            >
              ABOUT US
            </motion.p>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-4 md:mt-6 leading-tight md:leading-snug lg:leading-tight bg-linear-to-r from-white via-[#e0e7ff] to-[#c0c9fc]"
            >
              Building digital experiences{" "}
              <span className="text-[#c0c9fc] block md:inline">
                that drive real impact.
              </span>
            </motion.h1>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full leading-relaxed space-y-4 md:space-y-6 order-2">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-gray-100 transition-colors duration-300"
            >
              We are a creative web agency focused on building modern,
              functional, and impactful digital experiences for F&B brands,
              SMEs, educational institutions, and growing businesses. From
              company profiles to custom business websites, we help brands
              strengthen their online presence through clean design, responsive
              development, and user-focused solutions tailored to each client's
              goals.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-gray-100 transition-colors duration-300"
            >
              With a strong focus on communication and long-term collaboration,
              we believe every business deserves a website that not only looks
              professional, but also supports growth and builds trust. Our
              services include web development, UI/UX design, and digital
              solutions designed to help businesses stand out in today's
              competitive market.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
