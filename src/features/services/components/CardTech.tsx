"use client";

import { ElementType, FC, useEffect, useState } from "react";

type CardProps = {
  title: string;
  Icon: ElementType;
};

const CardTech: FC<CardProps> = ({ Icon, title }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return <></>;
  return (
    <div
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
    </div>
  );
};

export default CardTech;
