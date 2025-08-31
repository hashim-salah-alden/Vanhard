"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";
import AnimatedHeading from "./feedback/AnimatedHeadingGsap";

export default function ExplorePlatform() {
  return (
    <section className="relative py-20 bg-[#111]">
      <TechBackground
        density={0.7}
        opacity={0.45}
        color="rgba(124,58,237,0.6)"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col">
          <span className="text-4xl md:text-7xl text-center font-bold text-slate-200 md:mb-6">
            About <span className="text-primrycolor-light">VANHARD </span>LLC
          </span>

          <span className="text-base text-center md:text-lg text-slate-200">
            VANHARD LLC is a specialist provider of self-hosted digital
            infrastructure installation services. We serve clients who seek
            privacy-first, scalable, and vendor-independent solutions.
          </span>
        </div>

        <Card className="mx-auto mt-8 max-w-5xl overflow-hidden">
          <CardHeader className="items-center">
            <CardTitle className="text-base">Platform Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Image
                src="/images/Hero-slider/slide-4.jpg"
                width={960}
                height={540}
                alt="Platform dashboard"
                className="h-auto w-full rounded-lg border object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline">Take the tour</Button>
              <Button>Book a demo</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
