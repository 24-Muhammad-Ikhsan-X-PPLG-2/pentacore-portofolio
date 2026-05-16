"use client";

import React, { useEffect, useState } from "react";
import SpecializedCard from "./SpecializedCard";
import { Code, MonitorSmartphone, PencilRuler } from "lucide-react";

const SpecializedSection = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return <></>;
  return (
    <section className="bg-[#070e20] text-white px-6 py-32 flex flex-col items-center justify-center">
      <div className="">
        <h3 className="text-sm font-bold leading-tight text-[#c0c9fc]">
          OUR EXPERTISE
        </h3>
        <h1 className="mt-4 text-5xl font-black leading-tight bg-linear-to-r from-white to-[#c0c9fc] bg-clip-text text-transparent">
          Specialized Tech Services
        </h1>
        <div className="w-30 h-1 bg-[#c0c9fc] mt-4"></div>
        <div className="flex flex-wrap justify-center gap-5 items-center mt-8">
          <SpecializedCard
            Icon={Code}
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              architecto, illum officia quisquam dolorem unde?"
            title="Web Development"
          />
          <SpecializedCard
            Icon={PencilRuler}
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              architecto, illum officia quisquam dolorem unde?"
            title="UI/UX Design"
          />
          <SpecializedCard
            Icon={MonitorSmartphone}
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              architecto, illum officia quisquam dolorem unde?"
            title="App Development"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecializedSection;
