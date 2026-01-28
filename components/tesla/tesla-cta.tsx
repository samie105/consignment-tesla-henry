"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const contactMethods = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Call Us",
    description: "Speak with a delivery specialist",
    value: "1-888-TESLA-DEL",
    href: "tel:1-888-837-5233",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    description: "Get a response within 2 hours",
    value: "delivery@tesla.com",
    href: "mailto:delivery@tesla.com",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Live Chat",
    description: "Chat with our team 24/7",
    value: "Start Chat",
    href: "#",
  },
]

export default function TeslaCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Ready to Track?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Tesla is Waiting
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Enter your tracking number to get real-time updates on your vehicle's location, 
              estimated arrival time, and delivery status.
            </p>

            {/* Tracking Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter your tracking number"
                    className="w-full px-6 py-4 rounded-xl bg-card border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Link
                  href="/track"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Track Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                <Clock className="w-4 h-4 inline-block mr-1" />
                Average response time: Under 2 seconds
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-center text-muted-foreground mb-8">
              Need assistance? Our delivery specialists are here to help.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Trust Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/10 text-center"
          >
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Trusted by over 50,000 Tesla owners</span>
              {" · "}99.9% on-time delivery rate{" · "}Full insurance coverage{" · "}24/7 live support
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
