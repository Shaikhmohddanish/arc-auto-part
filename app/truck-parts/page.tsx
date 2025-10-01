import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Package, RotateCcw, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"
import { PartsSearchForm } from "@/components/parts-search-form"

export default function TruckPartsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Used Truck Parts</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Call{" "}
              <a href="tel:+18885086192" className="text-primary font-semibold hover:underline">
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Used Truck Parts</h2>

              <p className="text-lg text-muted-foreground mb-6">
                If you need A-grade used truck parts as quick as possible, you are in the correct place. ARC Auto Part
                is a one-stop online shop where you can find all kinds of used engine and used transmission parts at the
                most affordable prices. We help our customers locate the best truck parts around the USA within 24
                hours.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Buying a new truck part can be very expensive, so why pay that much if you can get a used one much
                cheaper. Order your desired parts online at really affordable prices and high durability that will serve
                your truck for a long period.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                We provide custom-centric services, by going above and beyond to make our customers happy. Here, we
                guarantee that anyone can find a top-quality truck part they are looking for.
              </p>

              {/* Brands Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">Top Brands We Are Serving</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { name: "Audi", logo: "/images/audi.webp" },
                    { name: "Ford", logo: "/images/ford.webp" },
                    { name: "Chevrolet", logo: "/images/chevolet.webp" },
                    { name: "Porsche", logo: "/images/porche.webp" },
                    { name: "GMC", logo: "/images/gmc.webp" },
                    { name: "Dodge", logo: "/images/dodge.webp" },
                    { name: "GM", logo: "/images/gm.webp" },
                    { name: "Toyota", logo: "/images/tyota.webp" },
                    { name: "BMW", logo: "/images/bmw.webp" },
                    { name: "Mercedes Benz", logo: "/images/mercedes.webp" }
                  ].map((brand) => (
                    <Card key={brand.name} className="text-center p-4 hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <p className="font-medium text-sm">{brand.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                On our online platform, you can find all kinds of OEM used parts for all types of trucks. Whether you
                have a Honda truck, a GMC truck, school bus, pickup or Dodge truck, you name it - we can find high-grade
                used parts for them all.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                To order your desired used truck part all you have to do is use our simple-to-use search tool. Fill in
                all the required information about your truck, such as the model, make, year, etc. and hit the search
                bottom. After, you will get results from the best junkyards and top-quality products at the lowest
                prices possible. Then, choose the part, contact the dealers and leave your personal information. After,
                you will get a response within 24 hours. It's simple, isn't it?
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Our customers' experience with our services are superior to us, so we do everything to solve even the
                tiniest issues. In case if there is something wrong with the truck part you can easily send it back. Or
                maybe you ordered the wrong part, just simply send it back and order the one you've been looking for.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                At ARC Auto Part, we cooperate only with the most trusted salvage yards and junkyards to provide
                exceptional quality used car parts to our beloved customers. We take on us all the hassle of finding
                good-quality used car parts from all the junkyards in the country. So, be sure that we provide you with
                a list of top-notch options.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Package className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Free Shipping</h3>
                    </div>
                    <p className="text-muted-foreground">
                      ARC Auto Part offers free shipping all across the USA. So, there is no extra charge, you pay only
                      for the engine. Order your desired used low mileage engines and get them shipped to your house
                      completely free.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Warranty from the dealers</h3>
                    </div>
                    <p className="text-muted-foreground">
                      After purchasing a used engine, you will get a 30-180 days' warranty directly from the junkyard
                      and salvage yard dealers. Here you can get only high-quality engines, that are guaranteed to work
                      without any issues for a long period.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Truck className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">What engines can you get?</h3>
                    </div>
                    <p className="text-muted-foreground">
                      At ARC Auto Part, you can find high performance used engines for all types of vehicles – a van,
                      sedan, jeep or else. Here you can get gasoline, diesel and hybrid engines with low mileage –that
                      are ready to serve you for years.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <RotateCcw className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Return available</h3>
                    </div>
                    <p className="text-muted-foreground">
                      In case if you are not satisfied with the used auto part you can easily return it. It's very
                      simple, if you do not like what you ordered, or maybe it is not the part that you needed you can
                      easily send it back.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Section */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Need Help Finding the Right Part?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions, call our toll-free number to talk with our mechanic.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+18885086192">+1(888) 508-6192</a>
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:support@arcautopart.com">support@arcautopart.com</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <TopBrands />

      <Footer />
    </div>
  )
}
