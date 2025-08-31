"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden h-screen py-16 md:py-24 bg-[url(/about-arc.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <TechBackground density={1} opacity={0.5} color="#111" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-slate-100">
            About us
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Building a safer, simpler future for MSPs
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            We’re a product and research team focused on unified detection and
            response. Our mission is to put MSPs in control with a platform that
            reduces noise, standardizes response, and proves value to clients.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button>Our story</Button>
            <Button variant="outline">Meet the team</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border bg-white/60 p-3 shadow-lg backdrop-blur">
            <Image
              src="/images/about/hero-collage.png"
              width={900}
              height={620}
              alt="Our team collaborating in the lab"
              className="h-auto w-full rounded-xl border object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
