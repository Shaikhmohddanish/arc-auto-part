export function BrandShowcase() {
  const brands = [
    { name: "Audi", logo: "/images/audi.webp" },
    { name: "Ford", logo: "/images/ford.webp" },
    { name: "Chevrolet", logo: "/images/chevolet.webp" },
    { name: "Porsche", logo: "/images/porche.webp" },
    { name: "GMC", logo: "/images/gmc.webp" },
    { name: "Dodge", logo: "/images/dodge.webp" },
    { name: "GM", logo: "/images/gm.webp" },
    { name: "Toyota", logo: "/images/tyota.webp" },
    { name: "BMW", logo: "/images/bmw.webp" },
    { name: "Mercedes Benz", logo: "/images/mercedes.webp" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold text-lg mb-2">Browse Top Car</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Top Brands We Are Serving</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center mb-4">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">{brand.name}</h3>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
