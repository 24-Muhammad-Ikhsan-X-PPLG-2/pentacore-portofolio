"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "motion/react";

type CardProps = {
  title: string;
  Icon: any;
  delay?: number;
  isVisible: boolean;
};

const CardTech: FC<CardProps> = ({ Icon, title, delay = 1, isVisible }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return <></>;
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.5 * delay }}
      className="
            group
            rounded-2xl
            border
            border-white/5
            bg-white/3
            p-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-blue-400/20
            hover:bg-blue-500/5
          "
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="mb-4 h-10 w-10 rounded-xl bg-blue-400/10 flex justify-center items-center">
          <Icon size={18} color="white" />
        </div>

        <p className="text-sm font-medium text-white/80">{title}</p>
      </div>
    </motion.div>
  );
};

export default CardTech;
