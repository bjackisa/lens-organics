import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Globe, Zap, Award, Target, AlertTriangle } from "lucide-react"

export function RiskMitigation() {
  const riskFactors = [
    {
      risk: "Market Demand Risk",
      level: "Low-Medium",
      levelColor: "bg-yellow-500",
      description: "Potential fluctuations in demand for premium agricultural products",
      mitigation: [
        "Diversified product portfolio across multiple market segments",
        "Established customer relationships and proven market demand",
        "Flexible production systems adaptable to market changes",
        "Multiple sales channels reducing dependency risk",
      ],
      impact: "Diversification significantly reduces market concentration risk",
    },
    {
      risk: "Production Risk",
      level: "Low",
      levelColor: "bg-emerald-500",
      description: "Agricultural production challenges including weather, pests, or crop failure",
      mitigation: [
        "Proven cultivation practices with 2+ years operational history",
        "Multiple crop varieties and production cycles",
        "Integrated pest management and organic practices",
        "Two farm locations providing geographic diversification",
      ],
      impact: "Established operations with proven resilience",
    },
    {
      risk: "Regulatory Risk",
      level: "Low",
      levelColor: "bg-emerald-500",
      description: "Changes in agricultural regulations or export requirements",
      mitigation: [
        "UNBS protocol compliance already established",
        "Proactive engagement with regulatory bodies",
        "Quality systems exceed current requirements",
        "Legal compliance monitoring and advisory support",
      ],
      impact: "Strong regulatory positioning provides competitive advantage",
    },
    {
      risk: "Competition Risk",
      level: "Medium",
      levelColor: "bg-orange-500",
      description: "Increased competition in premium agricultural products market",
      mitigation: [
        "Integrated operations create sustainable cost advantages",
        "Premium quality positioning and brand development",
        "Strong customer relationships and market presence",
        "Continuous innovation and product development",
      ],
      impact: "Competitive moats through integration and quality leadership",
    },
  ]

  const strengthFactors = [
    {
      icon: Shield,
      title: "Operational Resilience",
      description: "Proven systems and diversified operations provide stability",
      factors: ["2+ years operational history", "Multiple revenue streams", "Established supply chains"],
    },
    {
      icon: Users,
      title: "Management Experience",
      description: "Experienced team with agricultural and business expertise",
      factors: ["Industry knowledge", "Operational experience", "Market understanding"],
    },
    {
      icon: Globe,
      title: "Market Position",
      description: "Strong positioning in growing premium markets",
      factors: ["Quality leadership", "Customer relationships", "Export readiness"],
    },
    {
      icon: Zap,
      title: "Financial Discipline",
      description: "Conservative financial management and sustainable growth approach",
      factors: ["Proven unit economics", "Cash flow positive operations", "Scalable cost structure"],
    },
  ]

  const exitStrategies = [
    {
      strategy: "Strategic Acquisition",
      timeline: "3-5 years",
      description: "Acquisition by larger agricultural or food processing company",
      potential: "Premium valuation for integrated operations and market position",
      likelihood: "High - attractive to industry consolidators",
    },
    {
      strategy: "Management Buyout",
      timeline: "5-7 years",
      description: "Management team acquires investor stakes with debt financing",
      potential: "Fair market valuation based on cash flow multiples",
      likelihood: "Medium - dependent on cash generation capability",
    },
    {
      strategy: "Dividend Strategy",
      timeline: "Ongoing",
      description: "Regular dividend distributions from profitable operations",
      potential: "15-25% annual returns through dividend payments",
      likelihood: "High - sustainable cash flow generation",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Risk Assessment & Mitigation
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We've identified key risk factors and implemented comprehensive mitigation strategies to protect investor
            interests while maximizing growth potential in the agricultural sector.
          </p>
        </div>

        {/* Risk Factors */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {riskFactors.map((risk, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900 transition-colors">
                    <AlertTriangle className="h-6 w-6 text-orange-500 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <Badge className={`${risk.levelColor} text-white font-medium`}>{risk.level} Risk</Badge>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{risk.risk}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{risk.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-emerald-600 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Mitigation Strategies
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {risk.mitigation.map((strategy, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <h4 className="font-semibold mb-2 text-blue-600">Risk Impact Assessment</h4>
                  <p className="text-sm leading-relaxed">{risk.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strength Factors */}
        <div className="glass-card p-10 rounded-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600 mr-3" />
              Investment Strength Factors
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our investment opportunity is strengthened by multiple factors that reduce risk and enhance the potential
              for sustainable returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengthFactors.map((strength, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <strength.icon className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {strength.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">{strength.description}</p>

                <div className="space-y-2">
                  {strength.factors.map((factor, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exit Strategies */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Target className="h-6 w-6 text-emerald-600 mr-3" />
              Exit Strategy Options
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Multiple exit pathways provide flexibility for investors to realize returns based on their investment
              timeline and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {exitStrategies.map((exit, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg group-hover:text-emerald-600 transition-colors">
                    {exit.strategy}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {exit.timeline}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exit.description}</p>

                <div className="space-y-3">
                  <div className="glass-card p-3 rounded-lg">
                    <h5 className="font-medium text-sm text-emerald-600 mb-1">Return Potential</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{exit.potential}</p>
                  </div>

                  <div className="glass-card p-3 rounded-lg">
                    <h5 className="font-medium text-sm text-blue-600 mb-1">Likelihood</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{exit.likelihood}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
