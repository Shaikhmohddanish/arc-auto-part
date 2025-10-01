import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <>
      {/* Newsletter and Contact Section */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Contact */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-balance">
                Call Our Mechanic To Find The Right
                <br />
                Part For Your Car!
              </h2>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">(888) 508-6192</span>
              </div>
            </div>

            {/* Right - Newsletter */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get latest updates & offers</h3>

              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 flex-1"
                />
                <Button className="bg-black hover:bg-gray-800 px-8">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-secondary text-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Image src="/images/arc-logo.png" alt="ARC Auto Part" width={120} height={40} className="h-10 w-auto" />

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-gray-900">About Company</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                      Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-gray-900 transition-colors">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/warranty-claim" className="hover:text-gray-900 transition-colors">
                      Warranty & Claim
                    </Link>
                  </li>
                  <li>
                    <Link href="/return-refund" className="hover:text-gray-900 transition-colors">
                      Return & Refund
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping-tracking" className="hover:text-gray-900 transition-colors">
                      Shipping & Tracking
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gray-900 transition-colors">
                      Contact Details
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Useful Links</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-gray-900 transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="hover:text-gray-900 transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/data-protection" className="hover:text-gray-900 transition-colors">
                    Data Protection
                  </Link>
                </li>
                <li>
                  <Link href="/exterior-parts" className="hover:text-gray-900 transition-colors">
                    Exterior Parts
                  </Link>
                </li>
                <li>
                  <Link href="/interior-parts" className="hover:text-gray-900 transition-colors">
                    Interior Parts
                  </Link>
                </li>
                <li>
                  <Link href="/advertisement-policy" className="hover:text-gray-900 transition-colors">
                    Advertisement Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Response */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Quick Response</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                After making your request with your contact details, you will receive a response from scrap or scrap
                dealers within 24 hours. When they have the parts you request, they will email you with all the
                information you need.
              </p>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>ARC Auto Part LLC</p>
                <p>arcautopart.com</p>
                <p>(888) 508-6192</p>
                <p>support@arcautopart.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© ARC Auto Part LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Bottom Call-to-Action Bar */}
      <div className="bg-black text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">CALL TOLL FREE NO. (888) 508-6192</span>
          </div>
        </div>
      </div>
    </>
  )
}
