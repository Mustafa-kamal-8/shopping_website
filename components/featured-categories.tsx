import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop",
    count: "120+ Products",
  },
  {
    id: 2,
    name: "Western Wear",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop",
    count: "85+ Products",
  },
  {
    id: 3,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    count: "64+ Products",
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
    count: "42+ Products",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Shop By Category</h2>
          <div className="w-20 h-1 bg-rose-500 mt-2 mb-4"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Browse our curated collections across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href="#" className="block">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 h-full">
                  <div className="relative h-[250px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-80">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

