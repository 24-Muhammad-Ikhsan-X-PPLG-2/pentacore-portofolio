import PortofolioClient from "@/features/portofolio/client";
import appName from "@/lib/appName";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${appName} - Portofolio`,
};

const Portofolio = () => {
  return <PortofolioClient />;
};

export default Portofolio;
