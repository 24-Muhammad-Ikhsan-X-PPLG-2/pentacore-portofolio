"use client";

import useInView from "@/hooks/useInView";
import { MoveRight, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const AppDevelopment = () => {
  const { isVisible, ref } = useInView();
  return (
    <div
      ref={ref}
      id="app-development"
      className="flex pt-25 pb-25 flex-col md:flex-row items-center gap-6 mt-12 px-4 sm:px-6 lg:px-0"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-72 sm:h-96 rounded-xl p-4 sm:p-6 shadow-lg bg-[#171f32]"
      >
        <Image
          width={1024}
          height={960}
          src="/img/mobile.webp"
          className="w-full h-full rounded-xl object-cover"
          alt="App Development Image"
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full md:w-1/2 text-white"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-10 h-10 bg-[#252d44] flex justify-center items-center rounded-lg"
        >
          <Smartphone size={20} color="white" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold max-w-xl"
        >
          Mobile App Development
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 font-light text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl"
        >
          We build fast, scalable, and intuitive mobile applications designed
          for modern users and growing businesses.
        </motion.p>
        <ul className="list-disc mt-6 pl-5 flex flex-col gap-2">
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Cross-platform iOS & Android Development
          </motion.li>
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Real-time Data & API Integration
          </motion.li>
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Secure Authentication & Cloud Sync
          </motion.li>
        </ul>
        {/* <motion.a
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          href="#"
          className="flex items-center gap-2 mt-4 text-[#c0c9fc] hover:underline"
        >
          Explore our mobile process <MoveRight size={20} color="white" />
        </motion.a> */}
      </motion.div>
    </div>
  );
};

export default AppDevelopment;
