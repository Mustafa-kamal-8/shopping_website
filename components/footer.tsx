import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ELEGANCE</h3>
            <p className="text-gray-300 mb-4">
              Premium ethnic and designer wear for all occasions. Quality craftsmanship meets contemporary design.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-rose-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-rose-400" />
                <span className="text-gray-300">support@elegancefashion.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-rose-400" />
                <span className="text-gray-300">123 Fashion Street, New York, NY 10001</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Ethnic Wear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Western Wear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Orders History
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Refer a Friend
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elegance Fashion. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=24&width=38" alt="Visa" className="h-6" />
            <img src="/placeholder.svg?height=24&width=38" alt="Mastercard" className="h-6" />
            <img src="/placeholder.svg?height=24&width=38" alt="PayPal" className="h-6" />
            <img src="/placeholder.svg?height=24&width=38" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

