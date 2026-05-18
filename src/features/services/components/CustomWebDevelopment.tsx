"use client";

import {
  Code,
  Database,
  MonitorSmartphone,
  Network,
  Search,
} from "lucide-react";
import { motion } from "motion/react";

const CustomWebDevelopment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 h-90 sm:h-105 rounded-xl p-4 sm:p-6 shadow-lg bg-[#171f32]"
      >
        <img
          src="/img/landing_photo.jpg"
          className="w-full h-full rounded-xl object-cover"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-white"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-10 h-10 bg-[#252d44] flex justify-center items-center rounded-lg"
        >
          <Code size={20} color="white" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold max-w-xl"
        >
          Custom Web Development
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 font-light text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl"
        >
          We build responsive and high-performance websites tailored to your
          business needs. From company profiles to full business websites,
          everything is optimized for speed, SEO, and user experience.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <MonitorSmartphone size={20} color="white" />
              <p className="font-semibold">Responsive Web Design</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Search size={20} color="white" />
              <p className="font-semibold">SEO Optimization</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Database size={20} color="white" />
              <p className="font-semibold">API & Database Integration</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Network size={20} color="white" />
              <p className="font-semibold">Scalable Architecture</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomWebDevelopment;
