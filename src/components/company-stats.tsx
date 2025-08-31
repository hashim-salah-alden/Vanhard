"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";

const stats = [
  { label: "Tenants protected", value: "3,500+" },
  { label: "Threats auto‑resolved/month", value: "120k+" },
  { label: "Avg. noise reduction", value: "78%" },
  { label: "Countries served", value: "26" },
];

export default function CompanyStats() {
  return (
    <section className="relative py-14">
      <TechBackground
        density={0.9}
        opacity={0.45}
        color="rgba(139,92,246,0.6)"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="bg-white/70">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
