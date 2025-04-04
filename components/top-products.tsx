import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface TopProductsProps {
  products: Product[]
}

export default function TopProducts({ products }: TopProductsProps) {
  if (!products.length) return null

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Premium Jewelry</h2>
          <div className="w-20 h-1 bg-rose-500 mt-2 mb-4"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Exquisite designer pieces that add the perfect finishing touch to your ensemble
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-[200px] bg-gray-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href="#"
                      className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-rose-500 hover:text-white transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base truncate">{product.title}</h3>
                  <p className="text-rose-600 font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

