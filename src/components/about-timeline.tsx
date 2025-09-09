"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";

const milestones = [
  {
    date: "2023",
    title: "Company founded",
    detail: "Started with a mission to simplify cybersecurity for MSPs.",
  },
  {
    date: "2024",
    title: "MDR launched",
    detail: "Introduced AI‑assisted, human‑led MDR with runbook automation.",
  },
  {
    date: "2025",
    title: "Multi‑tenant reporting",
    detail: "Shipped cross‑client reports and compliance evidence.",
  },
  {
    date: "2026",
    title: "Global expansion",
    detail: "Serving partners in 20+ countries with local support.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="relative py-20 bg-[#171717]">
      <TechBackground
        density={0.6}
        opacity={0.55}
        color="#005b95"
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our journey
          </h2>
          <p className="mt-2 text-muted-foreground">
            Key milestones on the path to a unified security platform.
          </p>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-3xl gap-6">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-300 to-transparent sm:left-1/2"
          />
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative grid items-start gap-4 sm:grid-cols-9"
            >
              <div className="sm:col-span-4 sm:text-right">
                <div className="text-sm font-medium text-purple-700">
                  {m.date}
                </div>
              </div>
              <div className="sm:col-span-1 sm:flex sm:justify-center">
                <div className="mt-1 h-3 w-3 rounded-full border-2 border-purple-600 bg-white" />
              </div>
              <div className="sm:col-span-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="font-medium">{m.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {m.detail}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
