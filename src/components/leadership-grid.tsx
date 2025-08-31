"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Linkedin } from 'lucide-react'
import { motion } from "framer-motion"
import TechBackground from "@/src/components/tech-background"

const leaders = [
  { name: "Dana Moore", role: "Co‑founder & CEO", src: "/images/about/leader-1.png" },
  { name: "Ravi Patel", role: "Co‑founder & CTO", src: "/images/about/leader-2.png" },
  { name: "Sofia Martinez", role: "VP, Product", src: "/images/about/leader-3.png" },
  { name: "Ethan Chen", role: "VP, Security Research", src: "/images/about/leader-4.png" },
]

export default function LeadershipGrid() {
  return (
    <section className="relative py-16">
      <TechBackground density={0.7} opacity={0.35} color="rgba(139,92,246,0.55)" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leadership</h2>
          <p className="mt-2 text-muted-foreground">A team blending security research, product, and MSP experience.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={p.src || "/placeholder.svg"}
                    alt={`${p.name} headshot`}
                    width={640}
                    height={480}
                    className="h-56 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <CardTitle className="text-base">{p.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{p.role}</p>
                  </div>
                  <a
                    href="#"
                    aria-label={`LinkedIn profile of ${p.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
