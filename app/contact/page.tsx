import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Building, Handshake } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "+256 772 614807",
      description: "Direct line for immediate assistance",
      action: "tel:+256772614807",
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@lensorganics.ug",
      description: "For detailed inquiries and documentation",
      action: "mailto:info@lensorganics.ug",
      actionText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Farm Locations",
      details: "Bukeerere, Mukono & Nakaseke",
      description: "Visit our operational facilities",
      action: "/operations",
      actionText: "View Locations",
    },
  ]

  const inquiryTypes = [
    {
      icon: Users,
      title: "Wholesale Orders",
      description: "Bulk purchasing for retailers and distributors",
      badge: "High Priority",
      badgeColor: "bg-emerald-500",
    },
    {
      icon: Building,
      title: "Business Partnerships",
      description: "Strategic alliances and supply agreements",
      badge: "Strategic",
      badgeColor: "bg-blue-500",
    },
    {
      icon: Handshake,
      title: "Product Procurement",
      description: "Premium agricultural products and oils",
      badge: "Commercial",
      badgeColor: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              Let's Connect
            </Badge>
            <h1 className="font-serif font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Contact Lens Organics
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Ready to explore opportunities in premium Ugandan agriculture? We're here to discuss wholesale partnerships
              and product procurement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="glass-card p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <method.icon className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <div className="font-semibold text-lg mb-2">{method.details}</div>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <Button asChild className="w-full glass-card hover:bg-emerald-600 hover:text-white">
                    <a href={method.action}>{method.actionText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the type of inquiry that best matches your needs for faster, more targeted assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {inquiryTypes.map((type, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="glass-card p-3 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                      <type.icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <Badge className={`${type.badgeColor} text-white`}>{type.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input placeholder="Your full name" className="glass-card" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" className="glass-card" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="+256 XXX XXX XXX" className="glass-card" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company/Organization</label>
                      <Input placeholder="Your company name" className="glass-card" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Inquiry Type *</label>
                    <select className="w-full p-3 glass-card rounded-md border border-input bg-background">
                      <option value="">Select inquiry type</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="procurement">Product Procurement</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      placeholder="Please provide details about your inquiry, including any specific requirements or questions you may have..."
                      className="glass-card min-h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1 glass-card hover:bg-emerald-600 hover:text-white">
                      Send Message
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="glass-card bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Instead
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 rounded-2xl text-center">
            <div className="glass-card p-4 rounded-full w-fit mx-auto mb-6">
              <Clock className="h-8 w-8 text-emerald-500" />
            </div>
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-6">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-3 text-emerald-600">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">Farm Visits</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>By Appointment</span>
                    <span>Any Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Times</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notice Required</span>
                    <span>24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
