"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedNumberProps {
  endValue: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function AnimatedNumber({ 
  endValue, 
  suffix = "", 
  prefix = "", 
  className = "",
  duration = 2000 
}: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const updateValue = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentNumber = Math.floor(startValue + (endValue - startValue) * easedProgress)
      
      setCurrentValue(currentNumber)

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      }
    }

    requestAnimationFrame(updateValue)
  }, [isVisible, endValue, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}k`
    }
    return num.toString()
  }

  return (
    <div ref={ref} className={className}>
      {prefix}{formatNumber(currentValue)}{suffix}
    </div>
  )
}