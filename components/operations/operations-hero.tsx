"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

export function OperationsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dsijcu1om/image/upload/v1756205647/WhatsApp_Image_2025-08-25_at_3.59.40_PM_v9axnk.jpg"
          alt="Lens Organics integrated farming operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8 space-x-6">
            <div className="glass-card p-4 rounded-full">
              <MapPin className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="glass-card p-4 rounded-full">
              <Calendar className="h-8 w-8 text-blue-400" />
            </div>
            <div className="glass-card p-4 rounded-full">
              <TrendingUp className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Integrated Agricultural
            <span className="text-emerald-400 block">Operations</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover how our unified management approach across seven agricultural sectors creates unprecedented
            synergies, maximizes resource efficiency, and delivers consistent premium quality from farm to market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-emerald-400">7 Integrated Sectors</h3>
              <p className="text-sm text-gray-300">
                Lemongrass, Plantain, Avocado, Macadamia, Poultry, Aquaculture, Oatmeal
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-blue-400">2 Strategic Locations</h3>
              <p className="text-sm text-gray-300">Bukeerere (Mukono) & Nakaseke operations</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-yellow-400">Since 2023</h3>
              <p className="text-sm text-gray-300">Continuous operations and expansion</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700">
              <Link href="#operations-grid">
                Explore All Sectors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass-card border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <Link href="/contact">Wholesale Partnerships</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
