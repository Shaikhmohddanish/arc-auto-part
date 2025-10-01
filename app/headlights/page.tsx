import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Shield, Package, RotateCcw, Phone, Mail, CheckCircle, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"
import { PartsSearchForm } from "@/components/parts-search-form"

export default function HeadlightsPage() {
  const faqs = [
    {
      question: "Are used headlights good?",
      answer:
        "Used headlights can be a great deal, but they may also come with some hidden costs. Consider the source of the used headlight - if you're buying from a reputable dealer, you're likely to get a quality product. Used headlights are rigorously examined before being sold, making their reliability far greater than expected.",
    },
    {
      question: "Is a used headlight worth buying?",
      answer:
        "Make sure the headlight is compatible with your car and check that it's in working order. Ensure you're getting a reasonable price. Used headlights can be a great option for saving money on car maintenance, but undertake extensive research to verify you're choosing a high-quality, long-lasting headlight.",
    },
    {
      question: "Which is better rebuilt or used headlight?",
      answer:
        "Both have advantages and disadvantages. A used headlight is less expensive but may have greater wear and tear. A rebuilt headlight costs more but will last longer and be more dependable. If you're looking to save money, choose used. If reliability is your priority, go with rebuilt.",
    },
  ]

  const headlightTypes = [
    { type: "Halogen", lifespan: "450-1,000 hours", duration: "2-4 years" },
    { type: "Xenon (HID)", lifespan: "2,000-3,000 hours", duration: "5+ years" },
    { type: "LED", lifespan: "10,000-30,000 hours", duration: "10+ years" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Used OEM Headlights</h1>
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Find Used Car Headlights for a Great Price!</h2>

              <p className="text-lg text-muted-foreground mb-6">
                At ARC Auto Part, we specialize in providing high-quality used headlights at competitive prices. From
                the moment you contact us, our dedicated team works tirelessly to source the perfect headlights for your
                needs, ensuring you get back on the road safely and swiftly.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                With access to the largest inventory of used headlights in the US, we offer a wide range of options for
                domestic and import vehicles, including cars, trucks, SUVs, and vans. Trust us to deliver the right
                headlights at the right price, tailored to fit your vehicle's requirements.
              </p>

              {/* Free Quote Section */}
              <Card className="bg-primary/5 border-primary/20 mb-12">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Free Used Headlights Quotes
                  </h3>
                  <p className="text-muted-foreground">
                    Filling out our free instant online quote ensures you get the best possible price and high-quality
                    headlights that are hard to beat in the industry. Once you place your order, your headlights will be
                    shipped directly to your door or to your mechanic's shop, ready for installation.
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
                When purchasing a used headlight, you might be surprised to learn that a newer model than your vehicle's
                current headlights could be compatible. This can often provide you with a replacement that offers
                improved clarity and performance.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Fill out our free online headlight quote or call one of our Headlight Expert Representatives @
                <a href="tel:+18885086192" className="text-primary font-semibold hover:underline">
                  {" "}
                  +1(888) 929-0045
                </a>{" "}
                to help you determine what type of headlight will work with your vehicle's year, make, and model.
              </p>

              {/* Headlight Types */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">Headlight Types & Lifespan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {headlightTypes.map((headlight, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                          <Lightbulb className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{headlight.type}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{headlight.lifespan}</p>
                        <Badge variant="secondary">{headlight.duration}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Package className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Free Shipping</h3>
                    </div>
                    <p className="text-muted-foreground">
                      ARC Auto Part offers free shipping throughout the United States. This means you only pay for the
                      used headlights you order, with no additional shipping charges.
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
                      After purchasing a used headlight, you will get a 30-180 days' warranty directly from the junkyard
                      and salvage yard dealers. Here you can get only high-quality headlights, that are guaranteed to
                      work without any issues for a long period.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">What headlights can you get?</h3>
                    </div>
                    <p className="text-muted-foreground">
                      At ARC Auto Part, you can find high performance headlights for all types of vehicles – a van,
                      sedan, jeep or else. These are worth all the penny you pay for them. In exchange you get the best
                      possible deal in the country – top-quality used OEM Headlights.
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

              {/* Replacement Guide */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">When to Replace Your Headlights</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-primary" />
                        Warning Signs
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Dimming or reduced light output</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Yellowing or cloudiness on the lens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Flickering or inconsistent lighting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Cracks or physical damage</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Quality Inspection Tips
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Check seller's credibility and reviews</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Inspect for cracks or damage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Verify brightness and alignment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Ensure warranty is included</span>
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
                  <h3 className="text-2xl font-semibold mb-4">Need Help Finding the Right Headlights?</h3>
                  <p className="text-muted-foreground mb-6">
                    Call our Customer Service Representatives for expert guidance on headlight selection.
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
