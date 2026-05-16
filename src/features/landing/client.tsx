"use client";

import Navbar from "@/components/ui/navbar";
import HeroSection from "./component/HeroSection";
import SpecializedSection from "./component/SpecializedSection";
import RecentPortofolio from "./component/RecentPortofolio";
import Advantage from "./component/Advantage";
import { AtSign, Earth, Sparkles } from "lucide-react";
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
