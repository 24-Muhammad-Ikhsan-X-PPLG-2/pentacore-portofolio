import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import appName from "@/lib/appName";

import "lenis/dist/lenis.css";
import LenisProvider from "@/providers/LenisProvider";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appName,
  description:
    "We are a professional web development and web design agency that builds modern, responsive, and SEO-optimized websites for UMKM, businesses, and educational institutions. We focus on creating fast, user-friendly, and high-performing websites through web development, UI/UX design, and optimization to help clients grow their digital presence, increase visibility, and convert more customers online.",
  openGraph: {
    title: appName,
    description:
      "We are a professional web development and web design agency that builds modern, responsive, and SEO-optimized websites for UMKM, businesses, and educational institutions. We focus on creating fast, user-friendly, and high-performing websites through web development, UI/UX design, and optimization to help clients grow their digital presence, increase visibility, and convert more customers online.",
    url: "https://pentacore-labs.vercel.app/",
    siteName: "Pentacore Labs",
    images: [
      {
        url: "/banner.webp",
        width: 1200,
        height: 630,
        alt: "Pentacore Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${InterFont.variable} ${InterFont.className} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        className="min-h-full flex flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
