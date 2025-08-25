import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, MapPin, Leaf, Award, Factory, Users, Globe, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "2023",
      label: "Established",
      description: "Operating since inception",
    },
    {
      icon: MapPin,
      value: "2",
      label: "Farm Locations",
      description: "Bukeerere & Nakaseke",
    },
    {
      icon: Leaf,
      value: "7",
      label: "Integrated Sectors",
      description: "Diverse crop & livestock",
    },
    {
      icon: Factory,
      value: "Active",
      label: "Processing Facility",
      description: "Lemongrass oil production",
    },
    {
      icon: Award,
      value: "UNBS",
      label: "Protocol Ready",
      description: "Certification pathway",
    },
    {
      icon: Users,
      value: "B2B",
      label: "Focus",
      description: "Business partnerships",
    },
    {
      icon: Globe,
      value: "Export",
      label: "Oriented",
      description: "International standards",
    },
    {
      icon: Zap,
      value: "Value",
      label: "Addition",
      description: "Raw to premium products",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Transforming Agriculture Through Integration
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Under Mr. Fred's experienced management, our unified approach across multiple agricultural sectors creates
            unprecedented value chains, positioning us as Uganda's premier integrated farming enterprise ready for
            global markets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 glass-card group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                </div>
                <div className="font-serif font-bold text-xl md:text-2xl text-primary mb-2 group-hover:text-emerald-600 transition-colors">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm md:text-base mb-2">{stat.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">
              Ready to Partner with Uganda's Agricultural Future?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join us in revolutionizing sustainable farming and premium product development across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Explore Partnership
              </button>
              <button className="px-8 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors font-medium">
                View Operations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
