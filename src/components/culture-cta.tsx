"use client"

import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import TechBackground from "@/src/components/tech-background"

export default function CultureCta() {
  return (
    <section className="relative py-20">
      <TechBackground density={0.7} opacity={0.4} color="rgba(139,92,246,0.6)" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-white/80 p-10 backdrop-blur">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto]"
          >
            <div>
              <h3 className="text-2xl font-bold">Come build with us</h3>
              <p className="mt-2 text-muted-foreground">
                We’re a fully remote team with hubs in major cities. If our mission resonates, we’d love to hear from you.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button size="lg">Open roles</Button>
              <Button size="lg" variant="outline">
                Contact us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
