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
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-20 bg-[#171717]">
      <TechBackground density={0.6} opacity={0.55} color="#005b95" />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-300 tracking-tight sm:text-4xl">
            Our journey
          </h2>
          <p className="mt-2 text-slate-300 text-muted-foreground">
            Key milestones on the path to a unified security platform.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Vertical center line */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent"
          />

          <div className="space-y-16">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const milestoneYear = parseInt(m.date.toString().slice(0, 4));
              const isCurrentYear = milestoneYear === currentYear;

              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative grid grid-cols-9 gap-4 "
                >
                  {/* Date */}
                  <div
                    className={`col-span-4 ${
                      isLeft ? "text-right order-1" : "text-left order-3"
                    } flex flex-col justify-center`}
                  >
                    <span
                      className={`font-medium transition-colors text-xl ${
                        isCurrentYear
                          ? "text-cyan-600  font-bold"
                          : "text-blue-400"
                      }`}
                    >
                      {m.date}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="col-span-1 flex items-center justify-center order-2">
                    <div className="relative">
                      <div
                        className={`h-4 w-4 rounded-full border-2 transition-all  ${
                          isCurrentYear
                            ? "border-blue-300 bg-pink-100 shadow-lg shadow-pink-200"
                            : "border-primrycolor-light bg-white"
                        }`}
                      />
                      {isCurrentYear && (
                        <div className="absolute inset-0 animate-ping rounded-full border-2 border-pink-300"></div>
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`col-span-4  ${
                      isLeft ? "order-3 text-left" : "order-1 text-right"
                    }`}
                  >
                    <Card
                      className={`rounded-lg border-1 border-primrycolor-light md:p-10 shadow-md transition-colors ${
                        isCurrentYear
                          ? "border-2 bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light"
                          : "bg-white/10 backdrop-blur-sm   border border-white/20"
                      }`}
                    >
                      <CardContent className="md:p-6">
                        <h3
                          className={`text-lg font-semibold ${
                            isCurrentYear ? "text-primrycolor-light" : "text-slate-300"
                          }`}
                        >
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-400">{m.detail}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
