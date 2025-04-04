import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FlashSale() {
  return (
    <section className="py-6">
      <div className="container px-4 md:px-6">
        <Link href="#" className="block">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 transition-all duration-300">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mr-4">FLASH SALE %</h3>
                <p className="text-gray-700 text-sm md:text-base">Enjoy heavy huge discount on every prepaid orders</p>
              </div>
              <ArrowRight className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

