"use client";

import { MoveRight, Smartphone } from "lucide-react";

const AppDevelopment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mt-12 px-4 sm:px-6 lg:px-0">
      <div className="w-full md:w-1/2 h-72 sm:h-96 rounded-xl p-4 sm:p-6 shadow-lg bg-[#171f32]">
        <img
          src="/img/landing_photo.jpg"
          className="w-full h-full rounded-xl object-cover"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 text-white">
        <div className="w-10 h-10 bg-[#252d44] flex justify-center items-center rounded-lg">
          <Smartphone size={20} color="white" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold max-w-xl">
          Mobile App Development
        </h1>
        <p className="mt-6 font-light text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          consequuntur, ipsam dolore ullam labore fugiat reprehenderit cumque
          animi id veritatis sapiente, accusantium aut libero illo. Dolores
          deserunt beatae non voluptas!
        </p>
        <ul className="list-disc mt-6 pl-5 flex flex-col gap-2">
          <li>Biometric Authentication Integration</li>
          <li>Real-time Data Synchronization</li>
          <li>Push Notification Strategies</li>
        </ul>
        <a
          href="#"
          className="flex items-center gap-2 mt-4 text-[#c0c9fc] hover:underline"
        >
          Explore our mobile process <MoveRight size={20} color="white" />
        </a>
      </div>
    </div>
  );
};

export default AppDevelopment;
