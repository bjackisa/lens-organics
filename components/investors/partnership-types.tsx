import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Handshake, Building2, Globe, TrendingUp, Users, Target } from "lucide-react"

export function PartnershipTypes() {
  const partnershipTypes = [
    {
      icon: Building2,
      title: "Strategic Equity Partnership",
      investment: "UGX 185M - 1.8B", // converted from USD to UGX
      equity: "10% - 35%",
      description: "Direct equity investment with board representation and strategic input",
      benefits: [
        "Board seat and voting rights",
        "Quarterly financial reporting",
        "Strategic decision participation",
        "Priority access to new opportunities",
      ],
      timeline: "3-7 years",
      returns: "25-40% IRR target",
      suitability: "Institutional investors, family offices, agricultural funds",
    },
    {
      icon: Handshake,
      title: "Joint Venture Partnership",
      investment: "UGX 92M - 740M", // converted from USD to UGX
      equity: "Partnership basis",
      description: "Collaborative partnership for specific projects or product lines",
      benefits: [
        "Shared risk and rewards",
        "Complementary expertise",
        "Market access expansion",
        "Technology transfer opportunities",
      ],
      timeline: "2-5 years",
      returns: "Revenue sharing model",
      suitability: "Agricultural companies, processing firms, export businesses",
    },
    {
      icon: Globe,
      title: "Export & Distribution Partnership",
      investment: "UGX 37M - 370M", // converted from USD to UGX
      equity: "Revenue sharing",
      description: "Partnership focused on international market expansion and distribution",
      benefits: [
        "Market entry support",
        "Distribution network access",
        "Brand development assistance",
        "Regulatory compliance support",
      ],
      timeline: "1-3 years renewable",
      returns: "15-25% margin sharing",
      suitability: "Export companies, international distributors, retail chains",
    },
    {
      icon: TrendingUp,
      title: "Growth Capital Partnership",
      investment: "UGX 370M - 3.7B", // converted from USD to UGX
      equity: "15% - 25%",
      description: "Capital injection for rapid expansion and scaling operations",
      benefits: [
        "Accelerated growth funding",
        "Operational scaling support",
        "Market expansion capital",
        "Infrastructure development",
      ],
      timeline: "5-10 years",
      returns: "30-50% IRR target",
      suitability: "Private equity, growth funds, impact investors",
    },
  ]

  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Discussion",
      description: "Preliminary conversation to understand mutual interests and alignment",
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Due Diligence",
      description: "Comprehensive review of operations, financials, and growth potential",
      duration: "2-4 weeks",
    },
    {
      step: "03",
      title: "Term Sheet",
      description: "Negotiation and agreement on partnership structure and terms",
      duration: "1-2 weeks",
    },
    {
      step: "04",
      title: "Legal Documentation",
      description: "Formal agreement preparation and legal review process",
      duration: "2-3 weeks",
    },
    {
      step: "05",
      title: "Partnership Launch",
      description: "Official partnership commencement and integration planning",
      duration: "1 week",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Partnership Opportunities
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Multiple partnership structures designed to align with different investor profiles, risk appetites, and
            strategic objectives in the agricultural sector.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {partnershipTypes.map((partnership, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <partnership.icon className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div className="text-right">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mb-1">
                      {partnership.investment}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{partnership.equity}</div>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {partnership.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{partnership.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-emerald-600 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {partnership.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <h5 className="font-medium text-sm text-blue-600 mb-1">Timeline</h5>
                    <p className="text-xs text-muted-foreground">{partnership.timeline}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <h5 className="font-medium text-sm text-blue-600 mb-1">Returns</h5>
                    <p className="text-xs text-muted-foreground">{partnership.returns}</p>
                  </div>
                </div>

                <div className="glass-card p-4 rounded-lg bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950 dark:to-emerald-950">
                  <h5 className="font-medium text-sm text-blue-600 mb-2">Ideal For</h5>
                  <p className="text-xs leading-relaxed">{partnership.suitability}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Process */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Users className="h-6 w-6 text-emerald-600 mr-3" />
              Partnership Process
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our streamlined partnership process ensures thorough evaluation while maintaining efficiency and
              transparency throughout the engagement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {partnershipProcess.map((process, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="glass-card p-4 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors min-w-[60px]">
                      <span className="font-bold text-emerald-600 text-sm">{process.step}</span>
                    </div>
                    {index < partnershipProcess.length - 1 && (
                      <div className="w-px h-12 bg-gradient-to-b from-emerald-200 to-transparent dark:from-emerald-800 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 glass-card p-6 rounded-xl group-hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg group-hover:text-emerald-600 transition-colors">
                        {process.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {process.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="glass-card hover:bg-emerald-600 hover:text-white">
              Start Partnership Discussion
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
