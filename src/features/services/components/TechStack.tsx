"use client";

import {
  Box,
  Cloud,
  Database,
  Paintbrush,
  SquareTerminal,
  Type,
} from "lucide-react";
import CardTech from "./CardTech";
import { motion } from "motion/react";

const TechStack = () => {
  return (
    <section className="relative overflow-hidden bg-[#030b1d] py-32 text-white">
      {/* Base Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_40%)] animate-pulse" />

      {/* Vertical Blueprint Lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
        linear-gradient(
          90deg,
          rgba(255,255,255,0.4) 1px,
          transparent 1px
        )
      `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Thin Horizontal Technical Lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
        linear-gradient(
          rgba(255,255,255,0.3) 1px,
          transparent 1px
        )
      `,
          backgroundSize: "100% 80px",
        }}
      />

      {/* Extra Technical Lines */}
      <div className="absolute left-0 top-20 h-px w-full bg-blue-200/10" />
      <div className="absolute left-0 top-24 h-px w-full bg-blue-200/5" />
      <div className="absolute left-0 top-28 h-px w-full bg-blue-200/10" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black tracking-tight"
          >
            Our Tech Stack
          </motion.h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-lg text-white/60"
          >
            We leverage industry-leading technologies to build resilient digital
            infrastructure.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          <CardTech delay={1} Icon={Type} title="TypeScript" />
          <CardTech delay={1.5} Icon={Box} title="React / Next.js" />
          <CardTech delay={2} Icon={Database} title="PostgreSQL" />
          <CardTech delay={2.5} Icon={Cloud} title="AWS / Azure" />
          <CardTech delay={3} Icon={SquareTerminal} title="Node.js" />
          <CardTech delay={3.5} Icon={Paintbrush} title="Tailwind CSS" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
