"use client"

import type React from "react"
import Link from "next/link"
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Zap 
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-background">
      <div>
        <div className="py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Tesla Delivery</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium white-glove Tesla delivery service. Your electric vehicle, delivered with care.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="https://twitter.com/tesla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link 
                  href="https://facebook.com/tesla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link 
                  href="https://instagram.com/teslamotors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link 
                  href="https://linkedin.com/company/tesla-motors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="text-muted-foreground hover:text-foreground transition-colors">
                    Track Your Tesla
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Delivery Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Tesla Models</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Model Y Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Model 3 Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Model S Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Model X Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cybertruck Delivery
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Tesla Delivery</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Tesla Delivery Hub<br />
                    Fremont, CA 94538<br />
                    United States
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                  <a href="tel:+18888375246" className="text-muted-foreground hover:text-foreground transition-colors">
                    +1 (888) TESLA-GO
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                  <a href="mailto:delivery@tesladelivery.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    delivery@tesladelivery.com
                  </a>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Chat with us</h4>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://wa.me/message/NVZ3SD4V37GKK1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary transition-all duration-200 cursor-pointer group"
                  >
                    <svg 
                      className="w-8 h-8 mb-2 text-[#25D366] group-hover:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-xs font-medium">WhatsApp</span>
                  </a>
                  
                  <a 
                    href="https://t.me/Cargologistics_01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary transition-all duration-200 cursor-pointer group"
                  >
                    <svg 
                      className="w-8 h-8 mb-2 text-[#0088cc] group-hover:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span className="text-xs font-medium">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Tesla Delivery. Premium EV delivery service. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
