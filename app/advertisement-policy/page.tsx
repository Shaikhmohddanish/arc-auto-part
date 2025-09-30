import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function AdvertisementPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Advertisement Policy</h1>
            <p className="text-lg text-muted-foreground">Call (888) 929-0045 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 shadow-sm border space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Purpose</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This advertisement policy outlines the standards and guidelines for advertising auto parts on our
                  website. Our goal is to ensure transparency, accuracy, and compliance with all applicable laws and
                  regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Content Guidelines</h2>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Accuracy</h4>
                    <p className="text-muted-foreground">
                      All advertisements must accurately represent the products, including specifications,
                      compatibility, and performance.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Prohibited Content</h4>
                    <p className="text-muted-foreground">
                      Advertisements may not contain misleading information, offensive material, or promote illegal
                      products.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Target Audience</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Advertisements should be tailored to our intended audience, including DIY mechanics, professional auto
                  repair shops, and general consumers. Content must be appropriate for these groups.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Claims and Testimonials</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All claims about product performance must be substantiated.</li>
                  <li>
                    Testimonials used in advertisements should reflect the honest opinions of users and must not be
                    misleading.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Visuals and Branding</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use high-quality images that clearly depict the advertised auto parts.</li>
                  <li>Ensure all visuals are accurately labeled and represent the product being sold.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Promotional Offers</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Clearly outline any promotional offers, including discounts and warranties.</li>
                  <li>Include terms and conditions for any promotions to ensure transparency.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Return and Exchange Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Information about our return and exchange policy must be clearly stated in all advertisements,
                  providing customers with clear guidance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Monitoring and Feedback</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will monitor customer feedback and reviews related to advertisements to continuously improve our
                  marketing practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Policy Updates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This policy will be reviewed regularly and updated as necessary to reflect changes in regulations,
                  inventory, or market conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions or concerns regarding our advertisement policy, please contact us:
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-semibold">ARC Auto Part</p>
                  <p className="text-muted-foreground">Phone: (888) 929-0045</p>
                  <p className="text-muted-foreground">Email: support@arcautopart.com</p>
                </div>
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
