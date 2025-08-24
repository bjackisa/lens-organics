import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, BarChart, Target, Zap, Globe } from "lucide-react"

export function FinancialProjections() {
  const projections = [
    {
      year: "2025",
      status: "Current Year",
      statusColor: "bg-emerald-500",
      revenue: "UGX 550M-920M",
      products: "Essential oils, eggs, plantain",
      keyMilestones: ["Established production", "Market validation", "Quality systems"],
      growth: "Foundation year",
    },
    {
      year: "2026",
      status: "Expansion Year",
      statusColor: "bg-blue-500",
      revenue: "UGX 1.1B-1.8B",
      products: "Added avocado oil, catfish, expanded essential oils",
      keyMilestones: ["New product launches", "Increased capacity", "Export market entry"],
      growth: "100-120% growth",
    },
    {
      year: "2027",
      status: "Scale Year",
      statusColor: "bg-purple-500",
      revenue: "UGX 2.2B-3.3B",
      products: "Full product portfolio, premium positioning",
      keyMilestones: ["Market leadership", "International expansion", "Brand recognition"],
      growth: "80-100% growth",
    },
    {
      year: "2028",
      status: "Maturity Year",
      statusColor: "bg-orange-500",
      revenue: "UGX 3.3B-5.5B",
      products: "Diversified premium products, value-added services",
      keyMilestones: ["Market dominance", "Sustainable profitability", "Strategic partnerships"],
      growth: "50-70% growth",
    },
  ]

  const keyMetrics = [
    {
      icon: DollarSign,
      title: "Revenue Growth",
      current: "UGX 550M-920M (2025)",
      projected: "UGX 3.3B-5.5B (2028)",
      cagr: "95-110% CAGR",
      description: "Aggressive but achievable growth through product diversification and market expansion",
    },
    {
      icon: BarChart,
      title: "Gross Margins",
      current: "55-65% (current products)",
      projected: "50-60% (blended portfolio)",
      cagr: "Stable margins",
      description: "Premium positioning maintains healthy margins across product portfolio",
    },
    {
      icon: Target,
      title: "Market Share",
      current: "Local niche player",
      projected: "Regional market leader",
      cagr: "Market expansion",
      description: "Growth from local operations to regional market leadership in premium segments",
    },
    {
      icon: Globe,
      title: "Export Revenue",
      current: "0% (domestic focus)",
      projected: "40-50% (export markets)",
      cagr: "International growth",
      description: "Significant export revenue from premium essential oils and value-added products",
    },
  ]

  const investmentUse = [
    {
      category: "Production Scaling",
      percentage: "40%",
      amount: "UGX 740M-1.5B",
      description: "Expand processing capacity, additional equipment, increased cultivation area",
      impact: "3-5x production capacity increase",
    },
    {
      category: "Product Development",
      percentage: "25%",
      amount: "UGX 460M-920M",
      description: "New product lines, R&D, quality certifications, market testing",
      impact: "4-6 new premium product lines",
    },
    {
      category: "Market Development",
      percentage: "20%",
      amount: "UGX 370M-740M",
      description: "Export market entry, branding, sales channels, marketing initiatives",
      impact: "International market access",
    },
    {
      category: "Working Capital",
      percentage: "15%",
      amount: "UGX 280M-550M",
      description: "Inventory, accounts receivable, operational cash flow support",
      impact: "Smooth operations during growth",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6">Financial Projections & Investment Use</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our financial projections are based on conservative market assumptions, proven operational capabilities, and
            strategic growth initiatives that position Lens Organics for sustainable long-term success.
          </p>
        </div>

        {/* Financial Projections Timeline */}
        <div className="space-y-8 mb-20">
          {projections.map((projection, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-2 bg-gradient-to-br from-emerald-500 to-blue-500 p-8 flex flex-col items-center justify-center text-white">
                  <div className="text-3xl font-bold mb-2">{projection.year}</div>
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">{projection.status}</Badge>
                </div>

                <div className="lg:col-span-10 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl group-hover:text-emerald-600 transition-colors">
                        Revenue: {projection.revenue}
                      </CardTitle>
                      <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                        {projection.growth}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="glass-card p-4 rounded-lg">
                          <h4 className="font-semibold mb-3 text-emerald-600">Product Portfolio</h4>
                          <p className="text-sm leading-relaxed">{projection.products}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="glass-card p-4 rounded-lg">
                          <h4 className="font-semibold mb-3 text-blue-600">Key Milestones</h4>
                          <ul className="space-y-2 text-sm">
                            {projection.keyMilestones.map((milestone, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                                <span className="leading-relaxed">{milestone}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <metric.icon className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <Badge className="bg-emerald-500 text-white font-medium">{metric.cagr}</Badge>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{metric.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{metric.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="glass-card p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Current:</span>
                      <span className="font-medium">{metric.current}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Projected (2028):</span>
                      <span className="font-medium text-emerald-600">{metric.projected}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Use */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Zap className="h-6 w-6 text-emerald-600 mr-3" />
              Investment Capital Allocation
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Strategic allocation of investment capital across key growth areas to maximize impact and ensure
              sustainable scaling of operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentUse.map((use, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg group-hover:text-emerald-600 transition-colors">
                    {use.category}
                  </h4>
                  <div className="flex flex-col items-end">
                    <Badge className="bg-emerald-500 text-white mb-1">{use.percentage}</Badge>
                    <span className="text-sm text-muted-foreground">{use.amount}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{use.description}</p>
                <div className="glass-card p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <p className="text-xs font-medium text-emerald-600">Expected Impact: {use.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
              <h4 className="font-semibold text-xl mb-4 text-emerald-600">Total Investment Requirement</h4>
              <p className="text-3xl font-bold mb-2">UGX 1.8B - 3.7B</p>
              <p className="text-sm text-muted-foreground">
                Flexible investment structure to accommodate different partnership models and growth timelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
