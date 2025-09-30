"use client"

import { PartsSearchForm } from "./parts-search-form"

export function PartsFinder() {
  return (
    <section className="relative bg-dark text-white py-16">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/images/banner1.webp')`,
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <PartsSearchForm 
            variant="dark" 
            showLabels={true}
            title="Find Your Right Part"
            subtitle="Select your vehicle details to find the perfect auto part"
          />
        </div>
      </div>
    </section>
  )
}
