import { Shield, Truck, DollarSign } from "lucide-react"

export function CompanyInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 font-semibold text-lg mb-2">Why Choose Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">ARC Auto Part LLC</h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                ARC Auto Part LLC is a US based online platform for finding all types of used auto parts. We partner
                with the best scrap and scrapyards across the country to provide our customers with only top quality
                services. On our website, you will find a simple search function that will help you find a wide range of
                used car parts from different dealers.
              </p>

              <p>
                We help you get in touch with the best suppliers without any extra effort and act as a bridge between
                you and the dealers.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expert Certified Mechanics</h3>
                  <p className="text-gray-600">
                    Once you have selected the Used Engines and Used Transmissions you need and contacted, you will
                    receive an answer within less than 24 hours. All you need is internet access, you don't have to go
                    to different junkyards to find a car part, we do it all for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Shipping Nationwide</h3>
                  <p className="text-gray-600">
                    No matter which corner of the USA you are ordering from, you will have auto parts delivered directly
                    to your door within a day and send it to the desired location.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Best Prices in the Industry</h3>
                  <p className="text-gray-600">
                    Maintaining your vehicle can be expensive... but not with used parts. Getting used parts will cost
                    you twice or even three times less than new ones. In addition, you will not only find very cheap
                    used parts here, but also high-quality parts that have the same durability as new parts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">How does ARC Auto Part LLC work?</h4>
              <p className="text-gray-600">
                Simple. Browsing through our website is just a breeze - within a few minutes you can find everything
                you've been looking for. Just fill the required fields, such as the brand, car model, year, etc. and
                find the most affordable and top-quality parts.
              </p>
            </div>
          </div>

          {/* Right content - Car image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/car-red.png"
                alt="Red BMW Car"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-200 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gray-300 rounded-full opacity-30" />
          </div>
        </div>

        {/* Additional sections */}
        <div className="mt-20 space-y-16">
          {/* Do you need durable parts section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Do you need durable and affordable used auto parts?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              It's in the right place. Here at ARC Auto Part LLC you will find the best deals in the country. The
              process is simple, allowing our customers to find their desired auto parts at the best prices while
              sitting at home or in the office. No matter what type of vehicle you have, we guarantee that you will
              easily find what you are looking for in just a few clicks. Save time and money, find and order all kinds
              of used car parts at incredibly low prices now!
            </p>
          </div>

          {/* The largest online selection */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              The largest online selection of used car parts
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our online platform offers a wide range of quality used car parts from the best junkyards across the
              country. You can find parts for all types of vehicles be it a sedan, jeep, minivan and more. So you get
              quality parts at affordable prices. This is a win-win and the best deal you can get.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
