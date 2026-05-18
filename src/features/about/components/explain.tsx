"use client";

import { FC } from "react";
import { Eye, Gem, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const ExplainSection = () => {
  return (
    <section className="min-h-screen bg-[#0f1a35] px-4 sm:px-6 lg:px-8 text-white py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-8">
        <Card
          Icon={Target}
          delay={0}
          desc="To create digital solutions that empower businesses, enhance user experiences, and deliver measurable results."
          title="Our Mission"
        />
        <Card
          delay={1}
          Icon={Eye}
          desc="To be a trusted digital partner for businesses across industries, driving innovation and long-term success."
          title="Our Vision"
        />
        <Card
          Icon={Users}
          delay={1.5}
          desc="We combine strategy, design, and technology to build solutions that are user-focused and future-ready."
          title="Our Approach"
        />
        <Card
          Icon={Gem}
          delay={2}
          desc="Quality, transparency, collaboration, and continuous improvement guide everything we do."
          title="Our Values"
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full mt-8 shadow-lg rounded-2xl mb-8 bg-[#111c30] border border-gray-800 overflow-hidden flex flex-col lg:grid lg:grid-cols-5"
      >
        <div className="col-span-2 p-6 md:p-8 order-2 lg:order-1">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#c0c9fc] text-xs sm:text-sm font-semibold tracking-widest uppercase"
          >
            HOW WE WORK
          </motion.p>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
          >
            Strategy. Design. Develop. Deliver.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 font-light mt-4"
          >
            We follow a proven process to ensure every project is delivered with
            clarity, quality, and purpose.
          </motion.p>
          <div className="flex flex-col gap-4 mt-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
                  <p className="font-semibold">1</p>
                </div>
                <div className="hidden md:block border-r-2 border-dashed border-[#c0c9fc] h-10 w-0 absolute left-1/2 -translate-x-1/2 top-5 z-0"></div>
              </div>
              <p className="font-semibold">Discover & Strategy</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
                  <p className="font-semibold">2</p>
                </div>
                <div className="hidden md:block border-r-2 border-dashed border-[#c0c9fc] h-10 w-0 absolute left-1/2 -translate-x-1/2 top-5 z-0"></div>
              </div>
              <p className="font-semibold">Design & Prototype</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
                  <p className="font-semibold">3</p>
                </div>
                <div className="hidden md:block border-r-2 border-dashed border-[#c0c9fc] h-10 w-0 absolute left-1/2 -translate-x-1/2 top-5 z-0"></div>
              </div>
              <p className="font-semibold">Develop & Build</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="relative z-10 p-3 h-10 w-10 rounded-full bg-[#111c30] flex justify-center items-center border border-blue-600">
                  <p className="font-semibold">4</p>
                </div>
              </div>
              <p className="font-semibold">Launch & Support</p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="col-span-3 order-1 lg:order-2"
        >
          <img
            src="/img/landing_photo.jpg"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover object-center"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

type CardProps = {
  Icon: any;
  title: string;
  desc: string;
  delay?: number;
};

const Card: FC<CardProps> = ({ Icon, desc, title, delay = 1 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 * delay }}
      viewport={{ once: true }}
      className="p-6 bg-[#111c30] min-h-56 sm:min-h-60 shadow-lg border border-gray-800 rounded-2xl flex flex-col"
    >
      <div className="mb-3">
        <Icon size={44} color="#c0c9fc" />
      </div>
      <h2 className="text-2xl mt-1 font-bold">{title}</h2>
      <p className="mt-3 font-light text-sm md:text-base text-gray-300">
        {desc}
      </p>
    </motion.div>
  );
};

export default ExplainSection;
