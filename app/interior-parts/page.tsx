import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Shield, Package, Truck, CheckCircle, Star } from "lucide-react"
import { PartsSearchForm } from "@/components/parts-search-form"

export default function InteriorPartsPage() {

  const stats = [
    { number: "45k+", label: "Happy Customer" },
    { number: "500+", label: "Cars in Garage" },
    { number: "45k+", label: "Total Kilometer" },
    { number: "50+", label: "Car Center Solutions" },
  ]

  const services = [
    {
      title: "#1 We Inspect All Parts",
      description: "ARC Auto Part can help you find Used Interior fast and easy. All used parts are inspected before being sold. Anything mechanical, is tested for function. We visually inspect for any cracks, leaks, damage, or issues before we put the parts in our inventory system."
    },
    {
      title: "#2 We Guarantee All Parts",
      description: "Feel secure and rest easy when you search for Used Interior and millions of used auto parts from our nationwide network of locally owned salvage yards. We provide up to 1 year warranty on some of the parts we sell."
    },
    {
      title: "#3 Nationwide Shipping and Delivery",
      description: "When you need Used Interior in a flash, we have partnered with all major shipping and freight carriers to ship any used part, used engine, used transmission, and more to any address in the United States."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Used Interior Parts
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Call{" "}
              <a href="tel:+18889290045" className="text-primary font-semibold hover:underline">
                +1(888) 929-0045
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Nationwide Auto Salvage Network</h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our huge nationwide auto salvage network connects thousands of salvage yards and junkyards into one 
                place. Increasing the possibility of finding any part you are looking for. Purchase your used parts 
                locally to save you time on shipping. If our yard does not have your used part in stock, we can have 
                it delivered to you, no problem! Search for used interior fast in our auto salvage inventory system.
              </p>
              
              <p>
                The interior of the vehicle plays a huge role in how the vehicle is perceived and how well it has been 
                treated. The interior of most vehicles is different, as the interior of the vehicle has the ability to 
                make the vehicle look different. The interior of the vehicle includes each and everything that is boxed 
                between the four doors. The interior of the vehicle is as important as the exterior of the vehicle.
              </p>
              
              <p>
                When the vehicle is being designed one of the main factors that is time consuming is the interior design 
                of the vehicle. This interior covers from the fabric used on the seats, to the grip of the vehicle. 
                Almost every component of the interior is designed in a way that it ties in the look perfectly; they are 
                all made to complement each other and make the vehicle look more beautiful. The interior even covers the 
                side panels, and the armrest found inside of the vehicle. Each of them are designed keeping in mind the 
                overall look of the vehicle.
              </p>
              
              <p>
                Search for a junkyard that may have your Interior in stock! You can search in the USA by zip code for 
                used auto salvage parts near you using our used parts request form.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Used Interior Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why are used interior and used auto parts so important?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Pros of Buying Used Interior From Our Salvage Yard</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Prices are 50-75% less than aftermarket parts</li>
                    <li>• Most parts are OEM (original equipment manufacturer)</li>
                    <li>• Better fitment, performance, and longevity</li>
                    <li>• All parts come with warranty</li>
                    <li>• Expert customer service and decades of knowledge</li>
                    <li>• Visual identification and part numbers cataloged</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Cons of Buying Aftermarket Parts</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Poor fitment and gaps between body lines</li>
                    <li>• Parts may not line up properly</li>
                    <li>• Factory bolts and nuts may not fit</li>
                    <li>• Time wasted on returns and refunds</li>
                    <li>• Quality doesn't match OEM standards</li>
                    <li>• Images can be misleading about fitment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Tips for Buying Used Interior Parts:</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Make sure all parts are inspected and fit your vehicle</li>
                <li>• Cross reference your VIN or OEM part numbers</li>
                <li>• Ask for pictures of the specific part</li>
                <li>• Get shipping quotes to your zip code</li>
                <li>• Always ask for a guarantee with your parts</li>
                <li>• Remember: OEM parts will always outperform aftermarket</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Over 15 Years of Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Over the last 15 years, ARC Auto Part has become one of the most recognizable Used Interior suppliers 
              on the internet. Our state of the art inventory search system is what helps you locate Used Interior. Our 
              database has all interchangeable years already stored, and immediately pulls API data to find the specific 
              vehicle you are looking for, before finding Used Interior for you.
            </p>
            
            <div className="bg-red-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">100% Customer Service Guaranteed!</h3>
              <p className="text-red-100 mb-6">
                Finding Any Used Interior Will Be A Breeze With ARC Auto Part. Our local auto junkyards near you 
                are ready to help get your used auto parts pulled, and shipped immediately.
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100" size="lg">
                Contact Us Today
              </Button>
            </div>
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