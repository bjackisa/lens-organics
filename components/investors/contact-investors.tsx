import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Calendar, FileText, Users, TrendingUp } from "lucide-react"

export function ContactInvestors() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Line",
      details: "+256 772 614807",
      description: "Immediate response for qualified investors",
      priority: "High Priority",
      availability: "Mon-Fri 8AM-6PM EAT",
    },
    {
      icon: Mail,
      title: "Investment Inquiries",
      details: "investors@lensorganics.ug",
      description: "Detailed proposals and documentation",
      priority: "Comprehensive",
      availability: "24/7 Response",
    },
    {
      icon: Calendar,
      title: "Farm Visits",
      details: "Schedule Site Visit",
      description: "On-site operations review and assessment",
      priority: "Recommended",
      availability: "By Appointment",
    },
  ]

  const investmentDocuments = [
    {
      icon: FileText,
      title: "Investment Deck",
      description: "Comprehensive business overview and opportunity presentation",
      pages: "25 pages",
      updated: "Current",
    },
    {
      icon: TrendingUp,
      title: "Financial Projections",
      description: "5-year financial forecasts and scenario analysis",
      pages: "15 pages",
      updated: "Q1 2025",
    },
    {
      icon: Users,
      title: "Operations Report",
      description: "Detailed operational metrics and performance data",
      pages: "20 pages",
      updated: "Monthly",
    },
  ]

  const investorTypes = [
    {
      type: "Institutional Investors",
      minInvestment: "UGX 1.8B+",
      focus: "Growth capital and strategic partnerships",
      benefits: "Board representation, quarterly reporting, strategic input",
    },
    {
      type: "Family Offices",
      minInvestment: "UGX 92M+",
      focus: "Long-term value creation and impact investing",
      benefits: "Direct engagement, operational insights, legacy building",
    },
    {
      type: "Agricultural Funds",
      minInvestment: "UGX 370M+",
      focus: "Sector expertise and value-added support",
      benefits: "Industry knowledge, network access, operational support",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Connect With Our Investment Team
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Ready to explore investment opportunities in Uganda's premium agricultural sector? Our team is prepared to
            discuss partnerships, provide detailed documentation, and arrange site visits.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="glass-card p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <method.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {method.title}
                  </CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs">
                    {method.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="font-semibold text-lg mb-2">{method.details}</div>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <div className="text-xs text-muted-foreground">{method.availability}</div>
                </div>
                <Button className="w-full glass-card hover:bg-emerald-600 hover:text-white">
                  {method.title === "Direct Line"
                    ? "Call Now"
                    : method.title === "Investment Inquiries"
                      ? "Send Email"
                      : "Schedule Visit"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Documents */}
        <div className="glass-card p-10 rounded-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Investment Documentation</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive documentation package available for qualified investors, including detailed financial
              projections, operational metrics, and strategic analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {investmentDocuments.map((doc, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                  <doc.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {doc.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">{doc.description}</p>

                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{doc.pages}</span>
                  <Badge variant="outline" className="text-xs">
                    {doc.updated}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="glass-card hover:bg-emerald-600 hover:text-white">
              Request Documentation Package
            </Button>
          </div>
        </div>

        {/* Investor Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Investor Profiles</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              We work with various investor types, each with tailored engagement approaches and benefit structures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investorTypes.map((investor, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                      {investor.type}
                    </CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      {investor.minInvestment}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <h5 className="font-medium text-sm text-emerald-600 mb-2">Investment Focus</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{investor.focus}</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <h5 className="font-medium text-sm text-blue-600 mb-2">Key Benefits</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{investor.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-10 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Investment Inquiry Form</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Complete the form below to begin the investment discussion process. All inquiries are treated with strict
              confidentiality.
            </p>
          </div>

          <form className="max-w-4xl mx-auto space-y-6">
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
                <label className="text-sm font-medium">Organization/Fund</label>
                <Input placeholder="Your organization name" className="glass-card" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Investor Type *</label>
                <select className="w-full p-3 glass-card rounded-md border border-input bg-background">
                  <option value="">Select investor type</option>
                  <option value="institutional">Institutional Investor</option>
                  <option value="family-office">Family Office</option>
                  <option value="agricultural-fund">Agricultural Fund</option>
                  <option value="private-equity">Private Equity</option>
                  <option value="individual">Individual Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Investment Range</label>
                <select className="w-full p-3 glass-card rounded-md border border-input bg-background">
                  <option value="">Select investment range</option>
                  <option value="25k-50k">UGX 92M - 185M</option>
                  <option value="50k-100k">UGX 185M - 370M</option>
                  <option value="100k-250k">UGX 370M - 920M</option>
                  <option value="250k-500k">UGX 920M - 1.8B</option>
                  <option value="500k+">UGX 1.8B+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Investment Objectives *</label>
              <Textarea
                placeholder="Please describe your investment objectives, timeline, and any specific interests in our agricultural operations..."
                className="glass-card min-h-[120px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" className="flex-1 glass-card hover:bg-emerald-600 hover:text-white">
                Submit Investment Inquiry
              </Button>
              <Button type="button" variant="outline" size="lg" className="glass-card bg-transparent">
                <Phone className="mr-2 h-4 w-4" />
                Call Instead
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
