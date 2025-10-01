import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Shield, Package, RotateCcw, Phone, Mail, CheckCircle, Clock, DollarSign } from "lucide-react"
import { parts } from "@/lib/parts"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"
import { PartsSearchForm } from "@/components/parts-search-form"

export default function TransmissionPage() {
  const faqs = [
    {
      question: "Are used engines good?",
      answer:
        "Used engines can be a great deal, but they may also come with some hidden costs. Consider the source of the used engine - if you're buying from a reputable dealer, you're likely to get a quality product. Used engines are rigorously examined before being sold, making their reliability far greater than expected.",
    },
    {
      question: "Is a used engine worth buying?",
      answer:
        "Make sure the engine is compatible with your car and check that it's in working order. Ensure you're getting a reasonable price. Used engines can be a great option for saving money on car maintenance, but undertake extensive research to verify you're choosing a high-quality, long-lasting engine.",
    },
    {
      question: "Which is better rebuilt or used engine?",
      answer:
        "Both have advantages and disadvantages. A used engine is less expensive but may have greater wear and tear. A rebuilt engine costs more but will last longer and be more dependable. If you're looking to save money, choose used. If reliability is your priority, go with rebuilt.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Used Low Mileage Transmission
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Call{" "}
              <a href="tel:+18885086192" className="text-black font-semibold hover:underline">
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Find Used Car Engine for a Great Price!</h2>

              <p className="text-lg text-muted-foreground mb-6">
                At ARC Auto Part, we have the used engines you want at the price you need. From the time we receive
                your inquiry, our staff works diligently to hand pick a quality used engine which gets you back on the
                road as quickly as possible! Having access to the largest inventory in the US of used engines, means you
                get the right engine for the right price!
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Whether you are looking for a motor for a domestic or import, car, truck, SUV or van you've come to the
                right place, to get exactly what you need.
              </p>

              {/* Free Quote Section */}
              <Card className="bg-primary/5 border-primary/20 mb-12">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    Free Used Engine Quotes
                  </h3>
                  <p className="text-muted-foreground">
                    Filling out our free instant online engine quote ensures you get both the best possible price, along
                    with great low mileage, that's hard to beat in our industry. Once your engine is ordered, it gets
                    shipped on pallet, right to your door or to your mechanic's shop ready to be installed.
                  </p>
                </CardContent>
              </Card>

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
                When looking to purchase a used engine, you might be surprised to find out that your vehicle might
                support an engine that is several years newer than your vehicle. This can often allow you to get a
                replacement with lower miles than your current engine in most cases.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Fill out our free online engine quote or call one of our Engine/Transmission Expert Representatives @{" "}
                <a href="tel:+18885086192" className="text-primary font-semibold hover:underline">
                  +1(888) 508-6192
                </a>{" "}
                to help you determine what type of engine will work with your vehicle's year, make, and model.
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
                      <Settings className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">What engines can you get?</h3>
                    </div>
                    <p className="text-muted-foreground">
                      At ARC Auto Part, you can find high performance engines for all types of vehicles – a van, sedan,
                      jeep or else. Here you can get gasoline, diesel and hybrid engines with low mileage –that are
                      ready to serve you for years.
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

              {/* Engine Guide Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">The Ultimate Guide to Get Used Engines for Sale</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Of course, it will be a bad day when you find that your car needs an engine replacement. Now you are
                  in a situation that whether the existing car engine is worth fixing the problem. Else it would make
                  sense to save your money in buying a used engine instead of spending on buying a new engine.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whatever be the situation you are in, buying a used engine will be a great solution. However, it is
                  also simultaneously important not to get a bad engine part.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        How many miles can an engine last?
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        According to AARP, the average mileage of a car engine is assumed to be between 12,000 and
                        15,000 miles per year. Keeping your car engine last long has a lot of benefits, including saving
                        you a great deal of money.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Always adhere to the maintenance plan specified by the manufacturer
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Don't put off small issues - address them immediately
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Keep your engine free from grime, dirt, and contaminants
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Abide by speed limits to decrease wear on your engine
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        How can you tell a good engine?
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Buying used engines for your car is a cost efficient solution, but the vital thing to be noted
                        is that you buy a quality one.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Check the seller's credibility, certifications, and reviews
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Look for engines with about 15,000 miles per year
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Ensure the engine has been tested for performance
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          Perform an oil analysis before purchasing
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">
                          {index + 1}) {faq.question}
                        </h4>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Need Expert Advice?</h3>
                  <p className="text-muted-foreground mb-6">
                    Call our Engine/Transmission Expert Representatives for personalized assistance.
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
