"use client";

import { Palette } from "lucide-react";
import { motion } from "motion/react";

const UiUxDesign = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mt-12 px-4 sm:px-6 lg:px-0">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full order-2 md:order-1 md:w-1/2 text-white"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-10 h-10 bg-[#252d44] flex justify-center items-center rounded-lg"
        >
          <Palette size={20} color="white" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold max-w-xl"
        >
          UI/UX Research & Design
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 font-light text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          consequuntur, ipsam dolore ullam labore fugiat reprehenderit cumque
          animi id veritatis sapiente, accusantium aut libero illo. Dolores
          deserunt beatae non voluptas!
        </motion.p>
        <div className="flex flex-col mt-5 gap-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col border-l-4 pl-4 py-4 border-white"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              Emphathetic Discovery
            </h2>
            <p className="text-sm sm:text-base font-light mt-1 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, quibusdam!
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col border-l-4 pl-4 py-4 border-gray-800"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              Emphathetic Discovery
            </h2>
            <p className="text-sm sm:text-base font-light mt-1 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, quibusdam!
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full order-1 md:order-2 md:w-1/2 h-72 sm:h-96 rounded-xl p-4 sm:p-6 shadow-lg bg-[#171f32]"
      >
        <img
          src="/img/landing_photo.jpg"
          className="w-full h-full rounded-xl object-cover"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default UiUxDesign;
