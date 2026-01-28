"use client"

import { Timeline } from "@/components/ui/timeline"
import { Package, Clock, Shield, Truck, Plane, Ship, Warehouse, Globe, Car, Zap, Battery, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SpecializedServices() {
  const timelineData = [
    {
      title: "Order & Confirmation",
      content: (
        <div className="bg-card dark:bg-card/80 rounded-xl p-6 shadow-sm border border-primary/20 mb-8 dark:text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-2 md:mb-0">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Tesla Order Processing</h4>
              <p className="text-muted-foreground dark:text-gray-300 text-center md:text-left">
                Once your Tesla order is confirmed, our team begins preparing your personalized delivery experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <h5 className="text-sm font-medium mb-2">What happens:</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Unique tracking number assigned
                </li>
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Estimated delivery window confirmed
                </li>
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Dedicated delivery specialist assigned
                </li>
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  SMS & email notifications enabled
                </li>
              </ul>
            </div>
            <div className="relative h-40 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/Tesla/carousel-section/Homepage-Card-Model-3-Desktop-US-v2.avif"
                alt="Tesla Order"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Climate-Controlled Transport",
      content: (
        <div className="bg-card dark:bg-card/80 rounded-xl p-6 shadow-sm border border-primary/20 mb-8 dark:text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-2 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Premium Enclosed Transport</h4>
              <p className="text-muted-foreground dark:text-gray-300 text-center md:text-left">
                Your Tesla travels in a climate-controlled enclosed carrier, protecting it from weather, road debris, 
                and maintaining optimal battery temperature.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="relative h-40 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/Tesla/carousel-section/Homepage-Card-Model-S-Desktop-US-v3.avif"
                alt="Climate Controlled Transport"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">Protection Features:</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Fully enclosed premium carriers
                </li>
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  GPS tracking every 15 minutes
                </li>
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Battery temperature monitoring
                </li>
                <li className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Full insurance up to vehicle value
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Real-Time Tracking",
      content: (
        <div className="bg-card dark:bg-card/80 rounded-xl p-6 shadow-sm border border-primary/20 mb-8 dark:text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-2 md:mb-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Track Your Tesla's Journey</h4>
              <p className="text-muted-foreground dark:text-gray-300 text-center md:text-left">
                Watch your Tesla's journey from factory to your doorstep with our advanced GPS tracking system. 
                Know exactly where your vehicle is at any moment.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="md:col-span-2">
              <h5 className="text-sm font-medium mb-2">Tracking Features:</h5>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Live GPS location
                </div>
                <div className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  ETA updates
                </div>
                <div className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Route visualization
                </div>
                <div className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  SMS notifications
                </div>
                <div className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Checkpoint alerts
                </div>
                <div className="flex items-center gap-2 text-sm dark:text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Photo documentation
                </div>
              </div>
            </div>
            <div className="relative h-40 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/Tesla/display-section/Homepage-Features-Desktop.avif"
                alt="Real-Time Tracking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "White-Glove Delivery",
      content: (
        <div className="bg-card dark:bg-card/80 rounded-xl p-6 shadow-sm border border-primary/20 mb-8 dark:text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-2 md:mb-0">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Premium Delivery Experience</h4>
              <p className="text-muted-foreground dark:text-gray-300 text-center md:text-left">
                Our Tesla-trained delivery specialists ensure a seamless handoff with complete vehicle orientation 
                and documentation.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/Tesla/carousel-section/Homepage-Card-Cybertruck-Desktop-US-v3.avif"
                alt="White Glove Delivery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Your Tesla arrives in showroom condition</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-xs text-muted-foreground dark:text-gray-300">Teslas Delivered</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">50</p>
                <p className="text-xs text-muted-foreground dark:text-gray-300">States Covered</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground dark:text-gray-300">Live Support</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">99.9%</p>
                <p className="text-xs text-muted-foreground dark:text-gray-300">On-time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Satisfaction Guaranteed",
      content: (
        <div className="bg-card dark:bg-card/80 rounded-xl p-6 shadow-sm border border-primary/20 mb-8 dark:text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-2 md:mb-0">
              <Battery className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Ready to Drive</h4>
              <p className="text-muted-foreground dark:text-gray-300 text-center md:text-left">
                Your Tesla arrives charged, inspected, and ready for your first drive. We ensure every detail is perfect
                so you can enjoy your new vehicle immediately.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <Zap className="h-8 w-8 text-primary mb-2" />
              <h5 className="font-medium mb-1">Charged & Ready</h5>
              <p className="text-sm text-muted-foreground dark:text-gray-300">
                Your Tesla arrives with optimal battery charge so you can hit the road immediately.
              </p>
              <div className="relative h-32 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/Tesla/carousel-section/Homepage-Card-Model-Y-Desktop-US-v2.avif"
                  alt="Model Y"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <h5 className="font-medium mb-1">Full Inspection</h5>
              <p className="text-sm text-muted-foreground dark:text-gray-300">
                Multi-point quality check ensures your vehicle is in perfect condition before handoff.
              </p>
              <div className="relative h-32 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/Tesla/carousel-section/Homepage-Card-Model-X-New-Desktop-US-v4.avif"
                  alt="Model X"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-2" />
              <h5 className="font-medium mb-1">Full Orientation</h5>
              <p className="text-sm text-muted-foreground dark:text-gray-300">
                Our specialists walk you through every feature, from Autopilot to charging best practices.
              </p>
              <div className="relative h-32 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/Tesla/display-section/Homepage-Features-Desktop.avif"
                  alt="Tesla Features"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="specialized-services" className="py-8 bg-background">
      <div className="">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tesla Delivery Process</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              From order to keys-in-hand, our white-glove Tesla delivery service ensures your electric vehicle arrives in perfect condition.
            </p>
          </motion.div>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
