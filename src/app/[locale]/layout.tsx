import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { Antonio, Almarai } from "next/font/google";

import SmoothScrollWrapper from "../../lib/ScrollSmoother";
import Navbar from "@/src/components/common/Navbar";
import MouseTracker from "../../lib/MouseTracker";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/src/components/site-footer";
import FloatingContact from "@/src/components/common/FloatingContact";

export const metadata: Metadata = {
  title: "VanHard",
  description: "Created by Hashim",
  generator: "vanhard",
  icons: {
    icon: "/favicon.png", // your icon here
  },
};

const magistralBlack = localFont({
  src: "../fonts/Magistral-Black-Regular.ttf", // relative to layout.tsx
  variable: "--font-magistral",
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add more weights if needed
  variable: "--font-antonio",
});

const almarai = Almarai({
  subsets: ["arabic"], // important for Arabic text
  weight: ["400", "700"], // add the weights you need
  variable: "--font-almarai", // optional if you want CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${magistralBlack.variable} ${almarai.variable}`}
    >
      <head>
        {/* <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style> */}
      </head>
      <body className="font-antonio scroll-smooth bg-[#171717]">
        <NextIntlClientProvider>
          {/* <SmoothScrollWrapper> */}
          {/* <LoadingIntro /> */}
          <MouseTracker />
          <Navbar />
          <FloatingContact />
          {children}
          <Footer />
          {/* </SmoothScrollWrapper> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
