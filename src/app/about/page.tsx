import AboutClient from "@/features/about/client";
import appName from "@/lib/appName";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${appName} - About Us`,
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
