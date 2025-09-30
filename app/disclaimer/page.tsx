import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Disclaimer</h1>
            <p className="text-lg text-muted-foreground">Call (888) 929-0045 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 shadow-sm border space-y-6">
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  If you require any more information or have any questions about our site's disclaimer, please feel
                  free to contact us by email at support@arcautopart.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers for ARC Auto Part</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All the information on this website - arcautopart.com - is published in good faith and for general
                  information purpose only. ARC Auto Part does not make any warranties about the completeness,
                  reliability and accuracy of this information. Any action you take upon the information you find on
                  this website (ARC Auto Part), is strictly at your own risk. ARC Auto Part will not be liable for any
                  losses and/or damages in connection with the use of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  From our website, you can visit other websites by following hyperlinks to such external sites. While
                  we strive to provide only quality links to useful and ethical websites, we have no control over the
                  content and nature of these sites. These links to other websites do not imply a recommendation for all
                  the content found on these sites. Site owners and content may change without notice and may occur
                  before we have the opportunity to remove a link which may have gone 'bad'.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Privacy Policies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Please be also aware that when you leave our website, other sites may have different privacy policies
                  and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as
                  well as their "Terms of Service" before engaging in any business or uploading any information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Accuracy</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-yellow-800 leading-relaxed">
                    <strong>Important:</strong> While we make every effort to ensure the accuracy of product
                    information, specifications, and compatibility details, we recommend that customers verify all
                    information before making a purchase. Auto parts specifications can vary by year, make, model, and
                    engine type.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Product Condition</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All parts sold are used automotive parts unless otherwise specified. While we conduct quality
                  inspections, used parts may show signs of normal wear and tear. We provide detailed descriptions and,
                  where applicable, mileage information to help customers make informed decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Installation and Compatibility</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="text-red-800 leading-relaxed">
                    <strong>Professional Installation Recommended:</strong> We strongly recommend professional
                    installation of all automotive parts. Improper installation may result in vehicle damage, personal
                    injury, or voided warranties. Customers are responsible for ensuring compatibility with their
                    specific vehicle.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Consent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website, you hereby consent to our disclaimer and agree to its terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Updates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Should we update, amend or make any changes to this document, those changes will be prominently posted
                  here. We reserve the right to modify this disclaimer at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-semibold">ARC Auto Part</p>
                  <p className="text-muted-foreground">Phone: (888) 929-0045</p>
                  <p className="text-muted-foreground">Email: support@arcautopart.com</p>
                  <p className="text-muted-foreground">Website: arcautopart.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall ARC Auto Part be liable for any direct, indirect, incidental, special, or
                  consequential damages arising out of or in connection with your use of this website or the products
                  purchased through it. This includes, but is not limited to, damages for loss of profits, goodwill,
                  use, data, or other intangible losses.
                </p>
              </section>
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
