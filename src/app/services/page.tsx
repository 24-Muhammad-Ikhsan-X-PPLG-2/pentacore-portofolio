import ServicesClient from "@/features/services/client";
import appName from "@/lib/appName";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${appName} - Services`,
};

const Services = () => {
  return <ServicesClient />;
};

export default Services;
