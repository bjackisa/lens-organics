import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Apple, Fish, Wheat, Egg, Droplets, TrendingUp, Calendar, Globe } from "lucide-react"

export function ProductPipeline() {
  const pipelineProducts = [
    {
      name: "Cold-Pressed Hass Avocado Oil",
      icon: TreePine,
      category: "Premium Oils",
      timeline: "Q2 2025",
      status: "Development Phase",
      statusColor: "bg-blue-500",
      description: "Virgin avocado oil for cosmetic and culinary applications with high oleic acid content",
      marketValue: "UGX 92,000-147,000/liter",
      applications: [
        "Premium cosmetic formulations",
        "High-end culinary applications",
        "Natural skincare products",
        "Massage & aromatherapy oils",
      ],
      technicalSpecs: {
        extraction: "Cold-pressed, unrefined",
        composition: "Oleic acid 60-70%, Palmitic acid 10-15%",
        applications: "Cosmetic & food grade",
        shelfLife: "18-24 months",
      },
      marketSegments: ["Luxury cosmetics", "Gourmet food", "Natural wellness"],
    },
    {
      name: "Virgin Macadamia Oil",
      icon: TreePine,
      category: "Luxury Oils",
      timeline: "Q3 2025",
      status: "Planning Phase",
      statusColor: "bg-orange-500",
      description: "Premium macadamia oil with exceptional stability and skin-nourishing properties",
      marketValue: "UGX 166,000-258,000/liter",
      applications: [
        "High-end cosmetic formulations",
        "Anti-aging skincare products",
        "Premium cooking oil",
        "Hair care treatments",
      ],
      technicalSpecs: {
        extraction: "Cold-pressed virgin oil",
        composition: "Palmitoleic acid 15-25%, Oleic acid 55-65%",
        stability: "Exceptional oxidative stability",
        absorption: "Rapid skin absorption",
      },
      marketSegments: ["Luxury beauty", "Premium food", "Professional spa"],
    },
    {
      name: "Organic Plantain (Gonja) Flour",
      icon: Apple,
      category: "Health Foods",
      timeline: "Q1 2025",
      status: "Infrastructure Ready",
      statusColor: "bg-emerald-500",
      description: "Nutritious gluten-free flour from premium plantain varieties",
      marketValue: "UGX 11,000-18,500/kg",
      applications: [
        "Gluten-free baking applications",
        "Baby food formulations",
        "Health food products",
        "Traditional food preparations",
      ],
      technicalSpecs: {
        processing: "Dehydration & milling",
        nutrition: "High potassium, vitamin B6, fiber",
        glutenFree: "Naturally gluten-free",
        shelfLife: "12-18 months",
      },
      marketSegments: ["Health foods", "Gluten-free market", "Baby nutrition"],
    },
    {
      name: "Premium Oatmeal Products",
      icon: Wheat,
      category: "Functional Foods",
      timeline: "Q4 2025",
      status: "Development Phase",
      statusColor: "bg-blue-500",
      description: "Nutritious oat products for health-conscious consumers",
      marketValue: "UGX 14,700-29,500/kg",
      applications: ["Breakfast cereals", "Functional food ingredients", "Health supplements", "Bakery applications"],
      technicalSpecs: {
        varieties: "High beta-glucan content",
        processing: "Minimal processing for nutrition retention",
        nutrition: "High fiber, protein, minerals",
        forms: "Rolled oats, flour, bran",
      },
      marketSegments: ["Health foods", "Breakfast market", "Functional nutrition"],
    },
    {
      name: "Fresh Premium Eggs",
      icon: Egg,
      category: "Organic Protein",
      timeline: "Active Production",
      status: "Market Ready",
      statusColor: "bg-emerald-500",
      description: "Free-range eggs from organically-fed layer chickens",
      marketValue: "UGX 1,100-1,850/egg",
      applications: [
        "Premium retail markets",
        "Hospitality sector supply",
        "Organic food chains",
        "Direct consumer sales",
      ],
      technicalSpecs: {
        production: "Free-range systems",
        feed: "Organic feed integration",
        welfare: "High animal welfare standards",
        freshness: "Farm-to-market within 48 hours",
      },
      marketSegments: ["Premium retail", "Hospitality", "Organic markets"],
    },
    {
      name: "Fresh Catfish",
      icon: Fish,
      category: "Sustainable Aquaculture",
      timeline: "Q2 2025",
      status: "Infrastructure Complete",
      statusColor: "bg-yellow-500",
      description: "Sustainably farmed catfish for restaurant and retail markets",
      marketValue: "UGX 14,700-22,000/kg",
      applications: [
        "Restaurant & hospitality supply",
        "Fresh fish retail markets",
        "Processing for value-added products",
        "Export to regional markets",
      ],
      technicalSpecs: {
        systems: "Sustainable pond aquaculture",
        species: "African catfish (Clarias gariepinus)",
        sustainability: "Eco-friendly farming practices",
        processing: "Fresh & processed options",
      },
      marketSegments: ["Restaurant sector", "Fresh retail", "Regional export"],
    },
    {
      name: "Premium Robusta Coffee Beans",
      icon: TreePine,
      category: "Specialty Coffee",
      timeline: "Q3 2026",
      status: "Early Development",
      statusColor: "bg-orange-500",
      description: "Small-scale premium robusta coffee beans from 3-acre cultivation for specialty coffee markets",
      marketValue: "UGX 18,500-37,000/kg",
      applications: [
        "Specialty coffee roasters",
        "Premium coffee blends",
        "Direct trade partnerships",
        "Local coffee shop supply",
      ],
      technicalSpecs: {
        variety: "Premium robusta variety",
        cultivation: "3-acre small-scale operation",
        processing: "Currently raw bean sales",
        quality: "Specialty grade potential",
      },
      marketSegments: ["Specialty coffee", "Local roasters", "Premium blends"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6">Product Development Pipeline</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our strategic product roadmap positions us to capture high-value market segments across multiple industries.
            Each product leverages our integrated farming operations and processing capabilities to create premium
            offerings for both local and international markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {pipelineProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <product.icon className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`${product.statusColor} text-white font-medium`}>{product.status}</Badge>
                    <Badge variant="outline" className="border-blue-500 text-blue-600 text-xs">
                      {product.timeline}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{product.name}</CardTitle>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-200">
                    {product.marketValue}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-emerald-600">
                    <Globe className="h-4 w-4 mr-2" />
                    Market Applications
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {product.applications.map((application, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-blue-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="font-medium text-right max-w-[60%]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-purple-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Target Market Segments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.marketSegments.map((segment, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-purple-200 text-purple-600">
                        {segment}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-10 rounded-2xl text-center">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
            <Droplets className="h-6 w-6 text-emerald-600 mr-3" />
            Strategic Product Roadmap
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Our product pipeline represents a carefully planned expansion strategy that leverages our existing
            infrastructure and expertise while targeting high-growth market segments. Each product builds on our core
            competencies in sustainable agriculture and value-added processing.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Market Diversification</h4>
              <p className="text-sm text-muted-foreground">
                Multiple product lines reduce market risk and create stable revenue streams
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Globe className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Export Potential</h4>
              <p className="text-sm text-muted-foreground">
                Premium products positioned for international markets and export growth
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Calendar className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Phased Launch</h4>
              <p className="text-sm text-muted-foreground">
                Strategic timing ensures resource optimization and market readiness
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Droplets className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Value Integration</h4>
              <p className="text-sm text-muted-foreground">
                Each product leverages existing infrastructure and operational synergies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
