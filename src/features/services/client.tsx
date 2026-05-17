"use client";

import Navbar from "@/components/ui/navbar";
import HeroSection from "./components/HeroSection";

import About from "./components/About";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Footer from "@/components/ui/Footer";

const ServicesClient = () => {
  return (
    <>
      <Navbar currentPage="services" />
      <HeroSection />
      <About />
      <TechStack />
      <CTA />
      <Footer />
    </>
  );
};

export default ServicesClient;
