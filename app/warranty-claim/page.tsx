import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function WarrantyClaimPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Warranty & Claim</h1>
            <p className="text-lg text-muted-foreground">Call (888) 929-0045 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Warranty Terms</h2>

              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">a) Used Engines</h3>
                  <p className="text-muted-foreground">
                    ARC Auto Part at its option, can either repair or replace the defective unit only with Used
                    Engines. Ninety days and unlimited miles (unless otherwise noted) on parts only from the date of
                    delivery. No warranty is covered on any attached accessories and parts such as manifolds,
                    carburetors, distributor, alternator, starter, water pump, thermostat, clutch, flywheel, timing belt
                    of belt-driving engine and all seals etc.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">b) High-Performance Engines</h3>
                  <p className="text-muted-foreground">
                    No warranty is offered on Mazda rotary, high-performance, and racing engines or transmissions.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">c) Car Body Parts</h3>
                  <p className="text-muted-foreground">No warranty is offered on car body parts.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">d) Used Transmissions</h3>
                  <p className="text-muted-foreground">
                    Ninety days from the date of delivery on parts only. Electrical switches, wiring system, shifting
                    linkage and torque converter are not guaranteed.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">e) Surface Rust</h3>
                  <p className="text-muted-foreground">
                    Due to the materials and composition of the powertrain (engine, transmission, transfer case)
                    components, we do not warranty against surface rust that may accrue over time, if it does not affect
                    the overall performance of the product sold. There is a reasonable expectation that surface rust
                    will form no matter if the product is stored on a shelf or left in the donor vehicle until the time
                    of sale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Claim & Refund Process</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    After returning your order, the refund policy would vary according to your mode of payment. You will
                    find a brief of the payment method on your product receipt. You can keep a check on your refund
                    status by contacting our billing department at (888) 929-0045.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Note: Every bit of this information is related to the products bought and delivered by ARC Auto
                    Parts and not the ones you purchase from a third party or junkyard.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">If the product is damaged or incorrect</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Any damages to the delivered product must be reported within 24 hours</li>
                    <li>
                      For damaged or incorrect part customer must send a 20-sec unboxing video displaying the label via
                      email to support@arcautopart.com
                    </li>
                    <li>
                      The part needs to ship back to the yard. Once assessed and validated by the yard the refund will
                      process within 24 to 48 hours. The customer must bear the return shipping charges.
                    </li>
                    <li>The refund will be completed in the next 4-7 working days.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Credit Card Charging</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    There will be multiple charges you can find on your credit card statements. Our shipping department
                    will update you after every charge.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Explanation:</strong> Our parts are coming from multiple/different warehouses all over the
                    United States. And there have extra shipping costs, extra warehouse costs involved. As you are
                    buying the product, it is your duty to pay all taxes & fees by yourself. So, in that case, we will
                    use your card to pay those bills. And due to there will be multiple transactions (warehouse fees,
                    shipping, stocking, tax) on your card. Our billing and shipping department will update you regarding
                    all numbers of charges.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold">
                    Important: For any reason, if your card issuing bank is not releasing the transaction with ARC Auto
                    Parts, then you must call the bank and authorize the transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Need Help with Your Warranty Claim?</h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is ready to assist you with any warranty or claim questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8889290045"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Call (888) 929-0045
                </a>
                <a
                  href="mailto:support@arcautopart.com"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Top Brands Section */}
      <TopBrands />

      <Footer />
    </div>
  )
}
