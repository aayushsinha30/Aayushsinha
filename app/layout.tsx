import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import FloatingDots from "./components/FloatingDots";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BgSvg from "./components/BgSvg";
import { displayFont, monoFont, serifFont } from "./fonts";
import ShutterScreen from "./components/ShutterScreen";
import Script from "next/script";

const geistSans = Spectral({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Aayush Sinha",
  description:
    "Official website of Aayush Sinha, a passionate full-stack developer, dreamer, and builder from India.",
  keywords: "Aayush Sinha, web developer, frontend, Next.js, React, programmer",
  openGraph: {
    title: "Aayush Sinha - Developer & Innovator",
    description:
      "Explore sleek, functional web experiences built with creativity.",
    url: "https://github.com/aayushsinha30",
    siteName: "Aayush Sinha",
    images: [
      {
        url: "/aayush.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Sinha - Developer Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${displayFont.variable} ${serifFont.variable} ${monoFont.variable} antialiased h-full`}
      >
        <main
          id="hero"
          className="   shadow-glow-purple  min-h-screen w-full flex flex-col font-inter relative"
        >
          {children}
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
          <ShutterScreen />
          <Analytics />
          <BgSvg />
          <FloatingDots />
          <ShootingStars />
        </main>
      </body>
    </html>
  );
}
