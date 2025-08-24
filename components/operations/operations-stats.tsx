import { Card, CardContent } from "@/components/ui/card"
import { Sprout, MapPin, Factory, TrendingUp, Users, Globe, Award, Zap } from "lucide-react"

export function OperationsStats() {
  const stats = [
    {
      icon: Sprout,
      value: "7",
      label: "Agricultural Sectors",
      description: "Integrated operations",
      color: "text-emerald-500",
    },
    {
      icon: MapPin,
      value: "2",
      label: "Farm Locations",
      description: "Strategic positioning",
      color: "text-blue-500",
    },
    {
      icon: Factory,
      value: "Active",
      label: "Processing Facility",
      description: "Essential oil production",
      color: "text-yellow-500",
    },
    {
      icon: TrendingUp,
      value: "Growing",
      label: "Production Capacity",
      description: "Continuous expansion",
      color: "text-purple-500",
    },
    {
      icon: Users,
      value: "B2B",
      label: "Market Focus",
      description: "Business partnerships",
      color: "text-orange-500",
    },
    {
      icon: Globe,
      value: "Export",
      label: "Market Ready",
      description: "International standards",
      color: "text-teal-500",
    },
    {
      icon: Award,
      value: "UNBS",
      label: "Protocol Ready",
      description: "Quality compliance",
      color: "text-red-500",
    },
    {
      icon: Zap,
      value: "Synergy",
      label: "Cross-Sector",
      description: "Integrated efficiency",
      color: "text-indigo-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Operations at Scale
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our integrated approach creates powerful synergies across all agricultural sectors, maximizing efficiency
            and creating multiple revenue streams under unified management.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 glass-card group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <stat.icon className={`h-6 w-6 ${stat.color} transition-colors`} />
                </div>
                <div className={`font-serif font-bold text-xl md:text-2xl mb-2 ${stat.color} transition-colors`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-sm md:text-base mb-2">{stat.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
