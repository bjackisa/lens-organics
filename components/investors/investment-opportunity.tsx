import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Globe, Users, Zap, Award, Target, BarChart } from "lucide-react"

export function InvestmentOpportunity() {
  const keyHighlights = [
    {
      icon: TrendingUp,
      title: "Proven Growth Trajectory",
      description: "Operational since 2023 with established production and expanding market presence",
      metrics: ["Active essential oil production", "Growing customer base", "Expanding operations to Nakaseke"],
      impact: "Demonstrated market validation and operational capability",
    },
    {
      icon: DollarSign,
      title: "Multiple Revenue Streams",
      description: "Diversified income sources across seven integrated agricultural sectors",
      metrics: ["Essential oils & hydrosols", "Fresh produce (eggs, fish, plantain)", "Future value-added products"],
      impact: "Risk mitigation through diversification",
    },
    {
      icon: Globe,
      title: "Export Market Access",
      description: "Products meet international standards with established export pathways",
      metrics: ["UNBS protocol compliance", "International quality standards", "Export documentation ready"],
      impact: "Access to premium international markets",
    },
    {
      icon: Users,
      title: "Experienced Management",
      description: "Proven leadership with agricultural expertise and business acumen",
      metrics: ["Integrated operations management", "Quality control systems", "Market development experience"],
      impact: "Reduced execution risk and operational efficiency",
    },
  ]

  const investmentThesis = [
    {
      icon: Zap,
      title: "Market Opportunity",
      description: "Growing global demand for natural products, essential oils, and organic agriculture",
      data: "Essential oils market: $18.6B globally, 8.7% CAGR",
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Integrated operations, quality standards, and strategic location create sustainable advantages",
      data: "30-40% cost advantage through vertical integration",
    },
    {
      icon: Target,
      title: "Scalability",
      description: "Proven systems and infrastructure ready for rapid scaling with additional capital",
      data: "Current capacity can support 3-5x production increase",
    },
    {
      icon: BarChart,
      title: "Financial Potential",
      description: "Strong unit economics with premium pricing and expanding market opportunities",
      data: "Target 25-35% gross margins on premium products",
    },
  ]

  return (
    <section id="investment-opportunity" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Investment Opportunity Overview
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Lens Organics represents a unique opportunity to invest in Uganda's agricultural transformation. Our
            integrated approach, proven operations, and premium market positioning create exceptional potential for
            sustainable growth and attractive returns.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {keyHighlights.map((highlight, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <Badge className="bg-emerald-500 text-white font-medium">Key Strength</Badge>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {highlight.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-emerald-600">Key Metrics</h4>
                  <ul className="space-y-2 text-sm">
                    {highlight.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <h4 className="font-semibold mb-2 text-blue-600">Investment Impact</h4>
                  <p className="text-sm leading-relaxed">{highlight.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Thesis */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Target className="h-6 w-6 text-emerald-600 mr-3" />
              Investment Thesis
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our investment opportunity is built on four fundamental pillars that create a compelling case for
              sustainable growth and attractive returns in the agricultural sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentThesis.map((thesis, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <thesis.icon className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {thesis.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">{thesis.description}</p>
                <div className="glass-card p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <p className="text-xs font-medium text-center text-emerald-600">{thesis.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
