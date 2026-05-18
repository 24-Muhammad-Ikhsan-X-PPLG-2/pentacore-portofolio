"use client";

import CustomWebDevelopment from "./CustomWebDevelopment";
import UiUxDesign from "./UiUxDesign";
import AppDevelopment from "./AppDevelopment";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-10 py-10 bg-[#131b2e] overflow-hidden">
      <CustomWebDevelopment />
      <UiUxDesign />
      <AppDevelopment />
    </section>
  );
};

export default About;
