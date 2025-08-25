import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sprout, Apple, TreePine, Egg, Fish, Wheat, MapPin, Calendar, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function OperationsGrid() {
  const operations = [
    {
      id: "lemongrass",
      icon: Sprout,
      title: "Lemongrass Cultivation & Processing",
      location: "Bukeerere, Mukono",
      status: "Active Production",
      statusColor: "bg-emerald-500",
      description:
        "Premium lemongrass cultivation with on-site steam distillation facility producing high-grade essential oils and hydrosols for export markets.",
      image: "/images/lemongrass-field.png",
      keyMetrics: [
        "Steam distillation facility operational",
        "75-85% citral content achieved",
        "UNBS protocol compliance ready",
        "Export-grade quality standards",
      ],
      timeline: "Established 2023, Continuous production",
      marketFocus: "Essential oils, aromatherapy, cosmetics, food flavoring",
    },
    {
      id: "plantain",
      icon: Apple,
      title: "Plantain (Gonja) Farming",
      location: "Multiple Sites",
      status: "Active Production",
      statusColor: "bg-emerald-500",
      description:
        "High-yield plantain cultivation focusing on the popular Gonja variety for local and regional markets, supporting food security initiatives.",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop&crop=center",
      keyMetrics: [
        "Multiple harvest cycles annually",
        "Local market preference variety",
        "Food security contribution",
        "Regional distribution network",
      ],
      timeline: "Ongoing cultivation since 2023",
      marketFocus: "Fresh produce, flour processing potential, regional export",
    },
    {
      id: "tree-crops",
      icon: TreePine,
      title: "Premium Tree Crops",
      location: "Nakaseke & Bukeerere",
      status: "Expanding",
      statusColor: "bg-blue-500",
      description:
        "Hass avocado and macadamia cultivation targeting premium export markets with plans for value-added oil production.",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&h=600&fit=crop&crop=center",
      keyMetrics: [
        "Hass avocado premium variety",
        "Macadamia high-value nuts",
        "Export market positioning",
        "Oil extraction planning",
      ],
      timeline: "Planting phase, maturation 2025-2026",
      marketFocus: "Fresh export, cold-pressed oils, cosmetic ingredients",
    },
    {
      id: "poultry",
      icon: Egg,
      title: "Layer Chicken Operations",
      location: "Integrated Facilities",
      status: "Active Production",
      statusColor: "bg-emerald-500",
      description:
        "Modern poultry systems producing premium eggs with focus on organic feed integration and high welfare standards.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop&crop=center",
      keyMetrics: [
        "Modern housing systems",
        "Organic feed integration",
        "High welfare standards",
        "Premium egg production",
      ],
      timeline: "Active since 2023",
      marketFocus: "Hospitality sector, premium retail, organic markets",
    },
    {
      id: "aquaculture",
      icon: Fish,
      title: "Catfish Aquaculture",
      location: "Pond Systems Complete",
      status: "Infrastructure Ready",
      statusColor: "bg-yellow-500",
      description:
        "Sustainable pond systems designed for premium catfish production targeting hospitality and retail sectors.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      keyMetrics: [
        "Pond infrastructure complete",
        "Sustainable water management",
        "Premium species selection",
        "Market-ready systems",
      ],
      timeline: "Infrastructure complete, stocking Q2 2025",
      marketFocus: "Restaurant sector, fresh fish retail, processing potential",
    },
    {
      id: "oatmeal",
      icon: Wheat,
      title: "Oatmeal Production",
      location: "Planning Stage",
      status: "Development Phase",
      statusColor: "bg-orange-500",
      description:
        "Nutritious oat cultivation and processing targeting health-conscious consumer markets with functional food applications.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&crop=center",
      keyMetrics: [
        "Health food market focus",
        "Functional nutrition benefits",
        "Processing capability planning",
        "Premium positioning strategy",
      ],
      timeline: "Development phase, launch Q4 2025",
      marketFocus: "Health foods, breakfast cereals, functional nutrition",
    },
  ]

  return (
    <section id="operations-grid" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6">Comprehensive Agricultural Portfolio</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Each sector operates as part of an integrated ecosystem, sharing resources, infrastructure, and expertise to
            maximize efficiency and create sustainable competitive advantages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {operations.map((operation, index) => (
            <Card
              key={operation.id}
              className="overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={operation.image || "/placeholder.svg"}
                  alt={operation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className={`${operation.statusColor} text-white font-medium`}>{operation.status}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {operation.location}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl group-hover:text-emerald-600 transition-colors">
                  <div className="glass-card p-2 rounded-lg mr-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <operation.icon className="h-5 w-5 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  {operation.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{operation.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-emerald-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Key Performance Indicators
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {operation.keyMetrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      Timeline
                    </div>
                    <p className="text-sm font-medium">{operation.timeline}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Market Focus
                    </div>
                    <p className="text-sm font-medium">{operation.marketFocus}</p>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 bg-transparent"
                >
                  <Link href={`/operations/${operation.id}`}>
                    Learn More About This Operation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
