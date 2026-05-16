"use client";

import Navbar from "@/components/ui/navbar";
import OurWork from "./components/OurWork";
import { Pentagon } from "lucide-react";
import Footer from "@/components/ui/Footer";
import CTA from "./components/CTA";

const PortofolioClient = () => {
  return (
    <>
      <Navbar currentPage="portofolio" />
      <OurWork />
      <CTA />
      <Footer />
    </>
  );
};

export default PortofolioClient;
