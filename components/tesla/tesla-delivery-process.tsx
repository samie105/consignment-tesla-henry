"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Truck, 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  BadgeCheck,
  HeartHandshake
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const deliverySteps = [
  {
    step: 1,
    title: "Order Confirmation",
    description: "Receive instant confirmation with your unique tracking number and estimated delivery window.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    step: 2,
    title: "Vehicle Preparation",
    description: "Your Tesla undergoes final inspection and is prepared for secure transport in enclosed carriers.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    step: 3,
    title: "In Transit",
    description: "Track your vehicle in real-time as it journeys to your location via our optimized routes.",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    step: 4,
    title: "White-Glove Delivery",
    description: "Our certified delivery specialists bring your Tesla directly to you with full orientation.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
]

const guarantees = [
  {
    title: "Delivery Guarantee",
    description: "On-time delivery or your transport fees refunded",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: "Zero Damage Promise",
    description: "Full insurance coverage up to vehicle value",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Live GPS Tracking",
    description: "Real-time location updates every 15 minutes",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: "Certified Handlers",
    description: "Tesla-trained delivery specialists",
    icon: <BadgeCheck className="w-5 h-5" />,
  },
]

export default function TeslaDeliveryProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Seamless Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your Tesla Delivery Journey
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            From factory to your doorstep, we ensure every step of your Tesla's journey 
            is handled with precision, care, and complete transparency.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/10 md:-translate-x-px" />

          {deliverySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={cn(
                "relative flex items-start gap-8 mb-12 last:mb-0",
                "md:even:flex-row-reverse"
              )}
            >
              {/* Step Number */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/30 z-10">
                {step.step}
              </div>

              {/* Content Card */}
              <div className={cn(
                "ml-24 md:ml-0 md:w-[calc(50%-4rem)]",
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              )}>
                <div className="p-6 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className={cn(
                    "flex items-center gap-3 mb-3",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {guarantees.map((guarantee, index) => (
            <div
              key={guarantee.title}
              className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {guarantee.icon}
              </div>
              <h4 className="font-semibold mb-2">{guarantee.title}</h4>
              <p className="text-sm text-muted-foreground">{guarantee.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/track"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            <MapPin className="w-5 h-5" />
            Track Your Tesla Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
