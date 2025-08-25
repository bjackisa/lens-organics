"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Droplets, Package, Globe } from "lucide-react"

export function PartnershipOpportunity() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 to-amber-50/50 dark:from-emerald-950/20 dark:to-amber-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
          >
            Partnership Opportunities
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
            Partner with Uganda's Rising Agricultural Enterprise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join Mr. Fred and the Lens Organics team in building Uganda's premium agricultural value chain. We're
            seeking strategic business partners who share our vision of transforming raw agricultural products into
            premium health solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Raw Material Supply</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consistent supply of premium lemongrass and other agricultural products from our Nakaseke and Bukeerere
                farms.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Essential Oil Production</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Premium lemongrass essential oil processed at our facility, ready for bulk purchase by health and
                cosmetic companies.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contract Manufacturing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Partner with us for custom processing and manufacturing of agricultural products to your specifications.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Export Partnerships</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Collaborate on export opportunities with our UNBS protocol-ready products for international markets.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Partner with Lens Organics?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Proven Leadership</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Under Mr. Fred's experienced management, we've built sustainable operations across multiple
                      agricultural sectors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Quality Focus</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our processing facility ensures consistent, high-quality essential oils and agricultural products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Growth Potential</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Young company with ambitious expansion plans and commitment to building Uganda's agricultural
                      value chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/processing-facility.png"
                alt="Lens Organics processing facility"
                className="rounded-xl shadow-lg mb-6 w-full"
              />
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Start Partnership Discussion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
