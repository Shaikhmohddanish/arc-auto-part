"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {/* Top contact bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(888) 508-6192</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@arcautopart.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Welcome to ARC Auto Part</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
                <Image src="/images/arc-logo.png" alt="ARC Auto Part" width={120} height={40} className="h-10 w-auto" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/headlights" className="text-foreground hover:text-primary transition-colors">
                Used Headlights
              </Link>
              <Link href="/transmission" className="text-foreground hover:text-primary transition-colors">
                Used Transmission
              </Link>
              <Link href="/truck-parts" className="text-foreground hover:text-primary transition-colors">
                Truck Parts
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/" 
                    className="text-foreground hover:text-primary transition-colors text-lg py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/headlights" 
                    className="text-foreground hover:text-primary transition-colors text-lg py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Used Headlights
                  </Link>
                  <Link 
                    href="/transmission" 
                    className="text-foreground hover:text-primary transition-colors text-lg py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Used Transmission
                  </Link>
                  <Link 
                    href="/truck-parts" 
                    className="text-foreground hover:text-primary transition-colors text-lg py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Truck Parts
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-foreground hover:text-primary transition-colors text-lg py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
