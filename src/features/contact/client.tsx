"use client";

import Navbar from "@/components/ui/navbar";
import { Mail, MapPin, Share2 } from "lucide-react";
import CardContact from "./components/CardContact";
import Footer from "@/components/ui/Footer";

const ContactClient = () => {
  return (
    <>
      <Navbar currentPage="contact" />
      <section className="min-h-screen bg-[#0b1326] text-white px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-12">
        <div className="max-w-2xl">
          <div className="inline-flex px-3 py-1 bg-gray-500/50 border border-gray-500/80 rounded-full">
            <p className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
              CONTACT US
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 leading-tight">
            Let's Engineer Your{" "}
            <span className="text-[#004ff6]">Next Breakthrough.</span>
          </h1>
          <p className="mt-4 font-light max-w-xl text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam
            porro eveniet amet, repudiandae accusantium fugit error minima
            doloremque, ipsam, odit quisquam non cupiditate molestiae ratione
            temporibus vitae. Alias, aliquam!
          </p>
        </div>
        <div className="mt-16 lg:mt-24 mb-20 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-6 ">
            <div className="w-full lg:flex-1">
              <CardContact />
            </div>
            <div className="w-full lg:w-125 bg-blue-500 rounded-lg relative overflow-hidden min-h-90 sm:min-h-95 h-fit">
              <div className="absolute inset-0 left-1 bg-[#131b2d] rounded-lg p-5 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  Contact Information
                </h1>
                <div className="mt-6 flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin size={22} color="#004ff6" />
                    <div className="flex-1">
                      <p className="text-sm font-light text-[#004ff6]">
                        HQ Office
                      </p>
                      <p className="mt-1 text-sm leading-relaxed">
                        Jl. Pd. Salak No.109, Pd. Benda, Kec. Pamulang, Kota
                        Tangerang Selatan, Banten 15416, Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Mail size={22} color="#004ff6" />
                    <div className="flex-1">
                      <p className="text-sm font-light text-[#004ff6]">
                        Inquiries
                      </p>
                      <p className="mt-1 text-sm leading-relaxed">
                        pentacorelabs@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Share2 size={22} color="#004ff6" />
                    <div className="flex-1">
                      <p className="text-sm font-light text-[#004ff6]">
                        Media Social
                      </p>
                      <p className="mt-1 text-sm leading-relaxed flex flex-wrap gap-2 text-gray-200">
                        <a
                          href="https://www.instagram.com/pentacore.labs"
                          target="_blank"
                          className="hover:underline"
                        >
                          Instagram
                        </a>
                        <span className="text-gray-700">/</span>
                        <a
                          href="https://github.com/pentacorelabs"
                          target="_blank"
                          className="hover:underline"
                        >
                          GitHub
                        </a>
                        <span className="text-gray-700">/</span>
                        <a
                          href="https://x.com/PENTACORE_LABS"
                          target="_blank"
                          className="hover:underline"
                        >
                          X (Twitter)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactClient;
