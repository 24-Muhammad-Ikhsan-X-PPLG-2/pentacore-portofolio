"use client";

import useInView from "@/hooks/useInView";
import { Palette } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const UiUxDesign = () => {
  const { isVisible, ref } = useInView();
  return (
    <div
      ref={ref}
      id="ui-ux-design"
      className="flex pt-25 flex-col md:flex-row items-center gap-6 mt-12 px-4 sm:px-6 lg:px-0"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full order-2 md:order-1 md:w-1/2 text-white"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-10 h-10 bg-[#252d44] flex justify-center items-center rounded-lg"
        >
          <Palette size={20} color="white" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold max-w-xl"
        >
          UI/UX Research & Design
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 font-light text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl"
        >
          We craft intuitive digital experiences that help your users move
          faster, stay engaged, and love your product.
        </motion.p>
        <div className="flex flex-col mt-5 gap-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col border-l-4 pl-4 py-4 border-white"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              User-Centered Research
            </h2>
            <p className="text-sm sm:text-base font-light mt-1 leading-relaxed">
              Understand user behavior through research, insights, and usability
              testing.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col border-l-4 pl-4 py-4 border-gray-800"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              Modern Interface Design
            </h2>
            <p className="text-sm sm:text-base font-light mt-1 leading-relaxed">
              Beautiful and scalable interfaces designed for clarity and
              conversion.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full order-1 md:order-2 md:w-1/2 h-72 sm:h-96 rounded-xl p-4 sm:p-6 shadow-lg bg-[#171f32]"
      >
        <Image
          width={1024}
          height={960}
          src="/img/design.webp"
          className="w-full h-full rounded-xl object-cover"
          alt="UI/UX Image"
        />
      </motion.div>
    </div>
  );
};

export default UiUxDesign;
