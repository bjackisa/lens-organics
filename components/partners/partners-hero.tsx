"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Handshake, Globe, Target } from "lucide-react"
import Link from "next/link"

export function PartnersHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/lemongrass-plantation.png"
          alt="Lens Organics partnership opportunity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8 space-x-6">
            <div className="glass-card p-4 rounded-full">
              <TrendingUp className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="glass-card p-4 rounded-full">
              <Handshake className="h-8 w-8 text-blue-400" />
            </div>
            <div className="glass-card p-4 rounded-full">
              <Globe className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="glass-card p-4 rounded-full">
              <Target className="h-8 w-8 text-purple-400" />
            </div>
          </div>

          <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Business &<span className="text-emerald-400 block">Partnership</span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 block mt-4">Opportunities</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Partner with Uganda's premier integrated agricultural enterprise. Under Mr. Fred's experienced management,
            we offer proven operations, premium products, and exceptional growth potential in the rapidly expanding
            natural products market. We're seeking strategic business partners to scale our operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-emerald-400">UGX 550M-920M Revenue</h3>
              <p className="text-sm text-gray-300">Current annual revenue target 2025</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-blue-400">7 Revenue Streams</h3>
              <p className="text-sm text-gray-300">Diversified agricultural operations</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-yellow-400">Export Ready</h3>
              <p className="text-sm text-gray-300">International market access established</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-purple-400">Proven Systems</h3>
              <p className="text-sm text-gray-300">Operational since 2023 with growth trajectory</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700">
              <Link href="#partnership-opportunity">
                View Partnership Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass-card border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <Link href="#contact-partners">Schedule Meeting</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
