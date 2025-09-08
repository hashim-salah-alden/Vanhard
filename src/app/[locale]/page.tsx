"use client";
import { useState } from "react";
import Hero from "@/src/components/hero";
import TrustedBy from "@/src/components/trusted-by";
import FeatureShowcase from "@/src/components/feature-showcase";
import DifferenceAccordion from "@/src/components/difference-accordion";
import ExplorePlatform from "@/src/components/explore-platform";
import Reviews from "@/src/components/reviews";
import CtaBanner from "@/src/components/cta-banner";
import Testimonials from "@/src/components/testimonials";
import PricingSection from "@/src/components/pricing-section";
import ServicesSection from "@/src/components/services-section";
import FullScreenSlider from "../../components/hero/FullScreenSlider";
import LoadingScreen from "../../components/feedback/Loading";
import PinnedSlider from "../../components/hero/PinnedSlider";
import ControlFreedomSection from "../../components/hero/ControlFreedomSection";
import { useTranslations } from "next-intl";
import ProcessWorkflow from "@/src/components/hero/ProcessWorkflow";
import WhatSetsUsApart from "@/src/components/hero/WhatSetsUsApart";
import LogoLoop from "@/src/components/Logoloop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("HomePage");

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <section className="  text-gray-900">
      <FullScreenSlider />
      <PinnedSlider />
      <ControlFreedomSection />
      <ExplorePlatform />
      <ProcessWorkflow />
      {/* <WhatSetsUsApart />
      <Reviews />
      <CtaBanner /> */}
      {/* <Testimonials /> */}
    </section>
  );
}
