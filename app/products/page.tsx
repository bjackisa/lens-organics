import { Navigation } from "@/components/navigation"
import { ProductsHero } from "@/components/products/products-hero"
import { CurrentProducts } from "@/components/products/current-products"
import { ProductPipeline } from "@/components/products/product-pipeline"
import { ValueChain } from "@/components/products/value-chain"
import { QualityStandards } from "@/components/products/quality-standards"
import { MarketPositioning } from "@/components/products/market-positioning"

export default function ProductsPage() {
  return (
    <main>
      <Navigation />
      <ProductsHero />
      <CurrentProducts />
      <ValueChain />
      <ProductPipeline />
      <QualityStandards />
      <MarketPositioning />
    </main>
  )
}
