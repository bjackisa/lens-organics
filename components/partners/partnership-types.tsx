"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Handshake, Globe, Building } from "lucide-react"

export function PartnershipTypes() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 to-amber-50/50 dark:from-emerald-950/20 dark:to-amber-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
          >
            Partnership Types
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
            Choose Your Partnership Model
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer flexible partnership arrangements to meet your business needs and help you access Uganda's premium
            agricultural products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Bulk Purchasing</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">Ideal for manufacturers</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect for health product manufacturers, cosmetic companies, and essential oil distributors looking
                  for consistent, high-quality lemongrass oil supply.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Minimum order quantities available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Competitive bulk pricing in UGX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Quality consistency guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Flexible delivery schedules</span>
                  </div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Best For:</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    Companies needing regular supply of premium lemongrass essential oil for product manufacturing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Handshake className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Strategic Alliance</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">Long-term collaboration</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Develop long-term strategic partnerships for product development, market expansion, and mutual growth
                  in the health and wellness sector.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Joint product development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Exclusive supply agreements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Co-branding opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Market expansion support</span>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Best For:</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Established companies looking to expand into natural health products with a reliable Ugandan partner
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Export Partnership</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">International markets</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Partner with us to bring Ugandan premium agricultural products to international markets with UNBS
                  protocol-ready quality standards.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Export documentation support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Quality certification assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Competitive export pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Logistics coordination</span>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Best For:</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    International distributors and companies seeking authentic Ugandan agricultural products
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contract Manufacturing</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Custom processing</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Leverage our processing capabilities for custom manufacturing of agricultural products to your
                  specific requirements and quality standards.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Custom processing specifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Private labeling options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Quality control protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Scalable production capacity</span>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Best For:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Brands needing custom processing services with reliable quality and competitive pricing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Start Your Partnership?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact Mr. Fred and the Lens Organics team to discuss how we can work together to bring premium Ugandan
              agricultural products to your business.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
