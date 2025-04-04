import { Button } from "@/components/ui/button"

export default function PromotionalGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg md:col-span-1 h-[400px] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">The Ultimate Fashion</h3>
              <p className="mb-4 opacity-90">Discover our premium collection of designer wear</p>
              <Button
                variant="outline"
                className="w-fit bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
              >
                Shop Now
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg md:col-span-2 h-[400px] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold mb-2">FASHION WEEK</h3>
                <div className="w-20 h-1 bg-rose-500 mb-4"></div>
                <h2 className="text-5xl font-bold mb-4">2025</h2>
                <Button
                  variant="outline"
                  className="w-fit bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
                >
                  View Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

