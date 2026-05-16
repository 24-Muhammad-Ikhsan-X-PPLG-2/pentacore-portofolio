"use client";

import Navbar from "@/components/ui/navbar";
import HeroSection from "./components/HeroSection";
import SpecializedSection from "./components/SpecializedSection";
import RecentPortofolio from "./components/RecentPortofolio";
import Advantage from "./components/Advantage";
import Footer from "@/components/ui/Footer";

const LandingPageClient = () => {
  return (
    <>
      <Navbar currentPage="home" />
      <HeroSection />
      <SpecializedSection />
      <RecentPortofolio />
      <Advantage />
      <Footer />
    </>
  );
};

export default LandingPageClient;
