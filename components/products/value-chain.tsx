import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Factory, Package, Truck, Globe, TrendingUp, Users, Award } from "lucide-react"

export function ValueChain() {
  const valueChainSteps = [
    {
      step: 1,
      icon: Sprout,
      title: "Cultivation & Harvesting",
      description: "Sustainable farming practices with optimal timing for maximum essential oil content",
      details: [
        "Organic cultivation methods",
        "Optimal harvest timing (early morning)",
        "Fresh biomass processing within 4 hours",
        "Quality control at source",
      ],
      location: "Bukeerere & Nakaseke Farms",
      timeframe: "Continuous cycle",
      valueAdd: "Premium raw material quality",
    },
    {
      step: 2,
      icon: Factory,
      title: "Processing & Extraction",
      description: "Advanced steam distillation technology ensuring maximum yield and purity",
      details: [
        "Steam distillation at controlled temperature",
        "Stainless steel equipment",
        "Real-time quality monitoring",
        "Dual product output (oil + hydrosol)",
      ],
      location: "On-site Processing Facility",
      timeframe: "4-6 hours per batch",
      valueAdd: "Raw material to premium product (10x value increase)",
    },
    {
      step: 3,
      icon: Package,
      title: "Quality Control & Packaging",
      description: "Rigorous testing and premium packaging for international markets",
      details: [
        "Chemical composition analysis",
        "Purity testing & certification",
        "Export-grade packaging",
        "Batch tracking & documentation",
      ],
      location: "Quality Control Laboratory",
      timeframe: "24-48 hours",
      valueAdd: "Market-ready premium products",
    },
    {
      step: 4,
      icon: Truck,
      title: "Distribution & Logistics",
      description: "Efficient distribution network for local and international markets",
      details: [
        "Temperature-controlled storage",
        "Export documentation",
        "Local distribution network",
        "International shipping partnerships",
      ],
      location: "Distribution Centers",
      timeframe: "On-demand delivery",
      valueAdd: "Market access & customer reach",
    },
    {
      step: 5,
      icon: Globe,
      title: "Market Applications",
      description: "Premium products serving diverse market segments globally",
      details: [
        "Aromatherapy & wellness markets",
        "Cosmetic industry applications",
        "Food & beverage flavoring",
        "Natural pesticide formulations",
      ],
      location: "Global Markets",
      timeframe: "Continuous market presence",
      valueAdd: "Premium pricing & brand recognition",
    },
  ]

  const synergies = [
    {
      icon: Users,
      title: "Cross-Sector Integration",
      description: "Waste from one operation becomes input for another, maximizing resource efficiency",
      examples: ["Organic waste → fertilizer", "Processing water → irrigation", "Biomass → animal feed"],
    },
    {
      icon: Factory,
      title: "Shared Infrastructure",
      description: "Processing facilities serve multiple product lines, reducing overhead costs",
      examples: ["Multi-purpose distillation", "Shared quality lab", "Common storage facilities"],
    },
    {
      icon: TrendingUp,
      title: "Risk Diversification",
      description: "Multiple revenue streams reduce dependency on single product markets",
      examples: ["Seasonal crop rotation", "Market price hedging", "Product portfolio balance"],
    },
  ]

  return (
    <section id="value-chain" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Integrated Value Chain
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our end-to-end value chain transforms raw agricultural materials into premium products, capturing value at
            every step while maintaining the highest quality standards for international markets.
          </p>
        </div>

        {/* Value Chain Steps */}
        <div className="space-y-8 mb-20">
          {valueChainSteps.map((step, index) => (
            <Card
              key={step.step}
              className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-2 bg-gradient-to-br from-emerald-500 to-blue-500 p-8 flex flex-col items-center justify-center text-white">
                  <div className="glass-card p-4 rounded-full mb-4 bg-white/20">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">0{step.step}</div>
                  <Badge className="bg-white/20 text-white border-white/30">Step {step.step}</Badge>
                </div>

                <div className="lg:col-span-10 p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="glass-card p-4 rounded-lg">
                          <h4 className="font-semibold mb-3 text-emerald-600">Process Details</h4>
                          <ul className="space-y-2 text-sm">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="glass-card p-4 rounded-lg">
                          <div className="space-y-3">
                            <div>
                              <span className="text-sm text-muted-foreground">Location:</span>
                              <p className="font-medium">{step.location}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Timeframe:</span>
                              <p className="font-medium">{step.timeframe}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Value Addition:</span>
                              <p className="font-medium text-emerald-600">{step.valueAdd}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Synergies Section */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600 mr-3" />
              Integrated Synergies
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our integrated approach creates powerful synergies across all operations, maximizing efficiency and
              creating competitive advantages that single-sector operations cannot achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {synergies.map((synergy, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <synergy.icon className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {synergy.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">{synergy.description}</p>
                <div className="space-y-2">
                  {synergy.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
