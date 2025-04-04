"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const backgrounds = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    title: "SHOP BY SEASON",
    subtitle: "WINTER COLLECTION",
    description: "Discover our exclusive winter collection with elegant designs and premium fabrics",
    cta: "Shop Now",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    title: "NEW ARRIVALS",
    subtitle: "SPRING 2025",
    description: "Refresh your wardrobe with our latest spring collection featuring vibrant colors and patterns",
    cta: "Explore",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    title: "EXCLUSIVE DESIGNS",
    subtitle: "LUXURY COLLECTION",
    description: "Handcrafted luxury pieces for those special occasions that demand elegance",
    cta: "View Collection",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
          style={{ backgroundImage: `url(${bg.url})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-sm md:text-lg tracking-[0.3em] font-light mb-2">{bg.title}</h2>
            <h1 className="text-4xl md:text-7xl font-bold tracking-wider mb-4">{bg.subtitle}</h1>
            <p className="max-w-md text-sm md:text-base mb-8 opacity-90">{bg.description}</p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
            >
              {bg.cta}
            </Button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentSlide ? "bg-white w-4" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

