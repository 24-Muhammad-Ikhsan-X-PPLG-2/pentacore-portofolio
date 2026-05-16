"use client";

import ButtonCategory from "./ButtonCategory";
import CardProject from "./CardProject";

const OurWork = () => {
  return (
    <section className="text-white pt-30 pb-16 px-6 bg-[#0b1326] flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
          <div className="w-full lg:max-w-xl">
            <p className="text-[#c0c9fc] font-semibold">OUR WORK</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Precision Engineered{" "}
              <span className="text-[#bbc9ff]">Digital Craftsmanship</span>
            </h1>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 whitespace-nowrap items-center p-2">
              <ButtonCategory isActive text="All Projects" />
              <ButtonCategory text="Fintech" />
              <ButtonCategory text="E-Commerce" />
              <ButtonCategory text="Corporate" />
              <ButtonCategory text="Sports" />
              <ButtonCategory text="UMKM" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CardProject
            category="FINTECH"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, officiis?"
            img="/img/landing_photo.jpg"
            title="Nexus Anjg"
          />
          <CardProject
            category="E-COMMERCE"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, officiis?"
            img="/img/landing_photo.jpg"
            title="Aura Luxury"
          />
          <CardProject
            category="CORPORATE"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, officiis?"
            img="/img/landing_photo.jpg"
            title="Stellar Global"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-[#131b2e] rounded-xl border lg:col-span-2 border-gray-800 shadow-lg overflow-hidden">
            <img
              src="/img/landing_photo.jpg"
              className="h-60 w-full object-cover object-center"
              alt=""
            />
            <div className="p-4">
              <p className="text-[#bbc9ff] font-semibold text-sm">
                DATA VISUALIZATION
              </p>
              <h1 className="text-2xl font-bold mt-2">Omni-Insight Engine</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                minus dolor consequuntur sint ea at, obcaecati dolorum!
                Inventore, recusandae eveniet.
              </p>
            </div>
          </div>

          <div className="bg-[#131b2e] rounded-xl border border-gray-800 shadow-lg overflow-hidden">
            <img
              src="/img/landing_photo.jpg"
              className="h-60 w-full object-cover object-center"
              alt=""
            />
            <div className="p-4">
              <p className="text-[#bbc9ff] font-semibold text-sm">UMKM</p>
              <h1 className="text-2xl font-bold mt-2">Barra Cake</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, quasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
