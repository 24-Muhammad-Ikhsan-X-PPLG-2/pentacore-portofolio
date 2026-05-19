"use client";

import useInView from "@/hooks/useInView";
import ButtonCategory from "./ButtonCategory";
import CardProject from "./CardProject";
import { motion } from "motion/react";

const OurWork = () => {
  const { isVisible, ref } = useInView();
  return (
    <section
      ref={ref}
      className="text-white pt-30 pb-16 px-6 bg-[#0b1326] flex justify-center"
    >
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
          <div className="w-full lg:max-w-xl">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="text-[#c0c9fc] font-semibold"
            >
              OUR WORK
            </motion.p>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
            >
              Precision Engineered{" "}
              <span className="text-[#bbc9ff]">Digital Craftsmanship</span>
            </motion.h1>
          </div>

          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full overflow-x-auto"
          >
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 whitespace-nowrap items-center p-2">
              <ButtonCategory isActive text="All Projects" />
              <ButtonCategory text="Fintech" />
              <ButtonCategory text="E-Commerce" />
              <ButtonCategory text="Corporate" />
              <ButtonCategory text="Sports" />
              <ButtonCategory text="UMKM" />
            </div>
          </motion.div> */}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CardProject
            isVisible={isVisible}
            category="CORPORATE"
            desc="SwasthaRaksha is an ID-Scanner app that also monitor and record transactions. Aimed to restrict adolescents tobacco access in Indonesia, helping to create a healthy generation for a golden Nation."
            img="/projects/swastha.webp"
            title="Swastha Raksa"
            delay={0.7}
            href="https://swastha-raksa.vercel.app/"
          />
          <CardProject
            isVisible={isVisible}
            category="Islamic FinTech Tool"
            desc="Fitra is a precise financial tool designed to simplify Zakat calculations."
            img="/projects/fitra.webp"
            title="Fitra"
            delay={0.8}
          />
          <CardProject
            isVisible={isVisible}
            category="Organization Website"
            desc="A modern and responsive portal for school student organizations to manage activities and information."
            img="/projects/mpk.webp"
            title="MPK"
            delay={0.9}
            href="https://mpk-letris.vercel.app/"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-[#131b2e] rounded-xl border lg:col-span-2 border-gray-800 shadow-lg overflow-hidden"
          >
            <img
              src="/projects/wikiarticle.webp"
              className="h-60 w-full object-cover object-center"
              alt=""
            />
            <div className="p-4">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#bbc9ff] font-semibold text-sm">
                  Knowledge Base Platform
                </p>
                <div className="bg-gray-800 px-3 py-1.5 text-xs rounded-full font-semibold flex items-center gap-2">
                  <div className="size-3 bg-yellow-500 rounded-full"></div>
                  <p>Ongoing Project</p>
                </div>
              </div>

              <h1 className="text-2xl font-bold mt-2">Wikiarticle</h1>
              <p className="mt-2 font-light">
                WikiArticle is a fast, minimalist, and modern platform built for
                seamless knowledge sharing
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-[#131b2e] rounded-xl border border-gray-800 shadow-lg overflow-hidden"
          >
            <img
              src="/projects/manga.webp"
              className="h-60 w-full object-cover object-center"
              alt=""
            />
            <div className="p-4">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#bbc9ff] font-semibold text-sm">
                  Mobile Application
                </p>
                <div className="bg-gray-800 px-3 py-1.5 text-xs rounded-full font-semibold flex items-center gap-2">
                  <div className="size-3 bg-yellow-500 rounded-full"></div>
                  <p>Ongoing Project</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mt-2">Zentora</h1>
              <p className="mt-2 font-light">
                Zentora is a fast, clean, and modern manga reader web
                application designed for an immersive reading experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
