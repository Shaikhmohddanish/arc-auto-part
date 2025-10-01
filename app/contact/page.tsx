import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Feel Free to Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Call{" "}
                <a href="tel:+18885086192" className="text-black font-semibold hover:underline">
                  +1(888) 929-0045
                </a>{" "}
                (Toll-Free) To Talk With Our Mechanic
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" type="text" placeholder="John" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" type="text" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input id="subject" type="text" placeholder="Parts Inquiry" required />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about the parts you're looking for..."
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-black hover:bg-gray-800" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                          <p className="text-muted-foreground">6105 Blue Spruce Circle, TX 76137</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Emergency Call</h3>
                          <a 
                            href="tel:+18885086192" 
                            className="text-black font-semibold hover:underline text-lg"
                          >
                            +1(888) 929-0045
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">General Communication</h3>
                          <a 
                            href="mailto:support@arcautopart.com" 
                            className="text-black font-semibold hover:underline"
                          >
                            support@arcautopart.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info Card */}
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-black mb-2">Quick Response Guarantee</h3>
                    <p className="text-gray-800 text-sm">
                      We guarantee a response within 24 hours! Our expert mechanics are ready to help you find the 
                      exact parts you need for your vehicle.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Contact ARC Auto Part?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're here to make finding auto parts easier than ever. Here's what you can expect when you reach out to us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
                <p className="text-muted-foreground">
                  Talk directly with certified mechanics who understand your vehicle's specific needs and requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  Get responses within 24 hours with detailed information about part availability and pricing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nationwide Service</h3>
                <p className="text-muted-foreground">
                  We ship nationwide and can connect you with local dealers and salvage yards across the country.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Top Brands Section */}
      <TopBrands />

      <Footer />
    </div>
  )
}