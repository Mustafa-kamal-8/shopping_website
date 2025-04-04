import HeroSection from "@/components/hero-section"
import ProductCarousel from "@/components/product-carousel"
import FeaturedCategories from "@/components/featured-categories"
import PromotionalGrid from "@/components/promotional-grid"
import FashionWeek from "@/components/fashion-week"
import FlashSale from "@/components/flash-sale"
import TopProducts from "@/components/top-products"
import Newsletter from "@/components/newsletter"

export default async function Home() {
  // Fetch products from Fake Store API
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => [])

  // Filter products by categories for different sections
  const jewelryProducts = products.filter((product) => product.category === "jewelery") || []
  const clothingProducts =
    products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing") || []

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductCarousel products={clothingProducts.slice(0, 8)} />
      <TopProducts products={jewelryProducts.slice(0, 4)} />
      <FeaturedCategories />
      <PromotionalGrid />
      <FashionWeek />
      <FlashSale />
      <Newsletter />
    </main>
  )
}

