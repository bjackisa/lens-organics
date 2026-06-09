'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, MapPin, Leaf, Award, Factory, Users, Globe, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useParallax"

export function StatsSection() {
  const { elementRef, isVisible } = useScrollAnimation()
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
      description: "Clients & partners",
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
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`}>
            Transforming Agriculture Through Integration
          </h2>
          <p className={`text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Our unified management approach across multiple agricultural sectors creates unprecedented value chains,
            positioning us as Uganda's premier integrated farming enterprise ready for global markets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-xl transition-all duration-500 glass-card group hover:scale-105 ${isVisible ? 'animate-float-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: isVisible ? `${0.05 * (index + 1)}s` : undefined }}
            >
              <CardContent className="p-6">
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                </div>
                <div className="font-serif font-bold text-xl md:text-2xl text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm md:text-base mb-2 group-hover:text-emerald-600 transition-colors">{stat.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="glass-card-enhanced p-8 rounded-2xl max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300 group">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 group-hover:text-emerald-600 transition-colors">
              Ready to Partner with Uganda's Agricultural Future?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Join us in revolutionizing sustainable farming and premium product development across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/50 transition-all duration-300 font-medium transform hover:scale-105">
                Explore Partnership
              </button>
              <button className="px-8 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 font-medium transform hover:scale-105">
                View Operations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
