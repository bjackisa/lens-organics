import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Droplets, Leaf, Shield, Sparkles, Beaker, Award, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export function ProductsShowcase() {
  const products = [
    {
      name: "Premium Lemongrass Essential Oil",
      description:
        "Pure essential oil extracted through advanced steam distillation, containing 75-85% citral and rich geraniol compounds",
      benefits: [
        "Antimicrobial & antifungal properties",
        "Natural insect repellent (DEET alternative)",
        "Therapeutic aromatherapy applications",
        "High-grade cosmetic formulations",
        "Food & beverage flavoring",
        "Industrial cleaning applications",
      ],
      image: "/images/processing-facility.png",
      status: "Active Production",
      compliance: "UNBS Protocol Ready",
      marketValue: "Premium Export Grade",
      composition: "Citral 75-85%, Geraniol 8-12%, Limonene 2-5%",
    },
    {
      name: "Lemongrass Hydrosol (Floral Water)",
      description:
        "Aromatic water co-produced during essential oil distillation, retaining water-soluble plant compounds",
      benefits: [
        "Natural facial toner & cleanser",
        "Mild antiseptic for wound care",
        "Food & beverage flavoring agent",
        "Natural preservative system",
        "Aromatherapy mist applications",
        "Cosmetic base ingredient",
      ],
      image: "/images/distillation-setup.png",
      status: "Active Production",
      compliance: "UNBS Protocol Ready",
      marketValue: "Cosmetic & Food Grade",
      composition: "pH 3.5-4.5, Natural antimicrobials, Trace essential oils",
    },
  ]

  const upcomingProducts = [
    {
      name: "Cold-Pressed Hass Avocado Oil",
      category: "Premium Cosmetics & Culinary",
      timeline: "Q2 2025",
      market: "Export-focused",
    },
    {
      name: "Virgin Macadamia Oil",
      category: "Luxury Beauty & Wellness",
      timeline: "Q3 2025",
      market: "High-end cosmetics",
    },
    {
      name: "Organic Plantain (Gonja) Flour",
      category: "Health Foods & Nutrition",
      timeline: "Q1 2025",
      market: "Regional & export",
    },
    {
      name: "Premium Oatmeal Products",
      category: "Functional Foods",
      timeline: "Q4 2025",
      market: "Health-conscious consumers",
    },
    {
      name: "Fresh Premium Eggs",
      category: "Organic Protein",
      timeline: "Active",
      market: "Local hospitality sector",
    },
    {
      name: "Fresh Catfish",
      category: "Sustainable Aquaculture",
      timeline: "Q2 2025",
      market: "Restaurant & retail",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Premium Value-Added Products
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We don't just grow—we transform. Our advanced processing capabilities convert raw agricultural materials
            into premium products that meet international quality standards and command premium market prices.
          </p>
        </div>

        {/* Current Products */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-emerald-500 text-white font-medium">{product.status}</Badge>
                  <Badge variant="outline" className="bg-white/95 text-emerald-700 border-emerald-200">
                    <Award className="w-3 h-3 mr-1" />
                    {product.compliance}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white">
                    <Globe className="w-3 h-3 mr-1" />
                    {product.marketValue}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl group-hover:text-emerald-600 transition-colors">
                  <div className="glass-card p-2 rounded-lg mr-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <Droplets className="h-5 w-5 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-2 text-emerald-600">
                    <Beaker className="h-4 w-4 mr-2" />
                    Technical Composition
                  </h4>
                  <p className="text-sm text-muted-foreground">{product.composition}</p>
                </div>

                <div>
                  <h4 className="font-semibold flex items-center mb-3">
                    <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                    Market Applications & Benefits
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-sm">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-10 rounded-2xl mb-12">
          <div className="text-center mb-10">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-emerald-600 mr-3" />
              Product Development Pipeline
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our strategic product roadmap positions us to capture high-value market segments across cosmetics, health
              foods, and premium agricultural products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProducts.map((product, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                  <Leaf className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      product.timeline === "Active"
                        ? "border-emerald-500 text-emerald-600"
                        : "border-blue-500 text-blue-600"
                    }`}
                  >
                    {product.timeline}
                  </Badge>
                </div>
                <div className="font-semibold text-base mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <div className="text-xs text-emerald-600 font-medium">Target: {product.market}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl mb-12 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600 mr-3" />
              Quality Assurance & Standards
            </h3>
            <p className="text-muted-foreground mb-6 text-lg max-w-3xl mx-auto leading-relaxed">
              Our products are developed following UNBS protocols, ensuring that when you partner with us, you're
              sourcing products that can achieve full certification and meet international export standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                ISO Quality Standards
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Export Documentation Ready
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Traceability Systems
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                GMP Compliant Processing
              </Badge>
            </div>
          </div>
        </div>

        <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/products">
                  <Sparkles className="mr-2 h-4 w-4" />
                  View Complete Product Catalog
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  )
}
