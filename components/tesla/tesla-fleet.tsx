"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Zap, Battery, Gauge, Timer } from "lucide-react"
import { cn } from "@/lib/utils"

const teslaVehicles = [
  {
    id: "model-y",
    name: "Model Y",
    tagline: "All-Wheel Drive",
    image: "/Tesla/carousel-section/Homepage-Card-Model-Y-Desktop-US-v2.avif",
    menuImage: "/Tesla/vehicles/Mega-Menu-Vehicles-Model-Y-2-v2.avif",
    specs: {
      range: "330 mi",
      acceleration: "3.5s",
      topSpeed: "135 mph",
      peakPower: "384 hp",
    },
    price: "$44,990",
    deliveryEstimate: "2-4 weeks",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: "model-3",
    name: "Model 3",
    tagline: "Performance",
    image: "/Tesla/carousel-section/Homepage-Card-Model-3-Desktop-US-v2.avif",
    menuImage: "/Tesla/vehicles/Mega-Menu-Vehicles-Model-3-Performance-LHD.avif",
    specs: {
      range: "315 mi",
      acceleration: "3.1s",
      topSpeed: "162 mph",
      peakPower: "510 hp",
    },
    price: "$38,990",
    deliveryEstimate: "1-3 weeks",
    color: "from-red-500/20 to-red-600/10",
  },
  {
    id: "model-s",
    name: "Model S",
    tagline: "Plaid",
    image: "/Tesla/carousel-section/Homepage-Card-Model-S-Desktop-US-v3.avif",
    menuImage: "/Tesla/vehicles/Mega-Menu-Vehicles-Model-S-New.avif",
    specs: {
      range: "396 mi",
      acceleration: "1.99s",
      topSpeed: "200 mph",
      peakPower: "1,020 hp",
    },
    price: "$89,990",
    deliveryEstimate: "4-6 weeks",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    id: "model-x",
    name: "Model X",
    tagline: "Plaid",
    image: "/Tesla/carousel-section/Homepage-Card-Model-X-New-Desktop-US-v4.avif",
    menuImage: "/Tesla/vehicles/Mega-Menu-Vehicles-Model-X-New.avif",
    specs: {
      range: "326 mi",
      acceleration: "2.5s",
      topSpeed: "163 mph",
      peakPower: "1,020 hp",
    },
    price: "$94,990",
    deliveryEstimate: "4-6 weeks",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    id: "cybertruck",
    name: "Cybertruck",
    tagline: "Beast Mode",
    image: "/Tesla/carousel-section/Homepage-Card-Cybertruck-Desktop-US-v3.avif",
    menuImage: "/Tesla/vehicles/Mega-Menu-Vehicles-Cybertruck-1x.avif",
    specs: {
      range: "340+ mi",
      acceleration: "2.6s",
      topSpeed: "130 mph",
      peakPower: "845 hp",
    },
    price: "$79,990",
    deliveryEstimate: "6-8 weeks",
    color: "from-zinc-500/20 to-zinc-600/10",
  },
]

export default function TeslaFleet() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section
      id="tesla-fleet"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
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
            Tesla Fleet
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Choose Your Electric Future
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Premium delivery services for every Tesla model. From the versatile Model Y 
            to the revolutionary Cybertruck, we ensure your vehicle arrives in perfect condition.
          </p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-6 px-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teslaVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[400px] snap-center"
            >
              <div
                className={cn(
                  "relative rounded-3xl overflow-hidden bg-gradient-to-br border border-primary/10",
                  "hover:border-primary/30 transition-all duration-500 group h-full",
                  vehicle.color
                )}
              >
                {/* Vehicle Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 350px, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Delivery Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    Est. {vehicle.deliveryEstimate}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{vehicle.name}</h3>
                      <p className="text-muted-foreground text-sm">{vehicle.tagline}</p>
                    </div>
                    <span className="text-lg font-semibold text-primary">{vehicle.price}</span>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-background/50">
                      <Battery className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Range</p>
                        <p className="text-sm font-semibold">{vehicle.specs.range}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-background/50">
                      <Timer className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">0-60 mph</p>
                        <p className="text-sm font-semibold">{vehicle.specs.acceleration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-background/50">
                      <Gauge className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Top Speed</p>
                        <p className="text-sm font-semibold">{vehicle.specs.topSpeed}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-background/50">
                      <Zap className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Peak Power</p>
                        <p className="text-sm font-semibold">{vehicle.specs.peakPower}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/track"
                    className="block w-full py-3 text-center bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Track Delivery
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
