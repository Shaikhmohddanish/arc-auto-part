"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const testimonials = [
  {
    rating: 4.7,
    title: "Amazing Support!",
    text: "I have ordered parts a couple times through this site and always been easy to use and parts turn up early even when I've called the site by phone they were absolutely great with anx helpful to talk too",
    author: "Mike Johnson",
    location: "Dallas, TX"
  },
  {
    rating: 4.9,
    title: "Fast Delivery!",
    text: "Needed a transmission for my 2015 Honda Accord and found it here at an amazing price. The part arrived within 3 days and was exactly as described. Installation was smooth and it's been working perfectly for 6 months now.",
    author: "Sarah Williams",
    location: "Miami, FL"
  },
  {
    rating: 4.8,
    title: "Quality Parts!",
    text: "Best place to find used auto parts online. Their inventory system is incredible - found the exact headlight assembly I needed for my BMW in minutes. The part looked almost new and fit perfectly.",
    author: "David Chen",
    location: "Los Angeles, CA"
  },
  {
    rating: 4.6,
    title: "Great Customer Service!",
    text: "Had some questions about compatibility and their mechanic spent 20 minutes on the phone with me explaining everything. Part arrived exactly as promised and saved me hundreds compared to the dealership.",
    author: "Jennifer Martinez",
    location: "Phoenix, AZ"
  },
  {
    rating: 4.9,
    title: "Highly Recommended!",
    text: "I run a small auto repair shop and have been buying from ARC Auto Part for over 2 years. Consistent quality, fair prices, and they always deliver on time. My customers are always satisfied.",
    author: "Robert Thompson",
    location: "Chicago, IL"
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="mt-16 max-w-2xl w-full mx-auto">
      <div className="bg-white rounded-lg p-8 shadow-lg relative">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-900 font-semibold">{currentTestimonial.rating}</span>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4">{currentTestimonial.title}</h4>

        <p className="text-gray-600 leading-relaxed mb-6">
          "{currentTestimonial.text}"
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{currentTestimonial.author}</p>
            <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{testimonials.length}</span>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute -bottom-4 left-8 flex space-x-2">
          <button 
            onClick={prevTestimonial}
            className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}