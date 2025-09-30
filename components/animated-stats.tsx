"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedStatsProps {
  stats: Array<{
    icon: React.ElementType
    number: string
    label: string
    color: string
  }>
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const targetNumbers = stats.map(stat => {
        const numStr = stat.number.replace(/[^0-9]/g, '')
        return parseInt(numStr) || 0
      })

      setAnimatedNumbers(new Array(stats.length).fill(0))

      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      targetNumbers.forEach((target, index) => {
        const increment = target / steps
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          const currentValue = Math.min(Math.round(increment * currentStep), target)
          
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev]
            newNumbers[index] = currentValue
            return newNumbers
          })

          if (currentStep >= steps) {
            clearInterval(timer)
          }
        }, stepDuration)
      })
    }
  }, [isVisible, stats])

  const formatNumber = (num: number, originalFormat: string) => {
    if (originalFormat.includes('k+')) {
      return `${Math.round(num / 1000)}k+`
    }
    return `${num}+`
  }

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">
            {isVisible ? formatNumber(animatedNumbers[index] || 0, stat.number) : '0+'}
          </h3>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}