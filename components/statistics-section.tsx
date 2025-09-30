import { Heart, Car, Clock, MapPin } from "lucide-react"
import { AnimatedNumber } from "./animated-number"
import { TestimonialCarousel } from "./testimonial-carousel"

export function StatisticsSection() {
  const stats = [
    {
      icon: Heart,
      number: 45000,
      suffix: "+",
      label: "Happy Customer",
      color: "text-black",
    },
    {
      icon: Car,
      number: 500,
      suffix: "+",
      label: "Cars In Warehouse",
      color: "text-black",
    },
    {
      icon: Clock,
      number: 45000,
      suffix: "+",
      label: "Total Parts Available",
      color: "text-black",
    },
    {
      icon: MapPin,
      number: 50,
      suffix: "+",
      label: "AutoParts Outlet",
      color: "text-black",
    },
  ]

  return (
    <section className="relative py-20 bg-gray-100">
      {/* Background car image */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 overflow-hidden">
        <div className="relative w-1/2 h-full">
          <img
            src="/images/car-red.png"
            alt="BMW Car"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-2xl h-auto object-contain opacity-20"
          />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <AnimatedNumber 
                endValue={stat.number} 
                suffix={stat.suffix}
                className="text-4xl font-bold text-gray-900 mb-2"
              />
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Customer testimonials carousel */}
        <TestimonialCarousel />
      </div>
    </section>
  )
}
