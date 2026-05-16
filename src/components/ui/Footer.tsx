"use client";

import { AtSign, Earth, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 text-white bg-[#070e20] flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center">
          <div className="w-full lg:w-1/3">
            <h1 className="text-3xl sm:text-4xl font-black leading-tight">
              Pentacore Labs
            </h1>
            <p className="mt-4 text-sm sm:text-base max-w-xl text-gray-200">
              Precission Engineered Digital Solutions for the modern enterprise
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Earth size={24} color="white" />
              <AtSign size={24} color="white" />
              <Sparkles size={24} color="white" />
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c0c9fc] text-sm font-semibold">SERVICES</h2>
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>App Development</p>
              <p>Cloud Consulting</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c0c9fc] text-sm font-semibold">COMPANY</h2>
              <p>Portfolio</p>
              <p>Case Studies</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c0c9fc] text-sm font-semibold">LEGAL</h2>
              <p>Privacy Policy</p>
              <p>Terms Of Services</p>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm sm:text-base">
            &copy; 2026 Pentacore Labs. Precission Engineered Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
