"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactPartners() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
          >
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Start Your Partnership Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to partner with Uganda's rising agricultural enterprise? Contact Mr. Fred and our team to discuss how
            Lens Organics can meet your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <Card className="border-0 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-700 dark:text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Phone</h4>
                      <p className="text-emerald-700 dark:text-emerald-300">+256 772 614807</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-700 dark:text-amber-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100">Email</h4>
                      <p className="text-amber-700 dark:text-amber-300">partnerships@lensorganics.ug</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">Farm Locations</h4>
                      <p className="text-blue-700 dark:text-blue-300">Bukeerere, Mukono & Nakaseke</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100">Business Hours</h4>
                      <p className="text-purple-700 dark:text-purple-300">Mon-Fri: 8AM-6PM EAT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/30 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Management Contact</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Mr. Fred</strong> - General Manager
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Direct oversight of all operations and partnership discussions
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Partnership Inquiry</h3>

            <Card className="border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <Input placeholder="Your company name" className="border-gray-200 dark:border-gray-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Contact Person
                      </label>
                      <Input placeholder="Your full name" className="border-gray-200 dark:border-gray-700" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+256 xxx xxx xxx" className="border-gray-200 dark:border-gray-700" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Partnership Interest
                    </label>
                    <select className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                      <option>Bulk Purchasing</option>
                      <option>Strategic Alliance</option>
                      <option>Export Partnership</option>
                      <option>Contract Manufacturing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your business needs and how we can work together..."
                      rows={4}
                      className="border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Send Partnership Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
