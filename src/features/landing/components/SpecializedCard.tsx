"use client";

import { ElementType, FC } from "react";
import { motion } from "motion/react";

type SpecializedCardProps = {
  delay: number;
  Icon: any;
  title: string;
  desc: string;
};

const SpecializedCard: FC<SpecializedCardProps> = ({
  desc,
  Icon,
  title,
  delay,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 * delay }}
      viewport={{ once: true }}
      className="bg-[#171f32] p-5 w-full max-w-90 rounded-lg shadow-xl"
      suppressHydrationWarning
    >
      <div className="bg-[#252c48] w-fit p-2 rounded-lg">
        <Icon size={20} color="#c0c9fc" />
      </div>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold">{title}</h1>
      <p className="mt-4 leading-relaxed text-gray-300 text-sm sm:text-base">
        {desc}
      </p>
    </motion.div>
  );
};

export default SpecializedCard;
