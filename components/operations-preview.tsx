'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sprout, Fish, Egg, TreePine, Wheat, Apple, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useParallax"

export function OperationsPreview() {
  const { elementRef, isVisible } = useScrollAnimation()
  const operations = [
    {
      icon: Sprout,
      title: "Lemongrass Cultivation",
      description:
        "Premium lemongrass grown in Bukeerere, Mukono for essential oil production and aromatherapy products",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756214038/WhatsApp_Image_2025-08-20_at_6.32.05_PM_1_wxag4f.jpg",
      status: "Active Production",
      location: "Bukeerere, Mukono",
    },
    {
      icon: Apple,
      title: "Plantain (Gonja) Farming",
      description:
        "High-yield plantain cultivation for local and regional markets, supporting food security initiatives",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205616/WhatsApp_Image_2025-08-25_at_4.21.46_PM_vefv18.jpg",
      status: "Active Production",
      location: "Multiple Sites",
    },
    {
      icon: TreePine,
      title: "Premium Tree Crops",
      description: "Hass avocado and macadamia cultivation for export markets and value-added oil production",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205310/WhatsApp_Image_2025-08-25_at_5.23.14_PM_cvbyzc.jpg",
      status: "Expanding",
      location: "Nakaseke & Bukeerere",
    },
    {
      icon: Egg,
      title: "Layer Chicken Operations",
      description: "Modern poultry systems producing premium eggs with focus on organic feed and welfare standards",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205615/WhatsApp_Image_2025-08-25_at_4.22.01_PM_lw5lnr.jpg",
      status: "Active Production",
      location: "Integrated Facilities",
    },
    {
      icon: Fish,
      title: "Catfish Aquaculture",
      description: "Sustainable pond systems ready for premium catfish production targeting hospitality sector",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_4.04.27_PM_fyh3a8.jpg",
      status: "Infrastructure Ready",
      location: "Pond Systems Complete",
    },
    {
      icon: Wheat,
      title: "Oatmeal Production",
      description: "Nutritious oat cultivation and processing for health-conscious consumer markets",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205614/WhatsApp_Image_2025-08-25_at_4.22.14_PM_ltksj0.jpg",
      status: "Development Phase",
      location: "Planning Stage",
    },
  ]

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`}>
            Integrated Agricultural Ecosystem
          </h2>
          <p className={`text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Our diversified operations create powerful synergies across multiple agricultural sectors. Each enterprise
            complements the others, maximizing resource efficiency while building resilient revenue streams that
            position us for sustainable growth and international expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {operations.map((operation, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card group hover:scale-105 ${isVisible ? 'animate-float-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: isVisible ? `${0.06 * (index + 1)}s` : undefined }}
            >
              <div className="aspect-video relative overflow-hidden bg-gray-700">
                <img
                  src={operation.image || "/placeholder.svg"}
                  alt={operation.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 transform transition-transform duration-300 group-hover:scale-110">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm ${
                      operation.status === "Active Production"
                        ? "bg-emerald-500/90 text-white"
                        : operation.status === "Expanding"
                          ? "bg-blue-500/90 text-white"
                          : operation.status === "Infrastructure Ready"
                            ? "bg-yellow-500/90 text-white"
                            : "bg-orange-500/90 text-white"
                    }`}
                  >
                    {operation.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white transform transition-transform duration-300 group-hover:translate-y-2">
                  <p className="text-xs font-medium opacity-90">{operation.location}</p>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg group-hover:text-emerald-600 transition-colors">
                  <div className="glass-card p-2 rounded-lg mr-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-all duration-300 transform group-hover:scale-110">
                    <operation.icon className="h-5 w-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                  </div>
                  {operation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{operation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-float-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="glass-card-enhanced p-8 rounded-2xl max-w-3xl mx-auto mb-8 group hover:shadow-2xl transition-all duration-300">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 group-hover:text-emerald-600 transition-colors">Unified Management, Multiplied Results</h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Our integrated approach doesn't just diversify risk—it creates powerful cross-sector synergies. Organic
              waste becomes fertilizer, processing byproducts feed livestock, and shared infrastructure maximizes
              efficiency across all operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 group/btn relative overflow-hidden">
              <Link href="/operations" className="flex items-center">
                <span className="relative z-10">Explore All Operations</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                <div className="absolute inset-0 bg-emerald-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 z-0" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 bg-transparent group/btn transform hover:scale-105 transition-transform"
            >
              <Link href="/contact">Wholesale Partnerships</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
