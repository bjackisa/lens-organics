import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, Beaker, Award, Globe, TrendingUp, Shield, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CurrentProducts() {
  const products = [
    {
      name: "Premium Lemongrass Essential Oil",
      category: "Essential Oils",
      status: "Active Production",
      statusColor: "bg-emerald-500",
      description:
        "Pure essential oil extracted through advanced steam distillation, containing 75-85% citral with rich geraniol compounds for premium applications.",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205309/WhatsApp_Image_2025-08-25_at_5.26.38_PM_exhtlk.jpg",
      technicalSpecs: {
        composition: "Citral 75-85%, Geraniol 8-12%, Limonene 2-5%, Myrcene 1-3%",
        extractionMethod: "Steam distillation at controlled temperature",
        purity: "99.5% pure essential oil",
        yield: "0.8-1.2% from fresh biomass",
      },
      applications: [
        "Aromatherapy & wellness products",
        "Natural insect repellent formulations",
        "Cosmetic & personal care ingredients",
        "Food & beverage flavoring",
        "Industrial cleaning applications",
        "Pharmaceutical intermediates",
      ],
      marketSegments: [
        "Export to European aromatherapy markets",
        "Local cosmetic manufacturing",
        "International food flavoring industry",
        "Natural pesticide formulations",
      ],
      compliance: "UNBS Protocol Ready - Certification pathway established",
      pricing: "Premium export grade - UGX 165,000-240,000/kg FOB", // converted from USD to UGX
    },
    {
      name: "Lemongrass Hydrosol (Floral Water)",
      category: "Hydrosols",
      status: "Active Production",
      statusColor: "bg-emerald-500",
      description:
        "Aromatic water co-produced during essential oil distillation, retaining water-soluble plant compounds with natural antimicrobial properties.",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205307/WhatsApp_Image_2025-08-25_at_5.26.43_PM_aukhae.jpg",
      technicalSpecs: {
        composition: "Water-soluble aromatics, trace essential oils, natural acids",
        pH: "3.5-4.5 (naturally acidic)",
        preservation: "Self-preserving due to natural antimicrobials",
        shelfLife: "24 months when properly stored",
      },
      applications: [
        "Natural facial toner & cleanser",
        "Mild antiseptic for wound care",
        "Food & beverage flavoring agent",
        "Natural preservative system",
        "Aromatherapy mist applications",
        "Cosmetic base ingredient",
      ],
      marketSegments: [
        "Natural cosmetics industry",
        "Organic food & beverage sector",
        "Wellness & spa applications",
        "Natural healthcare products",
      ],
      compliance: "UNBS Protocol Ready - Food & cosmetic grade standards",
      pricing: "Premium grade - UGX 30,000-44,000/liter wholesale", // converted from USD to UGX
    },
  ]

  return (
    <section id="current-products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Current Product Portfolio
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our flagship products demonstrate our commitment to quality and our capability to transform raw agricultural
            materials into premium products that meet international standards and command premium market prices.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className={`${product.statusColor} text-white font-medium`}>{product.status}</Badge>
                    <Badge variant="outline" className="bg-white/95 text-emerald-700 border-emerald-200">
                      <Award className="w-3 h-3 mr-1" />
                      Export Grade
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{product.category}</p>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="flex items-center text-2xl lg:text-3xl group-hover:text-emerald-600 transition-colors">
                      <div className="glass-card p-3 rounded-lg mr-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                        <Droplets className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                      </div>
                      {product.name}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-8">
                    <div className="glass-card p-6 rounded-lg">
                      <h4 className="font-semibold flex items-center mb-4 text-emerald-600">
                        <Beaker className="h-5 w-5 mr-2" />
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        {Object.entries(product.technicalSpecs).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <span className="font-medium text-muted-foreground capitalize mb-1">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="leading-relaxed">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-lg">
                      <h4 className="font-semibold flex items-center mb-4 text-blue-600">
                        <Sparkles className="h-5 w-5 mr-2" />
                        Market Applications
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-sm">
                        {product.applications.map((application, idx) => (
                          <li key={idx} className="flex items-start">
                            <Shield className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{application}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-card p-6 rounded-lg">
                      <h4 className="font-semibold flex items-center mb-4 text-purple-600">
                        <Globe className="h-5 w-5 mr-2" />
                        Target Market Segments
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {product.marketSegments.map((segment, idx) => (
                          <li key={idx} className="flex items-start">
                            <TrendingUp className="h-3 w-3 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{segment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="glass-card p-4 rounded-lg">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Award className="w-4 h-4 mr-2" />
                          Quality Compliance
                        </div>
                        <p className="text-sm font-medium">{product.compliance}</p>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Market Pricing
                        </div>
                        <p className="text-sm font-medium text-emerald-600">{product.pricing}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-10 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Ready for Bulk Orders</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our current products demonstrate proven market demand, established quality standards, and scalable
              production processes. We're prepared to expand production capacity and fulfill wholesale orders for both
              local and international markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Request Wholesale Info
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 bg-transparent"
              >
                <Link href="#value-chain">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Value Chain
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
