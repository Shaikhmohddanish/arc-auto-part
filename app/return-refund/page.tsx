import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function ReturnRefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Return & Refund Policy</h1>
            <p className="text-lg text-muted-foreground">Call (888) 929-0045 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Important Notice</h3>
              <p className="text-red-700">
                For billing, claim, or refund related issues, please contact our billing department directly. Our sales
                executives at the toll-free number (888) 929-0045 may not be able to resolve billing-related matters.
                For any billing, claim, or refund issues, please call our billing department.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Claim & Refund Process</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    After returning your order, the refund policy would vary according to your mode of payment. You will
                    find a brief of the payment method on your product receipt. You can keep a check on your refund
                    status by contacting our billing department.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Note: Every bit of this information is related to the products bought and delivered by ARC Auto
                    Parts and not the ones you purchase from a third party or another junkyard.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Where is your Refund?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To know the status of your refund, contact our billing department. After we receive your return, the
                    completion of the refund procedure may take two weeks maximum.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">How are the refunds processed?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once your product reaches back to our warehouse, we would start the refund process. This might take
                    3 days and after the refund is processed, it may take 5-7 working days to reach your end. This often
                    depends on your mode of payment. To claim a refund (product not as described), you must send 25
                    seconds un-boxing video including a shipping label.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold">
                    Important: There is no refund for any kind of body parts, exterior parts, or electronic parts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">If the product is damaged or incorrect</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <p className="text-muted-foreground">
                    Any damages to the delivered product must be reported within 24 hours
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <p className="text-muted-foreground">
                    For damage or incorrect part customer must send a 20 sec unboxing video displaying the label via
                    support@arcautopart.com (e-mail)
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <p className="text-muted-foreground">
                    The part needs to ship back to the yard. Once assessed and validated by the yard the refund will
                    process within 24 to 48 hours. Customer must bear the return shipping charges.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </span>
                  <p className="text-muted-foreground">The refund will be completed in the next 4-7 working days.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Credit Card Charging</h2>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  There will be multiple charges you can find on your credit card statements. Our shipping department
                  will update you after every charge.
                </p>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Explanation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our parts are coming from multiple/different warehouses from all over United States. And there have
                    extra shipping cost, extra warehouse cost involved. As you are buying the product, it is your duty
                    to pay all tax & fees by yourself. So, in that case we will use your card to pay those bills. And
                    due to there will be multiple transactions (warehouse fees, shipping, stocking, tax) on your card.
                    Our billing and shipping department will update you regarding all number of charges.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold">
                    For any reason, if your card issuing bank is not releasing the transaction with ARC Auto Part, then
                    you must call the bank and authorize the transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Cancellation Policy</h2>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In the event the customer cancels the order before the product has shipped, the customer will be
                  eligible for a partial refund after deduction of 25% restocking fee.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  If customer does not respond for long time or fails to receive the part, then part returns to the
                  yard. In that case:
                </p>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    If customer wants to receive or reprocess the order, then customer will have to pay additional
                    shipping charges.
                  </li>
                  <li>
                    If customer wants to cancel the order, then a partial refund will be issued after the deduction of
                    shipping charge. Every transaction is subjected to 6-10% card processing fee.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Need Help with Returns or Refunds?</h3>
              <p className="text-muted-foreground mb-4">
                Contact our billing department for assistance with your return or refund request.
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
