"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  Plane,
  Ship,
  Package,
  Clock,
  Shield,
  Warehouse,
  Globe,
  Search,
  Car,
  Zap,
  Battery,
  MapPin,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { TextReveal } from "@/lib/aceternity-ui"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Tesla Vehicle Delivery",
    description: "Premium white-glove delivery service for all Tesla models. From Model 3 to Cybertruck, we deliver excellence.",
    features: [
      {
        icon: <Car className="h-8 w-8" />,
        title: "All Models",
        description: "Model 3, Y, S, X, and Cybertruck delivery specialists.",
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: "Full Insurance",
        description: "Complete coverage up to vehicle value during transport.",
      },
      {
        icon: <Zap className="h-8 w-8" />,
        title: "Battery Ready",
        description: "Vehicles delivered charged and ready to drive.",
      },
      {
        icon: <MapPin className="h-8 w-8" />,
        title: "GPS Tracking",
        description: "Real-time location updates every 15 minutes.",
      },
    ],
    ctas: [
      {
        label: "Track Delivery",
        href: "/track",
        primary: true,
      },
      {
        label: "Learn More",
        href: "#about",
        primary: false,
      },
    ],
  },
  {
    title: "Premium Transport Options",
    description: "Climate-controlled, enclosed carriers ensure your Tesla arrives in showroom condition.",
    features: [
      {
        icon: <Truck className="h-8 w-8" />,
        title: "Enclosed Carriers",
        description: "Protected transport in climate-controlled trailers.",
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: "Express Delivery",
        description: "Priority handling for time-sensitive deliveries.",
      },
      {
        icon: <Battery className="h-8 w-8" />,
        title: "Battery Care",
        description: "Optimal temperature maintained during transit.",
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Nationwide",
        description: "Delivery to all 50 states and beyond.",
      },
    ],
    ctas: [
      {
        label: "Track Delivery",
        href: "/track",
        primary: true,
      },
      {
        label: "Contact Us",
        href: "#contact",
        primary: false,
      },
    ],
  },
  {
    title: "Delivery Experience",
    description: "Our certified Tesla delivery specialists ensure a seamless handoff with full vehicle orientation.",
    features: [
      {
        icon: <Package className="h-8 w-8" />,
        title: "White Glove",
        description: "Professional handlers trained by Tesla standards.",
      },
      {
        icon: <Warehouse className="h-8 w-8" />,
        title: "Secure Storage",
        description: "Climate-controlled facilities at every hub.",
      },
      {
        icon: <Search className="h-8 w-8" />,
        title: "Inspection",
        description: "Multi-point quality check before delivery.",
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: "On-Time Guarantee",
        description: "99.9% on-time delivery rate or fees refunded.",
      },
    ],
    ctas: [
      {
        label: "Track Delivery",
        href: "/track",
        primary: true,
      },
      {
        label: "View FAQ",
        href: "#faq",
        primary: false,
      },
    ],
  },
]

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { theme } = useTheme()

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % services.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating, services.length])

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating, services.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6 overflow-x-hidden">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="text-left order-1 md:order-1">
                        <TextReveal
                          className={cn(
                            "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4",
                            index === currentSlide ? "" : "opacity-0 -translate-x-12",
                          )}
                        >
                          {service.title}
                        </TextReveal>
                        <TextReveal
                          className={cn(
                            "text-muted-foreground md:text-xl mb-6",
                            index === currentSlide ? "delay-200" : "opacity-0 -translate-x-12",
                          )}
                        >
                          {service.description}
                        </TextReveal>
                        <div
                          className={cn(
                            "flex flex-row gap-3 mt-6",
                            "transform transition-all duration-700 ease-in-out",
                            index === currentSlide ? "opacity-100" : "opacity-0",
                          )}
                        >
                          {" "}
                          <Link href="#shipping">
                            <Button
                              variant="ghost"
                              className={cn(
                                "group transform bg-muted-foreground/5 border-foreground/10 transition-all duration-500 ease-in-out",
                                "hover:text-foreground border border-foreground/20 ",
                                index === currentSlide
                                  ? "translate-y-0 opacity-100 delay-400"
                                  : "translate-y-8 opacity-0",
                              )}
                            >
                              Ship Now
                              <Package className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          <Link href="/track">
                            <Button
                              variant="default"
                              className={cn(
                                "group transform transition-all duration-500 ease-in-out",
                                "text-white",
                                index === currentSlide
                                  ? "translate-y-0 opacity-100 delay-600"
                                  : "translate-y-8 opacity-0",
                              )}
                            >
                              Track Now
                              <Search className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 order-2 md:order-2">
                        {service.features.map((feature, featureIndex) => (
                          <Card
                            key={featureIndex}
                            className={cn(
                              "p-4 space-y-2 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 bg-primary/5",
                              "transform transition-all duration-700 ease-in-out",
                              index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
                              featureIndex === 0
                                ? "delay-300"
                                : featureIndex === 1
                                  ? "delay-500"
                                  : featureIndex === 2
                                    ? "delay-700"
                                    : "delay-900",
                            )}
                          >
                            <div className="text-primary">{feature.icon}</div>
                            <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                                {feature.description.split(" ").slice(0, 5).join(" ")}...
                              </p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4",
              "hidden md:flex",
              "hover:bg-background/80 hover:text-primary",
            )}
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4",
              "hidden md:flex",
              "hover:bg-background/80 hover:text-primary",
            )}
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next slide</span>
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentSlide ? "bg-primary w-6" : "bg-primary/30",
                )}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
