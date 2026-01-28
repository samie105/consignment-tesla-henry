import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Car, Zap } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Car className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Tesla Delivery</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Questions about your Tesla delivery? Our dedicated EV delivery specialists are here to help.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground">
                Fill out the form and our Tesla delivery specialists will get back to you within 2 hours.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="Full Name" required />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Tesla Model & Tracking Number" required />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Tell us about your delivery questions or concerns..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">Reach our Tesla delivery team directly.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg dark:bg-primary/5 bg-primary/5 dark:hover:bg-primary/5 group">
                <CardContent className="flex flex-col items-center p-4 text-center relative z-10">
                  <div className="rounded-full bg-primary/20 p-3 mb-3 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Headquarters</h4>
                  <p className="text-muted-foreground text-sm">
                    Tesla Delivery Hub
                    <br />
                    Fremont, CA 94538
                    <br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg dark:bg-primary/5 bg-primary/5 dark:hover:bg-primary/5 group">
                <CardContent className="flex flex-col items-center p-4 text-center relative z-10">
                  <div className="rounded-full bg-primary/20 p-3 mb-3 group-hover:bg-primary/30 transition-colors">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Phone Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Delivery Hotline:
                    <br />
                    +1 (888) TESLA-GO
                    <br />
                    Priority Line:
                    <br />
                    +1 (888) 837-5246
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg dark:bg-primary/5 bg-primary/5 dark:hover:bg-primary/5 group">
                <CardContent className="flex flex-col items-center p-4 text-center relative z-10">
                  <div className="rounded-full bg-primary/20 p-3 mb-3 group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                  <p className="text-muted-foreground text-sm">
                    Delivery Support:
                    <br />
                    delivery@tesladelivery.com
                    <br />
                    Priority Cases:
                    <br />
                    priority@tesladelivery.com
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg dark:bg-primary/5 bg-primary/5 dark:hover:bg-primary/5 group">
                <CardContent className="flex flex-col items-center p-4 text-center relative z-10">
                  <div className="rounded-full bg-primary/20 p-3 mb-3 group-hover:bg-primary/30 transition-colors">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Support Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    24/7 Tracking Support
                    <br />
                    Live Chat Available
                    <br />
                    Phone: 6 AM - 10 PM PT
                    <br />
                    7 Days a Week
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
