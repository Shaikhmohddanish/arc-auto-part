import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-dark text-white overflow-hidden w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/images/banner1.webp')`,
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 font-semibold text-lg tracking-wide uppercase">Premium Quality Parts</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                GET 40% OFF ON
                <br />
                <span className="text-white border-b-4 border-white">SELECTED ITEMS</span>
              </h1>
              <p className="text-xl text-gray-300 font-semibold">NATIONWIDE FREE DOOR STEP DELIVERY</p>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-lg">Engine Components</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-lg">Transmission Parts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-lg">Electrical Systems</span>
              </div>
            </div>

            <Button size="lg" className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold">
              Find Your Right Part
            </Button>
          </div>

          {/* Right content - Auto parts image */}
          <div className="relative">
            <div className="relative z-10">
              <img src="/images/banner slider 2.webp" alt="Auto Parts Collection" className="w-full h-auto rounded-lg" />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-gray-800 rounded-full opacity-20" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-600 rounded-full opacity-30" />
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
