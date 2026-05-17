import ContactClient from "@/features/contact/client";
import appName from "@/lib/appName";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${appName} - Contact Us`,
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
