"use client";

import Navbar from "@/components/ui/navbar";
import HeroSection from "./component/HeroSection";
import { Code, MonitorSmartphone, PencilRuler } from "lucide-react";
import { ElementType, FC, ReactNode, useEffect, useState } from "react";
import SpecializedSection from "./component/SpecializedSection";

const LandingPageClient = () => {
  return (
    <>
      <Navbar currentPage="home" />
      <HeroSection />
      <SpecializedSection />
    </>
  );
};

export default LandingPageClient;
