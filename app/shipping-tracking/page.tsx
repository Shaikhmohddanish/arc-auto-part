import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function ShippingTrackingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shipping & Tracking</h1>
            <p className="text-lg text-muted-foreground">Call (888) 929-0045 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">About Our Network</h3>
              <p className="text-blue-700">
                ARC Auto Part is not a direct junkyard or owned by any junkyard. We are tied up with 4000+ junkyards in
                the United States. Our quality check team and experts do regular visits to junkyards to find the exact
                part you are looking for. After they do a quality test, then they ship the part. So, the whole process
                takes time & patience.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Shipping Information</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    Shipping is available throughout the United States. We ship from various locations nationwide so we
                    can deliver your product in the fastest manner possible so that you can get your automobile back on
                    the road quicker. In cases where an item is out of stock, on back order, or is a special order, we
                    will notify you via email with an approximate ETA.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Processing Time</h3>
                    <p className="text-muted-foreground">5-7 working days to generate tracking ID</p>
                  </div>

                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Delivery Time</h3>
                    <p className="text-muted-foreground">10-12 working days (depends on dimensions and distance)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Shipping Policy</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Freight Parts Address</h4>
                    <p className="text-muted-foreground">
                      For any freight parts, it is preferable to provide a business name and address. If there is no
                      business address, kindly help us with a nearby Walmart parking address or there could be
                      additional charges for doorstep delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Order Processing</h4>
                    <p className="text-muted-foreground">
                      Once the order is placed, it will take 5-7 working days to generate the tracking ID. The delivery
                      is entirely depending upon the dimensions of the product and the distance to be covered (10-12
                      working days).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Wrong Shipping Address</h4>
                    <p className="text-muted-foreground">
                      If a wrong shipping address is provided by the customer, the organization does not hold any
                      responsibility once the part is shipped. In such case, the customer will need to pay the
                      additional charges for the reshipment of the same part.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Order Cancellation</h4>
                    <p className="text-muted-foreground">
                      If the customer wants to cancel the order, then they will be eligible for a partial refund, after
                      a deduction of 25% of the paid amount.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Important Notes</h2>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold">
                    No refund or return on any body part, exterior parts, or electronic parts.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold">
                    All state fees & transport fees have to be paid by the customer. If anything extra amount is needed
                    at the time of delivery, the customer has to pay the extra fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Tracking Your Order</h2>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Once your order is processed and shipped, you will receive a tracking ID via email. You can use this
                  tracking ID to monitor your shipment's progress.
                </p>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">What to Expect:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Email notification with tracking information</li>
                    <li>Regular updates on shipment status</li>
                    <li>Estimated delivery date</li>
                    <li>Contact information for shipping carrier</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Questions About Your Shipment?</h3>
              <p className="text-muted-foreground mb-4">
                Our shipping team is here to help track your order and answer any delivery questions.
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
