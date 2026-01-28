"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { HelpCircle, Car, Truck, Zap, Clock, Shield, Mail, MapPin, Battery } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/lib/aceternity-ui"
import { useTheme } from "next-themes"

// Replace the entire component with this enhanced version
export default function Faq() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const { theme } = useTheme()

  const faqs = [
    {
      question: "How do I track my Tesla delivery?",
      answer:
        "You can track your Tesla by entering your tracking number in the tracking field on our homepage. You'll receive real-time GPS updates on your vehicle's location, transport conditions (temperature, humidity), and estimated delivery time with live ETA updates.",
      icon: <Car className="h-5 w-5" />,
    },
    {
      question: "What Tesla delivery options do you offer?",
      answer:
        "We offer multiple delivery options: Standard Delivery (5-7 business days), Express Delivery (2-3 business days), and White-Glove Premium (scheduled time slots with personal handoff). All deliveries include climate-controlled transport and full insurance coverage.",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      question: "Will my Tesla arrive charged and ready to drive?",
      answer:
        "Yes! Every Tesla we deliver arrives with an optimal battery charge (typically 60-80%) so you can drive immediately. Our delivery specialists also perform a final inspection and can walk you through key features like Autopilot, charging, and the Tesla app.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      question: "Is my Tesla insured during transport?",
      answer:
        "Absolutely. Every Tesla in our care is covered by comprehensive insurance valued at the full vehicle price, protecting against any damage during transport. We also have specialized equipment and trained handlers specifically for electric vehicles.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      question: "What climate conditions is my Tesla transported in?",
      answer:
        "All Teslas are transported in climate-controlled enclosed carriers that maintain optimal temperatures between 55-75°F. This protects the vehicle's battery health, paint, and interior from extreme heat, cold, or humidity during transit.",
      icon: <Battery className="h-5 w-5" />,
    },
    {
      question: "Can I schedule a specific delivery date and time?",
      answer:
        "Yes! With our Premium White-Glove service, you can select a specific delivery window that works for you. We'll coordinate the delivery to your home, office, or preferred location with our delivery specialist contacting you 24 hours before arrival.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      question: "What if I notice an issue with my Tesla upon delivery?",
      answer:
        "Before signing off, our delivery specialist will conduct a thorough walk-around inspection with you. If any issues are noted, they're documented on the spot with photos. Our claims process is straightforward and most issues are resolved within 48 hours.",
      icon: <HelpCircle className="h-5 w-5" />,
    },
    {
      question: "Do you deliver to all 50 states?",
      answer:
        "Yes, we deliver Teslas to all 50 states including Alaska and Hawaii. Cross-country deliveries from coast to coast typically take 5-7 business days via our network of climate-controlled transport vehicles strategically positioned across the nation.",
      icon: <MapPin className="h-5 w-5" />,
    },
  ]

  return (
    <section id="faq" className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-muted/50 dark:bg-background/30 z-0"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill={theme === "dark" ? "hsl(var(--primary)/0.2)" : "hsl(var(--primary)/0.1)"}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 relative">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Car className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tesla Delivery FAQ</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about your Tesla delivery experience
            </p>
            <div className="absolute -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl top-0 right-1/4"></div>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <Card className="border border-primary/10 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <Accordion
                type="multiple"
                value={expandedItems}
                onValueChange={setExpandedItems}
                className="w-full space-y-4"
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className={cn(
                        "border border-primary/10 underline-none no-underline rounded-lg overflow-hidden shadow-sm",
                        "data-[state=open]:bg-primary/5 data-[state=open]:shadow-md",
                        "transition-all duration-200",
                      )}
                    >
                      <AccordionTrigger className="px-6 underline-none no-underline py-4 hover:bg-primary/5 group">
                        <div className="flex items-center gap-3 text-left">
                          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                            {faq.icon}
                          </div>
                          <span className="font-medium no-underline">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                        <div className="pl-11">{faq.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground">
              Can't find what you're looking for?{" "}
              <span className="text-primary font-medium">Contact our customer support team</span> for assistance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
