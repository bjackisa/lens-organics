"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Factory, Truck, Users } from "lucide-react"

export function BusinessModel() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
          >
            Our Business Model
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">From Farm to Finished Product</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lens Organics operates an integrated agricultural business model under Mr. Fred's leadership, focusing on
            value addition from cultivation to premium finished products.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-emerald-700 dark:text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-900 dark:text-emerald-100">Cultivation</h3>
              <p className="text-emerald-700 dark:text-emerald-300 text-sm">
                <strong>Bukeerere Farm:</strong> Dedicated lemongrass cultivation
                <br />
                <strong>Nakaseke Farm:</strong> Multi-crop operations including plantain, avocado, macadamia, coffee,
                poultry, and aquaculture
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900 dark:text-amber-100">Processing</h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                On-site distillation facility for lemongrass essential oil production. Plans for expanding processing
                capabilities for other crops.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">Distribution</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Direct sales to businesses, bulk buyers, and strategic partnerships for local and export markets.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-700 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-100">Partnerships</h3>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Strategic business partnerships with health product manufacturers, cosmetic companies, and export
                businesses.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/30 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Current Focus: Lemongrass Excellence
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Our primary operation centers on lemongrass cultivation and essential oil production. The Bukeerere
                  farm is dedicated entirely to lemongrass, while our larger Nakaseke facility handles processing and
                  houses our distillation equipment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/70 dark:bg-gray-900/70 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Production Capacity</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Premium lemongrass essential oil with consistent quality and purity
                    </p>
                  </div>
                  <div className="bg-white/70 dark:bg-gray-900/70 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Quality Standards</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      UNBS protocol-ready products for health and cosmetic applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/lemongrass-field.png"
                alt="Lemongrass cultivation at Bukeerere farm"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
