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
  description: "PentaCore",
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
