import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBrands } from "@/components/top-brands"

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Use</h1>
            <p className="text-lg text-muted-foreground">Call (888) 508-6192 (Toll-Free) To Talk With Our Mechanic</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 shadow-sm border space-y-6">
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  The ARC Auto Part website located at arcautopart.com is a copyrighted work belonging to ARC Auto
                  Parts. Certain features of the Site may be subject to additional guidelines, terms, or rules, which
                  will be posted on the Site in connection with such features.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Use described the legally binding terms and conditions that oversee your use of the
                  Site. By logging into the site, you are being compliant that these terms and you represent that you
                  have the authority and capacity to enter into these terms. You should be at least 18 years of age to
                  access the site. If you disagree with all of the provision of these terms, do not log into and/or use
                  the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Access to the Site</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Subject to these Terms: Company grants you a non-transferable, non-exclusive, revocable, limited
                  license to access the Site solely for your own personal, noncommercial use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Certain Restrictions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The rights approved to you in these Terms are subject to the following restrictions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    You shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially
                    exploit the Site
                  </li>
                  <li>
                    You shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any
                    part of the Site
                  </li>
                  <li>You shall not access the Site in order to build a similar or competitive website</li>
                  <li>
                    Except as expressly stated herein, no part of the Site may be copied, reproduced, distributed,
                    republished, downloaded, displayed, posted or transmitted in any form or by any means
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Company reserves the right to change, suspend, or cease the Site with or without notice to you. You
                  approved that Company will not be held liable to you or any third-party for any change, interruption,
                  or termination of the Site or any part.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links & Ads</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Site may contain links to third-party websites and services, and/or display advertisements for
                  third-parties. Such Third-Party Links & Ads are not under the control of Company, and Company is not
                  responsible for any Third-Party Links & Ads. Company provides access to these Third-Party Links & Ads
                  only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any
                  representations with respect to Third-Party Links & Ads.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly
                  disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory,
                  including all warranties or conditions of merchantability, fitness for a particular purpose, title,
                  quiet enjoyment, accuracy, or non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation on Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or
                  any third-party for any lost profits, lost data, costs of procurement of substitute products, or any
                  indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating
                  to these terms or your use of, or incapability to use the site even if company has been advised of the
                  possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Web Beacons</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Like any other website, arcautopart.com uses 'cookies'. These cookies are used to store information
                  including visitors' preferences, and the pages on the website that the visitor accessed or visited.
                  The information is used to optimize the users' experience by customizing our web page content based on
                  visitors' browser type and/or other information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Electronic Communications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The communications between you and Company use electronic means, whether you use the Site or send us
                  emails, or whether Company posts notices on the Site or communicates with you via email. For
                  contractual purposes, you (a) consent to receive communications from Company in an electronic form;
                  and (b) agree that all terms and conditions, agreements, notices, disclosures, and other
                  communications that Company provides to you electronically satisfy any legal obligation that such
                  communications would satisfy if it were be in a hard copy writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-semibold">ARC Auto Part</p>
                  <p className="text-muted-foreground">Phone: (888) 508-6192</p>
                  <p className="text-muted-foreground">Email: support@arcautopart.com</p>
                  <p className="text-muted-foreground">Website: arcautopart.com</p>
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
