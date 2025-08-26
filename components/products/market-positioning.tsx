import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, TrendingUp, Users, Target, ArrowRight, Zap, Award, DollarSign } from "lucide-react"
import Link from "next/link"

export function MarketPositioning() {
  const marketSegments = [
    {
      icon: Globe,
      title: "International Export Markets",
      description: "Premium products for global aromatherapy, cosmetics, and food industries",
      opportunities: [
        "European aromatherapy market (UGX 10.3T annually)",
        "Natural cosmetics industry growth (8.5% CAGR)",
        "Organic food ingredients demand rising",
        "Essential oils export potential to EU/US",
      ],
      positioning: "Premium quality, sustainable sourcing, competitive pricing",
      revenue: "UGX 1.8B-7.4B potential annually",
      timeline: "Immediate market entry capability",
    },
    {
      icon: Users,
      title: "Local & Regional B2B Markets",
      description: "Supply chain partnerships with manufacturers and distributors",
      opportunities: [
        "Cosmetic manufacturers in East Africa",
        "Food & beverage companies seeking natural ingredients",
        "Hospitality sector premium supply",
        "Pharmaceutical companies for natural extracts",
      ],
      positioning: "Reliable supply, consistent quality, local advantage",
      revenue: "UGX 740M-2.9B potential annually",
      timeline: "Active market development",
    },
    {
      icon: Target,
      title: "Specialty & Niche Markets",
      description: "High-value specialized applications and custom formulations",
      opportunities: [
        "Organic certification premium markets",
        "Fair trade and sustainable product lines",
        "Custom formulations for specific applications",
        "Private label manufacturing partnerships",
      ],
      positioning: "Customization capability, ethical sourcing, premium quality",
      revenue: "UGX 370M-1.8B potential annually",
      timeline: "Development phase opportunities",
    },
  ]

  const competitiveAdvantages = [
    {
      icon: Zap,
      title: "Integrated Operations",
      description: "End-to-end control from cultivation to final product ensures quality and cost efficiency",
      impact: "30-40% cost advantage over competitors",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "UNBS protocol compliance and international standards readiness",
      impact: "Access to premium market segments",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Uganda's favorable climate and strategic location for East African markets",
      impact: "Lower production costs, regional market access",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Proven systems and infrastructure ready for rapid scaling",
      impact: "Quick response to market demand increases",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6">Market Positioning & Opportunities</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our strategic market positioning leverages Uganda's agricultural advantages, our integrated operations, and
            quality standards to capture premium market segments both locally and internationally.
          </p>
        </div>

        {/* Market Segments */}
        <div className="space-y-12 mb-20">
          {marketSegments.map((segment, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-3 bg-gradient-to-br from-emerald-500 to-blue-500 p-8 flex flex-col items-center justify-center text-white">
                  <div className="glass-card p-4 rounded-full mb-4 bg-white/20">
                    <segment.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{segment.title}</h3>
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">{segment.timeline}</Badge>
                </div>

                <div className="lg:col-span-9 p-8">
                  <CardHeader className="p-0 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">{segment.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="glass-card p-4 rounded-lg">
                          <h4 className="font-semibold mb-3 text-emerald-600 flex items-center">
                            <Target className="h-4 w-4 mr-2" />
                            Market Opportunities
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {segment.opportunities.map((opportunity, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                                <span className="leading-relaxed">{opportunity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="glass-card p-4 rounded-lg">
                          <div className="space-y-3">
                            <div>
                              <span className="text-sm text-muted-foreground">Market Positioning:</span>
                              <p className="font-medium text-sm">{segment.positioning}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Revenue Potential:</span>
                              <p className="font-medium text-emerald-600">{segment.revenue}</p>
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

        {/* Competitive Advantages */}
        <div className="glass-card p-10 rounded-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600 mr-3" />
              Competitive Advantages
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our unique combination of integrated operations, quality standards, and strategic positioning creates
              sustainable competitive advantages that are difficult for competitors to replicate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <advantage.icon className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {advantage.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                  {advantage.description}
                </p>
                <div className="glass-card p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <p className="text-xs font-medium text-center text-emerald-600">{advantage.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wholesale Opportunity */}
        <div className="glass-card p-10 rounded-2xl text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-emerald-600 mr-3" />
            Wholesale Partnership Opportunity
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            With proven products, established quality systems, and clear market opportunities, Lens Organics is
            positioned for significant growth. We're seeking distributors and bulk buyers to scale operations and
            capture the full potential of our integrated agricultural enterprise.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="glass-card p-6 rounded-xl">
              <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Growth Potential</h4>
              <p className="text-sm text-muted-foreground">UGX 3.7B-11B annual revenue potential within 3 years</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Globe className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Market Access</h4>
              <p className="text-sm text-muted-foreground">Immediate entry to premium local and export markets</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Proven Systems</h4>
              <p className="text-sm text-muted-foreground">Established operations ready for scaling and expansion</p>
            </div>
          </div>

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
              <Link href="/contact">
                <ArrowRight className="mr-2 h-4 w-4" />
                Contact for Partnership
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
