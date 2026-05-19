"use client";

import Link from "next/link";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0b1326] text-white px-4 py-10 flex items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative isolate overflow-hidden rounded-4xl border border-white/10 bg-white/5 px-8 py-16 shadow-[0_40px_120px_rgba(2,66,255,0.12)] backdrop-blur-xl max-w-5xl w-full"
      >
        <motion.div
          className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#2563eb]/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 top-1/2 h-56 w-56 rounded-full bg-[#8b5cf6]/20 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div className="flex items-center justify-center gap-4 text-white sm:text-[7rem] text-[5.5rem] font-black leading-none">
            <motion.span
              initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[#7c3aed]"
            >
              4
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-white"
            >
              0
            </motion.span>
            <motion.span
              initial={{ scale: 0.8, rotate: 8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[#2563eb]"
            >
              4
            </motion.span>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.36em] text-[#94a3b8]">
              Page not found
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              We couldn’t find the page you were looking for.
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              It looks like the page you're trying to reach either moved or does
              not exist. Explore the site from the homepage or get in touch if
              you need help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-300 hover:bg-[#1d4ed8] cursor-pointer"
              >
                Back to Home
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="text-sm font-semibold text-[#94a3b8] transition-colors duration-300 hover:text-white"
              >
                Contact Support
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default NotFound;
