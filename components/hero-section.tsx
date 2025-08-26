import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dsijcu1om/image/upload/v1756205309/WhatsApp_Image_2025-08-25_at_5.26.23_PM_ur0wxk.jpg"
          alt="Integrated farming operations at Lens Organics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-emerald-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            From Farm
            <span className="text-amber-400 block">To Future</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Uganda's premier integrated agricultural enterprise transforming seven sectors into premium products that
            meet global standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700 font-medium">
              <Link href="/operations">
                Explore Our Operations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass-card border-white/30 text-white hover:bg-white/20 bg-transparent font-medium"
            >
              <Link href="/contact">Wholesale Partnerships</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
