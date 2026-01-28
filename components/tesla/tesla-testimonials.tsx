"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight, Verified } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Model Y Owner",
    location: "San Francisco, CA",
    avatar: "SM",
    rating: 5,
    date: "January 2026",
    vehicle: "Model Y Long Range",
    quote: "The delivery experience was absolutely flawless. I tracked my Model Y from the factory all the way to my driveway. The delivery specialist even gave me a full walkthrough of all the features. Tesla truly understands customer experience.",
    deliveryTime: "Delivered 3 days early",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cybertruck Owner",
    location: "Austin, TX",
    avatar: "MC",
    rating: 5,
    date: "December 2025",
    vehicle: "Cybertruck Tri-Motor",
    quote: "Being one of the first Cybertruck owners was already exciting, but the delivery made it even more special. The white-glove service was incredible - they even had the truck charged and ready for my first drive. Elon's vision for customer service is unmatched.",
    deliveryTime: "Delivered on schedule",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Model S Owner",
    location: "Miami, FL",
    avatar: "ER",
    rating: 5,
    date: "January 2026",
    vehicle: "Model S Plaid",
    quote: "From ordering to delivery, everything was seamless. The real-time GPS tracking gave me peace of mind during the entire journey. When my Model S Plaid arrived, it was in pristine condition. Worth every penny.",
    deliveryTime: "Delivered 5 days early",
    verified: true,
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Model 3 Owner",
    location: "Seattle, WA",
    avatar: "JT",
    rating: 5,
    date: "December 2025",
    vehicle: "Model 3 Performance",
    quote: "As a repeat Tesla customer, I can say the delivery experience keeps getting better. The tracking system is incredibly accurate, and the delivery team was professional and thorough. This is how car buying should be.",
    deliveryTime: "Delivered 2 days early",
    verified: true,
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Model X Owner",
    location: "Los Angeles, CA",
    avatar: "LP",
    rating: 5,
    date: "January 2026",
    vehicle: "Model X Plaid",
    quote: "The falcon wing doors on my Model X arrived in perfect condition. The enclosed transport and climate control during shipping meant my new vehicle was showroom fresh. Tesla delivery sets the standard for the industry.",
    deliveryTime: "Delivered on schedule",
    verified: true,
  },
]

export default function TeslaTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Loved by Tesla Owners
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Hear from Tesla owners who experienced 
            our premium delivery service firsthand.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Quote Icon */}
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-white/20"
                        )}
                      />
                    ))}
                    <span className="ml-2 text-sm text-white/60">
                      {testimonials[activeIndex].date}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-lg font-bold">
                        {testimonials[activeIndex].avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                          {testimonials[activeIndex].verified && (
                            <Verified className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-white/60">{testimonials[activeIndex].role}</p>
                        <p className="text-sm text-white/40">{testimonials[activeIndex].location}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-white/60">{testimonials[activeIndex].vehicle}</p>
                      <p className="text-sm text-primary font-medium">
                        {testimonials[activeIndex].deliveryTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "50,000+", label: "Teslas Delivered" },
            { value: "4.9/5", label: "Customer Rating" },
            { value: "99.9%", label: "On-Time Delivery" },
            { value: "0", label: "Damage Claims" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
