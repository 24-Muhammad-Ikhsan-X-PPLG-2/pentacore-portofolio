"use client";

import { Code, HardDrive, Server, ShoppingBag, Utensils } from "lucide-react";

const CustomWebDevelopment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-1/2 h-90 sm:h-105 rounded-xl p-4 sm:p-6 shadow-lg bg-[#171f32]">
        <img
          src="/img/landing_photo.jpg"
          className="w-full h-full rounded-xl object-cover"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 text-white">
        <div className="w-10 h-10 bg-[#252d44] flex justify-center items-center rounded-lg">
          <Code size={20} color="white" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold max-w-xl">
          Custom Web Development
        </h1>
        <p className="mt-6 font-light text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          consequuntur, ipsam dolore ullam labore fugiat reprehenderit cumque
          animi id veritatis sapiente, accusantium aut libero illo. Dolores
          deserunt beatae non voluptas!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Server size={20} color="white" />
              <p className="font-semibold">Microservices</p>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={20} color="white" />
              <p className="font-semibold">F&B</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <HardDrive size={20} color="white" />
              <p className="font-semibold">Cloud Architecture</p>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} color="white" />
              <p className="font-semibold">E-Commerce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWebDevelopment;
