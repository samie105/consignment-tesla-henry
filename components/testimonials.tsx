"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Spotlight } from "@/lib/aceternity-ui"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Model Y Owner, San Francisco",
    content:
      "The delivery experience was absolutely flawless. I tracked my Model Y from the factory all the way to my driveway. The delivery specialist gave me a full walkthrough of all the features. Tesla delivery truly understands customer experience.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-sarah.jpg-9xMINf0xoO07BlNSGk002hkIAhQowI.jpeg",
    rating: 5,
    vehicle: "Model Y Long Range",
    deliveryTime: "Delivered 3 days early",
  },
  {
    name: "Michael Chen",
    role: "Cybertruck Owner, Austin",
    content:
      "Being one of the first Cybertruck owners was already exciting, but the delivery made it even more special. The white-glove service was incredible - they even had the truck charged and ready for my first drive. Elon's vision for customer service is unmatched.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-micheal-30m3HrXyAz5c6QfL7TK6VkF7lJAzV7.png",
    rating: 5,
    vehicle: "Cybertruck Tri-Motor",
    deliveryTime: "Delivered on schedule",
  },
  {
    name: "Emma Rodriguez",
    role: "Model S Plaid Owner, Miami",
    content:
      "From ordering to delivery, everything was seamless. The real-time GPS tracking gave me peace of mind during the entire journey. When my Model S Plaid arrived, it was in pristine condition. Worth every penny.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-emma.jpg-vjYslXT1Be5FPe4DBuwZBscUofYKMF.jpeg",
    rating: 5,
    vehicle: "Model S Plaid",
    deliveryTime: "Delivered 5 days early",
  },
  {
    name: "David Thompson",
    role: "Model 3 Owner, Seattle",
    content:
      "As a repeat Tesla customer, I can say the delivery experience keeps getting better. The tracking system is incredibly accurate, and the delivery team was professional and thorough. This is how car buying should be.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    vehicle: "Model 3 Performance",
    deliveryTime: "Delivered 2 days early",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { theme } = useTheme()

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, activeIndex])

  return (
    <section className="py-20 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill={theme === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary))"}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto"
          >
            Trusted by businesses and individuals worldwide for reliable delivery solutions
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-20 -left-20 w-40 h-40 opacity-10">
            <Quote className="w-full h-full text-primary" />
          </div>

          <div className="min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-70"></div>
                        <Avatar className="h-20 w-20 border-2 border-background relative">
                          <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} />
                          <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "w-5 h-5 mx-1",
                            i < testimonials[activeIndex].rating ? "text-yellow-500" : "text-gray-300",
                          )}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-lg italic mb-6 px-4 md:px-8">
                      "{testimonials[activeIndex].content}"
                    </blockquote>

                    <div>
                      <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/20 hover:bg-primary/10"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex ? "bg-primary w-6" : "bg-primary/30",
                  )}
                  onClick={() => {
                    setActiveIndex(index)
                    setAutoplay(false)
                    setTimeout(() => setAutoplay(true), 10000)
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/20 hover:bg-primary/10"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn("group cursor-pointer", activeIndex === index ? "ring-2 ring-primary rounded-lg" : "")}
              onClick={() => {
                setActiveIndex(index)
                setAutoplay(false)
                setTimeout(() => setAutoplay(true), 10000)
              }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm line-clamp-4">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
