'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Droplets, Leaf, Shield, Sparkles, Beaker, Award, Globe, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useParallax"

export function ProductsShowcase() {
  const { elementRef, isVisible } = useScrollAnimation()
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
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205616/WhatsApp_Image_2025-08-25_at_4.21.49_PM_cfkipt.jpg",
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
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.04.29_PM_maaix6.jpg",
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
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`}>
            Premium Value-Added Products
          </h2>
          <p className={`text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            We don't just grow—we transform. Our advanced processing capabilities convert raw agricultural materials
            into premium products that meet international quality standards and command premium market prices.
          </p>
        </div>

        {/* Current Products */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {products.map((product, index) => (
            <Card key={index} className={`overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 group ${isVisible ? 'animate-float-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: isVisible ? `${0.1 * (index + 1)}s` : undefined }}>
              <div className="aspect-video relative overflow-hidden bg-gray-700">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex flex-col gap-2 transform transition-transform duration-300 group-hover:translate-y-1">
                  <Badge className="bg-emerald-500/95 text-white font-medium backdrop-blur-sm">{product.status}</Badge>
                  <Badge variant="outline" className="bg-white/95 text-emerald-700 border-emerald-200 backdrop-blur-sm">
                    <Award className="w-3 h-3 mr-1" />
                    {product.compliance}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Badge className="bg-blue-500/95 text-white backdrop-blur-sm">
                    <Globe className="w-3 h-3 mr-1" />
                    {product.marketValue}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl group-hover:text-emerald-600 transition-colors">
                  <div className="glass-card p-2 rounded-lg mr-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-all duration-300 transform group-hover:scale-110">
                    <Droplets className="h-5 w-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                  </div>
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card-enhanced p-4 rounded-lg group-hover:bg-emerald-100/50 dark:group-hover:bg-emerald-900/20 transition-colors duration-300">
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
                      <li key={idx} className="flex items-start hover:translate-x-1 transition-transform duration-200">
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

        <div className={`glass-card-enhanced p-10 rounded-2xl mb-12 transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 flex items-center justify-center group">
              <TrendingUp className="h-6 w-6 text-emerald-600 mr-3 group-hover:rotate-12 transition-transform duration-300" />
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
                className={`glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 group hover:scale-105 ${isVisible ? 'animate-float-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${0.02 * (index + 1)}s` : undefined }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Leaf className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 group-hover:rotate-12 transition-all duration-300" />
                  <Badge
                    variant="outline"
                    className={`text-xs transition-all duration-300 ${
                      product.timeline === "Active"
                        ? "border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30"
                        : "border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950/30"
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

        <div className={`glass-card-enhanced p-8 rounded-2xl mb-12 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/30 dark:to-blue-950/30 transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 flex items-center justify-center group">
              <Award className="h-6 w-6 text-emerald-600 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              Quality Assurance & Standards
            </h3>
            <p className="text-muted-foreground mb-6 text-lg max-w-3xl mx-auto leading-relaxed">
              Our products are developed following UNBS protocols, ensuring that when you partner with us, you're
              sourcing products that can achieve full certification and meet international export standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                ISO Quality Standards
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                Export Documentation Ready
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                Traceability Systems
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                GMP Compliant Processing
              </Badge>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 group/btn relative overflow-hidden">
                <Link href="/products" className="flex items-center">
                  <span className="relative z-10">
                    <Sparkles className="mr-2 h-4 w-4 inline transition-transform group-hover/btn:rotate-180 duration-300" />
                    View Complete Product Catalog
                  </span>
                  <div className="absolute inset-0 bg-emerald-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 z-0" />
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  )
}
