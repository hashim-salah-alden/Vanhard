import type { Metadata } from "next";
import "./global.css";
import { Antonio } from "next/font/google";
import SmoothScrollWrapper from "../../lib/ScrollSmoother";
import Navbar from "@/src/components/common/Navbar";
import MouseTracker from "../../lib/MouseTracker";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/src/components/site-footer";
import FloatingContact from "@/src/components/common/FloatingContact";
import LoadingIntro from "@/src/components/feedback/LoadingIntro";
export const metadata: Metadata = {
  title: "VanHard",
  description: "Created by Hashim",
  generator: "vanhard",
};

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add more weights if needed
  variable: "--font-antonio",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={antonio.variable}>
      <head>
        {/* <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style> */}
      </head>
      <body className="font-antonio scroll-smooth">
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
