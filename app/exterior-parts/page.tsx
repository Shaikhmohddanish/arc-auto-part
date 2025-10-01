import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Shield, Package, Truck, CheckCircle } from "lucide-react"
import { PartsSearchForm } from "@/components/parts-search-form"

export default function ExteriorPartsPage() {

  const stats = [
    { number: "21k+", label: "Happy Customer" },
    { number: "240+", label: "Cars in Garage" },
    { number: "21k+", label: "Total Kilometer" },
    { number: "24+", label: "Car Center Solutions" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Used Exterior Parts
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Call{" "}
              <a href="tel:+18885086192" className="text-primary font-semibold hover:underline">
                +1(888) 508-6192
              </a>{" "}
              (Toll-Free) To Talk With Our Mechanic
            </p>
          </div>

          {/* Search Form */}
          <PartsSearchForm 
            variant="light" 
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Modern Auto Recycling Network</h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We are a modern auto recycling facility with the network of 4000+ junkyards all over United States, 
                not to be confused with the old junkyard dog mentality of the past. We are focused on delivering high 
                quality, used automotive parts. Our inventory is updated daily consisting of cars, pick-up trucks vans 
                and SUV's for both foreign and domestic vehicles.
              </p>
              
              <p>
                All our parts are cleaned, tested and cataloged into our computerized inventory system. The vast majority 
                of our parts are photographed and then all of our inventory is put online to better serve you 24 hours a 
                day, 7 days a week.
              </p>
              
              <p>
                We offer fast nationwide shipping with UPS and or LTL freight trucks.
              </p>
              
              <p>
                Our warranty programs provide peace of mind for our customers as we want to ensure you are getting the 
                highest quality used parts available. Browse through our site to find the right car part – right now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <TopBrands />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">We Sell Used Parts</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We are a full service salvage yard because we value your time and don't want you to waste it pulling 
              auto parts. At our salvage yard and auto parts store, we'll pull the used auto parts for you, and help 
              you find whatever make and model of car part, rebuilt transmission, or truck part you need in our 
              junkyard. You don't have to bring your own tools or go on a lengthy search for the part you need. We 
              are also in touch with a large network of salvage yards that we will access if we don't have the used 
              car part, used engine, or wheel you need on site at our junkyard.
            </p>
            
            <p>
              At ARC Auto Part your satisfaction with your used car part or rebuilt transmission is our passion. We 
              offer both 90 day and extended warranties on all the parts we sell. When you shop at ARC Auto Part, 
              you can take pride in supporting the local community and economy, just as we do. We provide friendly 
              customer service at our full service salvage yard.
            </p>
            
            <p>
              Quality, Clean, Inspected, and Guaranteed used auto parts from ARC Auto Part. Who has the best used 
              auto parts United States has to offer? Well if you are trying to save time and money on anything from 
              an entire new engine to a small interior part, check out ARC Auto Part.
            </p>
            
            <p>
              No part is too big or too small. If you are looking for a replacement transmission, fender, or used 
              engine for your vehicle, check out our inventory. If you think your car or truck is too old or too new, 
              give us a try. We just might surprise you! Fast, easy and affordable that's ARC Auto Part.
            </p>
          </div>

          {/* Vehicle List */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6">We have used engines for trucks, SUV's, hybrids, foreign & domestic cars such as:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Chrysler</h4>
                <p className="text-sm text-muted-foreground">200, 300, Town & Country</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Chevrolet</h4>
                <p className="text-sm text-muted-foreground">Malibu, Impala, Equinox</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Honda</h4>
                <p className="text-sm text-muted-foreground">Accord, Odyssey, Pilot</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Hyundai</h4>
                <p className="text-sm text-muted-foreground">Elantra, Santa Fe, Sonata</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Nissan</h4>
                <p className="text-sm text-muted-foreground">Altima, Rogue, Sentra</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Ford</h4>
                <p className="text-sm text-muted-foreground">Escape, Fusion, Focus</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Toyota</h4>
                <p className="text-sm text-muted-foreground">Camry, Matrix, Prius</p>
              </div>
            </div>
            
            <p className="text-center mt-6 text-muted-foreground max-w-2xl mx-auto">
              Each and every used engine is inspected, cleaned, and guaranteed for six months. There is no auto 
              parts store that is big enough to house each and every part that has ever been made, but if we don't 
              have it, our team of experts will find it for you.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}