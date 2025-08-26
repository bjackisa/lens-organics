import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Globe, CheckCircle, Beaker, FileText, Users, TrendingUp } from "lucide-react"

export function QualityStandards() {
  const standards = [
    {
      icon: Award,
      title: "UNBS Protocol Compliance",
      description: "Products developed following Uganda National Bureau of Standards protocols",
      status: "Certification Pathway Established",
      details: [
        "Quality management systems in place",
        "Documentation and traceability protocols",
        "Regular testing and monitoring procedures",
        "Compliance with national standards framework",
      ],
      benefit: "Ready for full certification when required for market access",
    },
    {
      icon: Globe,
      title: "International Export Standards",
      description: "Products meet international quality requirements for global markets",
      status: "Export Grade Quality",
      details: [
        "ISO quality management principles",
        "International packaging standards",
        "Export documentation protocols",
        "Third-party testing capabilities",
      ],
      benefit: "Direct access to premium international markets",
    },
    {
      icon: Beaker,
      title: "Laboratory Testing & Analysis",
      description: "Comprehensive testing ensures consistent product quality and safety",
      status: "Active Quality Control",
      details: [
        "Chemical composition analysis",
        "Purity and contamination testing",
        "Microbiological safety testing",
        "Batch-to-batch consistency monitoring",
      ],
      benefit: "Guaranteed product quality and safety for all applications",
    },
    {
      icon: FileText,
      title: "Documentation & Traceability",
      description: "Complete documentation from farm to final product ensures full traceability",
      status: "Comprehensive System",
      details: [
        "Farm-to-product tracking systems",
        "Batch documentation and records",
        "Supply chain transparency",
        "Quality assurance documentation",
      ],
      benefit: "Full transparency and accountability for quality assurance",
    },
  ]

  const certifications = [
    {
      name: "Good Manufacturing Practices (GMP)",
      status: "Implemented",
      description: "Manufacturing processes follow GMP guidelines for consistent quality",
      color: "bg-emerald-500",
    },
    {
      name: "HACCP Principles",
      status: "Applied",
      description: "Hazard Analysis Critical Control Points for food safety",
      color: "bg-blue-500",
    },
    {
      name: "Organic Certification",
      status: "Pathway Ready",
      description: "Farming practices align with organic certification requirements",
      color: "bg-yellow-500",
    },
    {
      name: "Fair Trade Compliance",
      status: "Principles Applied",
      description: "Ethical sourcing and fair labor practices throughout operations",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Quality Standards & Compliance
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our commitment to quality goes beyond basic requirements. We've established comprehensive quality systems
            that ensure our products meet the highest international standards, positioning us for certification and
            premium market access when needed.
          </p>
        </div>

        {/* Quality Standards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {standards.map((standard, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <standard.icon className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <Badge className="bg-emerald-500 text-white font-medium">{standard.status}</Badge>
                </div>

                <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                  {standard.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{standard.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-emerald-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Implementation Details
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
                  <h4 className="font-semibold flex items-center mb-2 text-blue-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Business Benefit
                  </h4>
                  <p className="text-sm leading-relaxed">{standard.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card p-10 rounded-2xl mb-16">
          <div className="text-center mb-10">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6 flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600 mr-3" />
              Certification Readiness
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our operations are structured to meet various certification requirements, providing flexibility to pursue
              specific certifications based on market demands and partnership opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                  <Badge className={`${cert.color} text-white text-xs`}>{cert.status}</Badge>
                </div>
                <h4 className="font-semibold text-base mb-3 group-hover:text-emerald-600 transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Message */}
        <div className="glass-card p-10 rounded-2xl text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Quality-Driven Partnership Opportunities</h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            When you partner with Lens Organics, you're not just buying products—you're embracing a quality-first
            approach that ensures market readiness, regulatory compliance, and premium positioning for sustainable
            business growth.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <Shield className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Risk Mitigation</h4>
              <p className="text-sm text-muted-foreground">
                Established quality systems reduce regulatory and market risks
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Globe className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Market Access</h4>
              <p className="text-sm text-muted-foreground">
                Quality compliance opens doors to premium markets globally
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Users className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Partnership Confidence</h4>
              <p className="text-sm text-muted-foreground">
                Transparent quality systems build trust with partners and customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
