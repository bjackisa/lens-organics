import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Beaker, Award, Zap, Shield, Globe } from "lucide-react"

export function ProcessingFacilities() {
  const facilities = [
    {
      name: "Essential Oil Distillation Unit",
      status: "Operational",
      location: "Bukeerere Facility",
      description: "Advanced steam distillation system for premium lemongrass essential oil extraction",
      image: "/images/distillation-setup.png",
      capabilities: [
        "Steam distillation technology",
        "Stainless steel construction",
        "Quality control systems",
        "Batch processing capability",
      ],
      output: "Premium essential oils & hydrosols",
      compliance: "UNBS protocol ready",
    },
  ]

  const plannedFacilities = [
    {
      name: "Cold-Press Oil Extraction",
      timeline: "Q2 2025",
      purpose: "Avocado & Macadamia oil production",
      market: "Cosmetic & culinary markets",
    },
    {
      name: "Grain Processing Unit",
      timeline: "Q4 2025",
      purpose: "Oatmeal & plantain flour production",
      market: "Health food & nutrition markets",
    },
    {
      name: "Aquaculture Processing",
      timeline: "Q3 2025",
      purpose: "Fish processing & packaging",
      market: "Fresh & processed fish markets",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Value-Addition Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our processing capabilities transform raw agricultural materials into premium products that command higher
            market prices and meet international quality standards.
          </p>
        </div>

        {/* Current Facilities */}
        <div className="mb-16">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-8 text-center">Current Processing Facilities</h3>
          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square relative overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-500 text-white font-medium">{facility.status}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{facility.location}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="flex items-center text-2xl group-hover:text-emerald-600 transition-colors">
                        <div className="glass-card p-3 rounded-lg mr-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                          <Factory className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                        </div>
                        {facility.name}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed text-lg">{facility.description}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div className="glass-card p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center mb-3 text-emerald-600">
                          <Beaker className="h-4 w-4 mr-2" />
                          Technical Capabilities
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {facility.capabilities.map((capability, idx) => (
                            <li key={idx} className="flex items-start">
                              <Zap className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="glass-card p-4 rounded-lg">
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Globe className="w-4 h-4 mr-2" />
                            Primary Output
                          </div>
                          <p className="font-medium">{facility.output}</p>
                        </div>
                        <div className="glass-card p-4 rounded-lg">
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Award className="w-4 h-4 mr-2" />
                            Quality Standards
                          </div>
                          <p className="font-medium">{facility.compliance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Planned Facilities */}
        <div className="glass-card p-10 rounded-2xl">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-8 text-center flex items-center justify-center">
            <Shield className="h-6 w-6 text-emerald-600 mr-3" />
            Planned Processing Expansion
          </h3>
          <p className="text-muted-foreground text-lg text-center mb-10 max-w-3xl mx-auto">
            Our strategic expansion plan includes additional processing capabilities to support our diversified
            agricultural operations and create multiple value-added product lines.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plannedFacilities.map((facility, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <Factory className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                  <Badge variant="outline" className="border-blue-500 text-blue-600 text-xs">
                    {facility.timeline}
                  </Badge>
                </div>
                <h4 className="font-semibold text-lg mb-3 group-hover:text-emerald-600 transition-colors">
                  {facility.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{facility.purpose}</p>
                <div className="text-xs text-emerald-600 font-medium">Target: {facility.market}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
