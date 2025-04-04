import { Button } from "@/components/ui/button"

export default function FashionWeek() {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?q=80&w=1935&auto=format&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="rounded-full border-2 border-white w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold">STYLE</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="rounded-full border-2 border-white w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold">TREND</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1974&auto=format&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="rounded-full border-2 border-white w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold">SALE</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="rounded-full border-2 border-white w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold">NEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">THE ULTIMATE FASHION EXPERIENCE</h2>
            <div className="w-20 h-1 bg-rose-500 mb-6"></div>
            <p className="text-muted-foreground mb-6">
              Experience the pinnacle of fashion with our exclusive collections that blend traditional craftsmanship
              with contemporary design. Each piece is meticulously crafted to ensure the highest quality and unique
              style that sets you apart.
            </p>
            <p className="text-muted-foreground mb-8">
              Our designers draw inspiration from global fashion trends while honoring cultural heritage, creating
              pieces that are both timeless and modern.
            </p>
            <Button className="w-fit bg-rose-500 hover:bg-rose-600">Explore Collection</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

