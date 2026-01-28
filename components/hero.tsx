"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, Package, Truck, Plane, Ship, Clock, Zap, Car, Battery } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { TextReveal, Meteors } from "@/lib/aceternity-ui"
import { useTheme } from "next-themes"

export default function Hero() {
  const [tracking_number, settracking_number] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useTheme()

  const slides = [
    {
      title: "Tesla Delivery Excellence",
      description:
        "Premium white-glove delivery service for your Tesla. From factory to doorstep, we ensure your electric vehicle arrives in perfect condition.",
      image: "/Tesla/hero-section/Homepage-Promo-Meet-Model-Y-Desktop.avif",
    },
    {
      title: "Track Your Tesla Journey",
      description:
        "Real-time GPS tracking, climate-controlled transport, and 24/7 updates. Know exactly where your Tesla is at every moment.",
      image: "/Tesla/hero-section/Homepage-Promo-Meet-Model-3-Desktop.avif",
    },
    {
      title: "Cybertruck Delivery Specialists",
      description: 
        "The future has arrived. Our specialized team handles the revolutionary Cybertruck with precision and care.",
      image: "/Tesla/hero-section/Homepage-Promo-Cybertruck-Desktop-US-v2.avif",
    },
  ]

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!tracking_number.trim()) return

    // Redirect to the tracking page with the tracking number as a query parameter
    window.location.href = `/track?tracking=${encodeURIComponent(tracking_number.trim())}`

    // Close the dialog
    setIsDialogOpen(false)
  }

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Set loaded state for animations
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background images with transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 -z-10",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none z-0" />

      {/* Meteors animation */}
      <Meteors number={15} className="opacity-30 pointer-events-none z-10" />

      {/* Floating Tesla-themed icons */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Car className="absolute h-10 w-10 text-white/20 animate-float1" style={{ top: "15%", left: "10%" }} />
        <Zap className="absolute h-12 w-12 text-primary/30 animate-float2" style={{ top: "60%", left: "15%" }} />
        <Battery className="absolute h-10 w-10 text-white/25 animate-float3" style={{ top: "25%", right: "15%" }} />
        <Truck className="absolute h-14 w-14 text-white/20 animate-float4" style={{ bottom: "20%", right: "10%" }} />
        <Clock className="absolute h-8 w-8 text-primary/30 animate-float5" style={{ top: "40%", left: "50%" }} />
        <Package className="absolute h-6 w-6 text-white/20 animate-float6" style={{ bottom: "30%", left: "30%" }} />
      </div>

      <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center space-y-6">
            {/* Tesla Logo Badge */}
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full w-fit border border-white/20",
              isLoaded ? "animate-fadeIn" : "opacity-0"
            )}>
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-white/90 text-sm font-medium">Official Tesla Delivery Partner</span>
            </div>

            <div className="space-y-4">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-700 ease-in-out",
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 absolute pointer-events-none",
                    isLoaded && index === 0 && currentSlide === 0 ? "animate-fadeIn" : "",
                  )}
                >
                  <TextReveal
                    className={cn(
                      "text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-md",
                      index !== currentSlide && "opacity-0",
                    )}
                  >
                    {slide.title}
                  </TextReveal>
                  <TextReveal
                    className={cn(
                      "max-w-[600px] text-white/90 md:text-xl mt-4 drop-shadow",
                      index !== currentSlide && "opacity-0",
                    )}
                  >
                    {slide.description}
                  </TextReveal>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className={cn(
              "flex flex-wrap gap-6 text-white/80",
              isLoaded ? "animate-fadeIn delay-300" : "opacity-0"
            )}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm">99.9% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm">Climate-Controlled Transport</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm">Full Insurance Coverage</span>
              </div>
            </div>

            <div className="flex flex-row gap-2 sm:gap-4">
              <Link
                href="/track"
                className={cn(
                  "inline-flex h-12 items-center justify-center border-none bg-primary text-white rounded-md px-8 text-sm font-medium hover:bg-primary/90 transition-all",
                  isLoaded ? "animate-slideInFromBottom delay-500" : "opacity-0",
                )}
              >
                Track Your Tesla <Search className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className={cn(
                  "inline-flex h-12 items-center justify-center border border-white/30 bg-white/10 backdrop-blur-sm text-white rounded-md px-8 text-sm font-medium hover:bg-white/20 transition-all",
                  isLoaded ? "animate-slideInFromBottom delay-700" : "opacity-0",
                )}
              >
                View Fleet
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="h-32 w-32 text-white opacity-20 animate-pulse" />
              </div>
              <div className="absolute -left-4 top-1/4 h-20 w-20 rounded-full bg-primary/20 animate-pulse" />
              <div className="absolute -right-4 top-1/2 h-16 w-16 rounded-full bg-primary/30 animate-pulse delay-300" />
              <div className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full bg-primary/10 animate-pulse delay-700" />
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                index === currentSlide ? "bg-white w-12" : "bg-white/30 w-6 hover:bg-white/50",
              )}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
