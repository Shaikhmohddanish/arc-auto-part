"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"

interface PartsSearchFormProps {
  variant?: "dark" | "light"
  className?: string
  showLabels?: boolean
  title?: string
  subtitle?: string
}

export function PartsSearchForm({ 
  variant = "light", 
  className = "",
  showLabels = false,
  title = "Find Your Right Part",
  subtitle = "Select your vehicle details to find the perfect auto part"
}: PartsSearchFormProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>("")
  const [selectedYear, setSelectedYear] = useState<string>("")
  const [selectedModel, setSelectedModel] = useState<string>("")
  const [selectedPart, setSelectedPart] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  const availableModels = selectedBrand ? brandModels[selectedBrand as keyof typeof brandModels] || [] : []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      year: selectedYear,
      brand: selectedBrand,
      model: selectedModel,
      part: selectedPart,
      firstName,
      lastName,
      email,
      phone,
    })
  }

  const isDark = variant === "dark"
  
  const containerClasses = isDark 
    ? "bg-black/80 backdrop-blur-sm border border-gray-700 text-white" 
    : "bg-white border border-gray-200 text-gray-900"
    
  const selectClasses = isDark
    ? "bg-gray-800 border-gray-600 text-white"
    : "bg-white border-gray-300"
    
  const inputClasses = isDark
    ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 h-11 sm:h-10"
    : "bg-white border-gray-300 placeholder:text-gray-500 h-11 sm:h-10"
    
  const labelClasses = isDark ? "text-white" : "text-gray-900"
  const textClasses = isDark ? "text-gray-300" : "text-gray-600"
  const disclaimerClasses = isDark ? "text-gray-400" : "text-gray-500"

  return (
    <div className={`rounded-lg p-4 sm:p-6 lg:p-8 ${containerClasses} ${className}`}>
      <div className="text-center mb-6 sm:mb-8">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
        <p className={`text-sm sm:text-base ${textClasses}`}>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Vehicle Selection Row */}
        {/* Mobile: 2 rows, 2 columns each. Tablet/Desktop: 1 row, 4 columns. */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              {showLabels && (
                <Label htmlFor="year" className={`${labelClasses} font-medium text-sm`}>
                  Select Year
                </Label>
              )}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className={`${selectClasses} h-11`}>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className={isDark ? "bg-gray-800 border-gray-600" : "bg-white"}>
                  {years.map((year) => (
                    <SelectItem 
                      key={year} 
                      value={year.toString()} 
                      className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              {showLabels && (
                <Label htmlFor="make" className={`${labelClasses} font-medium text-sm`}>
                  Select Make
                </Label>
              )}
              <Select
                value={selectedBrand}
                onValueChange={(value) => {
                  setSelectedBrand(value)
                  setSelectedModel("") // Reset model when brand changes
                }}
              >
                <SelectTrigger className={`${selectClasses} h-11`}>
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                  {Object.keys(brandModels).map((brand) => (
                    <SelectItem 
                      key={brand} 
                      value={brand} 
                      className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                    >
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              {showLabels && (
                <Label htmlFor="model" className={`${labelClasses} font-medium text-sm`}>
                  Select Model
                </Label>
              )}
              <Select value={selectedModel} onValueChange={setSelectedModel} disabled={!selectedBrand}>
                <SelectTrigger className={`${selectClasses} h-11`}>
                  <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                  {availableModels.map((model) => (
                    <SelectItem 
                      key={model} 
                      value={model} 
                      className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                    >
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              {showLabels && (
                <Label htmlFor="part" className={`${labelClasses} font-medium text-sm`}>
                  Select Part
                </Label>
              )}
              <Select value={selectedPart} onValueChange={setSelectedPart}>
                <SelectTrigger className={`${selectClasses} h-11`}>
                  <SelectValue placeholder="Select Part" />
                </SelectTrigger>
                <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                  {parts.map((part, index) => (
                    <SelectItem 
                      key={index} 
                      value={part} 
                      className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                    >
                      {part}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Tablet/Desktop: 1 row, 4 columns. Hidden on mobile. */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="year" className={`${labelClasses} font-medium text-sm`}>
                Select Year
              </Label>
            )}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className={`${selectClasses} h-11 sm:h-10`}>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className={isDark ? "bg-gray-800 border-gray-600" : "bg-white"}>
                {years.map((year) => (
                  <SelectItem 
                    key={year} 
                    value={year.toString()} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="make" className={`${labelClasses} font-medium text-sm`}>
                Select Make
              </Label>
            )}
            <Select
              value={selectedBrand}
              onValueChange={(value) => {
                setSelectedBrand(value)
                setSelectedModel("") // Reset model when brand changes
              }}
            >
              <SelectTrigger className={`${selectClasses} h-11 sm:h-10`}>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                {Object.keys(brandModels).map((brand) => (
                  <SelectItem 
                    key={brand} 
                    value={brand} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="model" className={`${labelClasses} font-medium text-sm`}>
                Select Model
              </Label>
            )}
            <Select value={selectedModel} onValueChange={setSelectedModel} disabled={!selectedBrand}>
              <SelectTrigger className={`${selectClasses} h-11 sm:h-10`}>
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                {availableModels.map((model) => (
                  <SelectItem 
                    key={model} 
                    value={model} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="part" className={`${labelClasses} font-medium text-sm`}>
                Select Part
              </Label>
            )}
            <Select value={selectedPart} onValueChange={setSelectedPart}>
              <SelectTrigger className={`${selectClasses} h-11 sm:h-10`}>
                <SelectValue placeholder="Select Part" />
              </SelectTrigger>
              <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                {parts.map((part, index) => (
                  <SelectItem 
                    key={index} 
                    value={part} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {part}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Contact Information Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="firstName" className={`${labelClasses} font-medium text-sm`}>
                First Name
              </Label>
            )}
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="lastName" className={`${labelClasses} font-medium text-sm`}>
                Last Name
              </Label>
            )}
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="email" className={`${labelClasses} font-medium text-sm`}>
                Your Email
              </Label>
            )}
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            {showLabels && (
              <Label htmlFor="phone" className={`${labelClasses} font-medium text-sm`}>
                Phone No
              </Label>
            )}
            <Input
              id="phone"
              type="tel"
              placeholder="xxx-xxx-xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="space-y-3 sm:space-y-4">
          <p className={`text-xs sm:text-sm ${disclaimerClasses} text-center px-2`}>
            By submitting this form, you agree to receive text messages at anytime
          </p>

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md touch-manipulation"
          >
            Get Free Quote
          </Button>
        </div>
      </form>
    </div>
  )
}