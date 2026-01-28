"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Autopilot Delivery",
    description: "Advanced AI-powered routing ensures your Tesla arrives via the most efficient path, reducing delivery time by up to 30%.",
  },
  {
    title: "Climate-Controlled Transport",
    description: "Your vehicle is transported in climate-controlled carriers, maintaining optimal battery health and interior condition.",
  },
  {
    title: "Real-Time GPS Tracking",
    description: "Track your Tesla's journey with precision GPS updates, knowing exactly where your vehicle is at every moment.",
  },
  {
    title: "White-Glove Service",
    description: "Professional handlers ensure your Tesla is treated with the utmost care from pickup to final delivery.",
  },
]

export default function TeslaDisplay() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/Tesla/display-section/Homepage-Features-Desktop.avif"
          alt="Tesla Features Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Full Self-Driving Delivery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              The Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Vehicle Delivery
              </span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl">
              Experience the next generation of automotive delivery. Our advanced logistics 
              network leverages Tesla's cutting-edge technology to deliver your vehicle with 
              unprecedented precision and care.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "p-4 rounded-xl cursor-pointer transition-all duration-500",
                    activeFeature === index
                      ? "bg-primary/20 border-l-4 border-primary"
                      : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"
                  )}
                >
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeFeature === index ? "auto" : 0,
                      opacity: activeFeature === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 text-sm overflow-hidden"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 flex gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: index === activeFeature ? "100%" : index < activeFeature ? "100%" : "0%",
                    }}
                    transition={{
                      duration: index === activeFeature ? 4 : 0.3,
                      ease: "linear",
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="rounded-[22px] overflow-hidden relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  src="/Tesla/display-section/Homepage-FSD-Desktop.mp4"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/Tesla/display-section/Homepage-Features-Desktop.avif"
                />
                
                {/* Play/Pause Overlay */}
                <div
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </div>

                {/* Video Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/80 text-sm">
                    Full Self-Driving technology in action
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              style={{ y }}
              className="absolute -left-8 top-1/4 hidden lg:block"
            >
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-primary/20">
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Delivery Success</p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
              className="absolute -right-8 bottom-1/4 hidden lg:block"
            >
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-primary/20">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Live Tracking</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
