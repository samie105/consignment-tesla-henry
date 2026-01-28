"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Zap, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const teslaModels = [
  {
    name: "Model Y",
    tagline: "Versatile. Efficient. Electric.",
    description: "Our most popular vehicle, now with enhanced delivery tracking and white-glove service.",
    image: "/Tesla/hero-section/Homepage-Promo-Meet-Model-Y-Desktop.avif",
    mobileImage: "/Tesla/hero-section/Homepage-Promo-Meet-Model-Y-Mobile.avif",
    price: "From $44,990",
    deliveryTime: "2-4 weeks",
  },
  {
    name: "Model 3",
    tagline: "Affordable. Fast. Sustainable.",
    description: "Experience the future of driving with our best-selling sedan, delivered to your doorstep.",
    image: "/Tesla/hero-section/Homepage-Promo-Meet-Model-3-Desktop.avif",
    mobileImage: "/Tesla/hero-section/Homepage-Promo-Meet-Model-3-Mobile.avif",
    price: "From $38,990",
    deliveryTime: "1-3 weeks",
  },
  {
    name: "Cybertruck",
    tagline: "Built Different. Built Tough.",
    description: "The future of trucks is here. Revolutionary design meets unmatched performance.",
    image: "/Tesla/hero-section/Homepage-Promo-Cybertruck-Desktop-US-v2.avif",
    mobileImage: "/Tesla/hero-section/Homepage-Promo-Cybertruck-Mobile-US-v2.avif",
    price: "From $79,990",
    deliveryTime: "6-8 weeks",
  },
]

export default function TeslaHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teslaModels.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Desktop Image */}
          <Image
            src={teslaModels[currentSlide].image}
            alt={teslaModels[currentSlide].name}
            fill
            priority
            className="hidden md:block object-cover object-center"
            sizes="100vw"
          />
          {/* Mobile Image */}
          <Image
            src={teslaModels[currentSlide].mobileImage}
            alt={teslaModels[currentSlide].name}
            fill
            priority
            className="md:hidden object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top Section - Tesla Logo */}
        <div className="pt-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center md:justify-start"
          >
            <Image
              src="/Tesla/cybertrucktext.svg"
              alt="Tesla"
              width={120}
              height={20}
              className="invert brightness-200"
            />
            <span className="ml-3 text-white/80 text-sm font-medium tracking-wider uppercase">
              Delivery Services
            </span>
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {teslaModels[currentSlide].name}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-white/90 font-light mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {teslaModels[currentSlide].tagline}
                </motion.p>
                <motion.p
                  className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {teslaModels[currentSlide].description}
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                  className="flex flex-wrap justify-center gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2 text-white/80">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm">{teslaModels[currentSlide].price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Est. Delivery: {teslaModels[currentSlide].deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">Full Insurance Coverage</span>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Link
                    href="/track"
                    className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Track Your Delivery
                  </Link>
                  <Link
                    href="#tesla-fleet"
                    className="px-8 py-3 bg-transparent border border-white/50 text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
                  >
                    Explore Fleet
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section - Slide Indicators & Scroll */}
        <div className="pb-8 px-6">
          <div className="flex flex-col items-center gap-6">
            {/* Slide Indicators */}
            <div className="flex gap-3">
              {teslaModels.map((model, index) => (
                <button
                  key={model.name}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    index === currentSlide
                      ? "w-12 bg-white"
                      : "w-6 bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Go to ${model.name} slide`}
                />
              ))}
            </div>

            {/* Scroll Indicator */}
            <motion.button
              onClick={scrollToContent}
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-xs uppercase tracking-wider mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
