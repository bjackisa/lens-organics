import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { OperationsPreview } from "@/components/operations-preview"
import { ProductsShowcase } from "@/components/products-showcase"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <OperationsPreview />
      <ProductsShowcase />
    </main>
  )
}
