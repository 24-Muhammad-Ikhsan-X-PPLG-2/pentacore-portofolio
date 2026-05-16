"use client";

import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pb-15 flex justify-center gap-12 items-center px-6 text-white bg-[#0b1326] pt-35">
      <div className="">
        <div className="px-3 py-1 w-fit bg-gray-500/50 border border-gray-500/80 rounded-full">
          <p className="text-xs font-bold text-gray-300">
            PRECISSION ENGINERING
          </p>
        </div>
        <h1 className="mt-5 text-7xl font-extrabold w-150">
          <span className="bg-linear-to-r from-white to-[#c0c9fc] text-transparent bg-clip-text">
            Transforming Ideas into
          </span>{" "}
          <span className="text-[#c0c9fc]">Digital Reality</span>
        </h1>
        <p className="mt-7 leading-relaxed w-150">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
          voluptas dolorem tenetur nihil laudantium harum neque doloremque
          veritatis perspiciatis amet, nisi architecto, vitae nobis veniam?
          Veniam, nesciunt alias. Maxime, fuga.
        </p>
        <div className="mt-7 flex items-center gap-5">
          <button className="px-7 hover:-translate-y-1 transition duration-300 rounded-lg font-semibold cursor-pointer py-2.5 bg-[#024ef8] hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)]">
            Get Started
          </button>
          <button className="px-7 rounded-lg flex items-center gap-2 font-semibold cursor-pointer py-2.5 bg-transparent border transition-all duration-300 border-gray-300 group text-gray-300 hover:text-white">
            View Our Work{" "}
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform duration-300"
              size={16}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/img/landing_photo.jpg"
          className="w-150 rounded-lg shadow-xl"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
