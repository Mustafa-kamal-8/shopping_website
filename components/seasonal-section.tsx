"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

// Product data
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1974&auto=format&fit=crop",
    title: "Fancy Designer Finger Rings",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop",
    title: "Fancy Designer Finger Rings",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    title: "Fancy Designer Finger Rings",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1970&auto=format&fit=crop",
    title: "Fancy Designer Finger Rings",
  },
]

// Carousel items
const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583916793565-0d54944bbc5f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614093302611-8efc4de12e42?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
  },
]

export default function SeasonalSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * (carouselRef.current.scrollWidth / carouselItems.length)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % carouselItems.length
    setActiveIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length
    setActiveIndex(newIndex)
    scrollToIndex(newIndex)
  }

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="w-full">
      {/* Hero Banner with Winter Theme */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1482932542078-015eaaf3c2e2?q=80&w=2070&auto=format&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-lg md:text-2xl tracking-[0.3em] font-light mb-2">SHOP BY</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider">SEASON</h1>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="relative -mt-16 md:-mt-24 lg:-mt-32 px-4 md:px-8 lg:px-16">
        <div className="relative">
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] h-[450px] snap-center p-2 flex-shrink-0"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Fashion item ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 mr-4 overflow-hidden rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

