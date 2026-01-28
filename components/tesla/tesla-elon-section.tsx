"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Quote, Twitter, Rocket, Zap, Car, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const elonQuotes = [
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    context: "On perseverance in innovation",
  },
  {
    quote: "The first step is to establish that something is possible; then probability will occur.",
    context: "On making the impossible possible",
  },
  {
    quote: "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
    context: "On continuous improvement",
  },
]

const achievements = [
  {
    icon: <Car className="w-6 h-6" />,
    value: "1.8M+",
    label: "Teslas Delivered in 2024",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "50+",
    label: "Countries Served",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "500B+",
    label: "Electric Miles Driven",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    value: "#1",
    label: "EV Manufacturer Worldwide",
    color: "from-purple-500 to-pink-500",
  },
]

export default function TeslaElonSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Leadership & Vision
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The Mind Behind Tesla
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Under Elon Musk's leadership, Tesla has revolutionized the automotive industry 
            and redefined what's possible in sustainable transportation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Elon Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card to-muted p-8 border border-primary/10">
                {/* Profile Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-0.5">
                      <div className="w-full h-full rounded-[14px] overflow-hidden bg-muted flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">EM</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Twitter className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Elon Musk</h3>
                    <p className="text-muted-foreground">CEO & Product Architect</p>
                    <p className="text-sm text-primary mt-2">@elonmusk</p>
                  </div>
                </div>

                {/* Quote Carousel */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <div className="min-h-[150px]">
                    {elonQuotes.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === 0 ? 1 : 0 }}
                        className={cn(
                          "space-y-3",
                          index !== 0 && "hidden"
                        )}
                      >
                        <p className="text-lg italic leading-relaxed">
                          "{item.quote}"
                        </p>
                        <p className="text-sm text-muted-foreground">
                          — {item.context}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Companies */}
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                    Also Leading
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Tesla", "SpaceX", "Neuralink", "The Boring Company", "X"].map((company) => (
                      <span
                        key={company}
                        className="px-3 py-1 text-sm bg-primary/10 rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5" />
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Driving the Electric Revolution</h3>
                <p className="text-muted-foreground">
                  Tesla's mission is to accelerate the world's transition to sustainable energy. 
                  Through innovative electric vehicles and energy solutions, we're making a cleaner 
                  future possible for everyone.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="relative rounded-2xl overflow-hidden p-6 bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      {/* Background Gradient */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                        achievement.color
                      )} />
                      
                      <div className="relative z-10">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br text-white",
                          achievement.color
                        )}>
                          {achievement.icon}
                        </div>
                        <p className="text-3xl font-bold mb-1">{achievement.value}</p>
                        <p className="text-sm text-muted-foreground">{achievement.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Our Mission</p>
                <p className="font-medium">
                  "To accelerate the world's transition to sustainable energy through 
                  increasingly affordable electric vehicles, solar panels, and integrated 
                  renewable energy solutions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
