import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Truck, Globe, Users, TrendingUp, Zap, Target, BarChart } from "lucide-react"

export function BusinessModel() {
  const revenueStreams = [
    {
      category: "Premium Essential Products",
      icon: Factory,
      status: "Active",
      statusColor: "bg-emerald-500",
      products: ["Lemongrass essential oil", "Lemongrass hydrosol", "Custom formulations"],
      marketSize: "UGX 1.8B-5.5B annually", // converted from USD to UGX
      margins: "60-70% gross margin",
      timeline: "Immediate scaling opportunity",
    },
    {
      category: "Fresh Agricultural Products",
      icon: Truck,
      status: "Active",
      statusColor: "bg-emerald-500",
      products: ["Premium eggs", "Plantain (gonja)", "Future catfish production"],
      marketSize: "UGX 740M-2.2B annually", // converted from USD to UGX
      margins: "40-50% gross margin",
      timeline: "Continuous production",
    },
    {
      category: "Value-Added Oils",
      icon: Globe,
      status: "Pipeline",
      statusColor: "bg-blue-500",
      products: ["Avocado oil", "Macadamia oil", "Specialty formulations"],
      marketSize: "UGX 1.1B-2.9B annually", // converted from USD to UGX
      margins: "50-65% gross margin",
      timeline: "Q2-Q3 2025 launch",
    },
    {
      category: "Processed Foods",
      icon: Users,
      status: "Development",
      statusColor: "bg-orange-500",
      products: ["Plantain flour", "Oatmeal products", "Health food ingredients"],
      marketSize: "UGX 550M-1.5B annually", // converted from USD to UGX
      margins: "35-45% gross margin",
      timeline: "Q4 2025 onwards",
    },
  ]

  const operationalModel = [
    {
      icon: Factory,
      title: "Integrated Production",
      description: "End-to-end control from cultivation to final product",
      benefits: ["Quality control", "Cost efficiency", "Supply chain reliability"],
      impact: "30-40% cost advantage over competitors",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Existing systems designed for rapid expansion",
      benefits: ["Proven processes", "Established quality systems", "Ready for scaling"],
      impact: "Quick response to increased demand",
    },
    {
      icon: Globe,
      title: "Market Diversification",
      description: "Multiple market channels reduce dependency risk",
      benefits: ["Local B2B markets", "Export opportunities", "Direct sales channels"],
      impact: "Stable revenue across market cycles",
    },
    {
      icon: Zap,
      title: "Operational Synergies",
      description: "Cross-sector integration maximizes resource efficiency",
      benefits: ["Shared infrastructure", "Waste utilization", "Resource optimization"],
      impact: "Enhanced profitability and sustainability",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Business Model & Revenue Streams
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our diversified business model creates multiple revenue streams with varying timelines and risk profiles,
            ensuring stable cash flow while maximizing growth potential across premium market segments.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {revenueStreams.map((stream, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <stream.icon className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <Badge className={`${stream.statusColor} text-white font-medium`}>{stream.status}</Badge>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {stream.category}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-emerald-600">Product Portfolio</h4>
                  <ul className="space-y-2 text-sm">
                    {stream.products.map((product, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <BarChart className="w-4 h-4 mr-2" />
                      Market Size
                    </div>
                    <p className="font-medium text-emerald-600">{stream.marketSize}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Profit Margins
                    </div>
                    <p className="font-medium">{stream.margins}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Target className="w-4 h-4 mr-2" />
                      Timeline
                    </div>
                    <p className="font-medium">{stream.timeline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operational Model */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Zap className="h-6 w-6 text-emerald-600 mr-3" />
              Operational Excellence Model
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our operational model is designed for efficiency, scalability, and sustainable competitive advantage
              through integrated operations and strategic resource utilization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalModel.map((model, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <model.icon className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {model.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">{model.description}</p>

                <div className="space-y-2 mb-4">
                  {model.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="glass-card p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <p className="text-xs font-medium text-center text-emerald-600">{model.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
