'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useParallax } from "@/hooks/useParallax"

export function HeroSection() {
  const { elementRef, offset } = useParallax(0.3)

  return (
    <section 
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset}px)`
        }}
      >
        <img
          src="https://res.cloudinary.com/dsijcu1om/image/upload/v1756205309/WhatsApp_Image_2025-08-25_at_5.26.23_PM_ur0wxk.jpg"
          alt="Integrated farming operations at Lens Organics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-emerald-900/70" />
      </div>

      {/* Animated Background Overlay Elements */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="animate-float-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-emerald-200">Modern Agriculture Innovation</span>
            </span>
          </div>

          <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            From Farm
            <span className="text-amber-400 block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent animate-slide-in-right" style={{ animationDelay: '0.2s' }}>To Future</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium animate-float-up" style={{ animationDelay: '0.3s' }}>
            Uganda's premier integrated agricultural enterprise transforming seven sectors into premium products that
            meet global standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700 font-medium relative group overflow-hidden"
            >
              <Link href="/operations" className="flex items-center">
                <span className="relative z-10">
                  Explore Our Operations
                  <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass-card border-white/30 text-white hover:bg-white/20 bg-transparent font-medium backdrop-blur-sm"
            >
              <Link href="/contact">Wholesale Partnerships</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
