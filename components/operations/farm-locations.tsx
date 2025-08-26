import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Truck, Users } from "lucide-react"

export function FarmLocations() {
  const locations = [
    {
      name: "Bukeerere Farm",
      region: "Mukono District",
      coordinates: "Central Uganda",
      primaryFocus: "Lemongrass Cultivation & Processing",
      status: "Fully Operational",
      statusColor: "bg-emerald-500",
      description:
        "Our flagship facility featuring lemongrass cultivation and on-site essential oil distillation unit.",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205631/WhatsApp_Image_2025-08-25_at_4.05.28_PM_pcbja5.jpg",
      operations: [
        "Lemongrass cultivation (primary)",
        "Steam distillation facility",
        "Essential oil production",
        "Quality control laboratory",
      ],
      advantages: [
        "Established infrastructure",
        "Proven soil conditions",
        "Processing facility on-site",
        "Skilled local workforce",
      ],
      logistics: "45 minutes from Kampala, excellent road access",
    },
    {
      name: "Nakaseke Farm",
      region: "Nakaseke District",
      coordinates: "Central Uganda",
      primaryFocus: "Diversified Crop Production",
      status: "Expanding Operations",
      statusColor: "bg-blue-500",
      description: "Strategic expansion site for tree crops and diversified agricultural operations.",
      image: "https://res.cloudinary.com/dsijcu1om/image/upload/v1756205631/WhatsApp_Image_2025-08-25_at_4.05.26_PM_qydlve.jpg",
      operations: [
        "Hass avocado cultivation",
        "Macadamia nut production",
        "Plantain (gonja) farming",
        "Future aquaculture development",
      ],
      advantages: ["Larger land area", "Suitable for tree crops", "Water resources available", "Expansion potential"],
      logistics: "Strategic location for northern market access",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6">Strategic Farm Locations</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our two strategically positioned farms in Central Uganda provide optimal growing conditions, excellent
            logistics access, and the foundation for our integrated agricultural operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={`${location.statusColor} text-white font-medium`}>{location.status}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center text-sm mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {location.region}
                  </div>
                  <p className="text-xs opacity-90">{location.coordinates}</p>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl group-hover:text-emerald-600 transition-colors">
                  <div className="glass-card p-3 rounded-lg mr-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <Navigation className="h-6 w-6 text-primary group-hover:text-emerald-600 transition-colors" />
                  </div>
                  {location.name}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-lg">{location.description}</p>
                <div className="glass-card p-3 rounded-lg mt-4">
                  <p className="font-semibold text-emerald-600">{location.primaryFocus}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-emerald-600">
                    <Users className="h-4 w-4 mr-2" />
                    Current Operations
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {location.operations.map((operation, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{operation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold flex items-center mb-3 text-blue-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Strategic Advantages
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {location.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Truck className="w-4 h-4 mr-2" />
                    Logistics & Access
                  </div>
                  <p className="text-sm font-medium">{location.logistics}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-10 rounded-2xl text-center">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Unified Management, Distributed Excellence</h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Our two-location strategy allows us to optimize different crops for their ideal growing conditions while
            maintaining centralized management, quality control, and operational efficiency across all sites.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Strategic Positioning</h4>
              <p className="text-sm text-muted-foreground">
                Central Uganda locations provide optimal access to both local and export markets
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Unified Management</h4>
              <p className="text-sm text-muted-foreground">
                Single management team ensures consistent quality and operational standards
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Truck className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Logistics Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Excellent road networks enable efficient distribution and supply chain management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
