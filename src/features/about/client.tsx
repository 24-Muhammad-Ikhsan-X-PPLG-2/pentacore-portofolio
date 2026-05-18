"use client";

import Navbar from "@/components/ui/navbar";
import HeroSection from "./components/hero";
import ExplainSection from "./components/explain";
import CTA from "./components/CTA";
import Footer from "@/components/ui/Footer";

const AboutClient = () => {
  return (
    <>
      <Navbar currentPage="about" />
      <HeroSection />
      <ExplainSection />
      <CTA />
      <Footer />
    </>
  );
};

export default AboutClient;
