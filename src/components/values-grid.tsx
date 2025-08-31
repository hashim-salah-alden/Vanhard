"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ShieldCheck, Zap, Users, Lock, Smile, Globe } from 'lucide-react'
import { motion } from "framer-motion"
import TechBackground from "@/src/components/tech-background"

const values = [
  { icon: ShieldCheck, title: "Security first", text: "We design for safety, privacy, and resilience from day one." },
  { icon: Zap, title: "Bias for action", text: "Small, fast iterations compound into meaningful outcomes." },
  { icon: Users, title: "Own the outcome", text: "We obsess over customer value and measurable results." },
  { icon: Lock, title: "Do no harm", text: "Least privilege, secure defaults, and thoughtful automation." },
  { icon: Smile, title: "Empathy", text: "We listen, learn, and build with our partners—not just for them." },
  { icon: Globe, title: "Open by default", text: "Clear docs, APIs, and integrations to meet teams where they are." },
]

export default function ValuesGrid() {
  return (
    <section className="relative py-16">
      <TechBackground density={0.8} opacity={0.4} color="rgba(124,58,237,0.6)" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our values</h2>
          <p className="mt-2 text-muted-foreground">Principles that guide how we build, partner, and support MSPs.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-lg">{v.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{v.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
