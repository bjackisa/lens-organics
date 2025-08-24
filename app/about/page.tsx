import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Calendar, Phone } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      year: "2023",
      title: "Company Foundation",
      description: "Lens Health Supplies SMC Limited registered with URSB, beginning our agricultural journey",
    },
    {
      year: "2023-2024",
      title: "Operations Launch",
      description: "Established lemon grass cultivation in Bukeerere, Mukono with processing facility setup",
    },
    {
      year: "2024",
      title: "Expansion Phase",
      description: "Acquired second farm location in Nakaseke, diversified into multiple agricultural sectors",
    },
    {
      year: "2025",
      title: "Value Addition",
      description: "Premium lemon grass oil production, UNBS protocol compliance, export readiness",
    },
  ]

  const leadership = [
    {
      role: "Founder & CEO",
      description: "Visionary leader with deep agricultural expertise and business acumen",
      focus: "Strategic direction, investor relations, market expansion",
    },
    {
      role: "Operations Director",
      description: "Experienced agricultural operations manager overseeing all farm activities",
      focus: "Production optimization, quality control, supply chain management",
    },
    {
      role: "Technical Manager",
      description: "Specialist in value-added processing and product development",
      focus: "Processing innovation, quality standards, technical compliance",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              Established 2023
            </Badge>
            <h1 className="font-serif font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              About Lens Organics
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Lens Health Supplies SMC Limited - Transforming Ugandan agriculture through integrated farming, premium
              processing, and sustainable value creation since 2023.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="glass-card hover:bg-emerald-600 hover:text-white">
                <Link href="/operations">Explore Our Operations</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card bg-transparent">
                <Link href="/investors">Investment Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Founded in 2023 and registered with URSB, Lens Health Supplies SMC Limited emerged from a vision to
                  revolutionize Ugandan agriculture through integrated farming and premium value-added processing.
                </p>
                <p>
                  What began as a focused lemon grass operation in Bukeerere, Mukono, has evolved into a sophisticated
                  agricultural enterprise spanning seven distinct sectors, each contributing to our comprehensive
                  approach to sustainable farming and premium product development.
                </p>
                <p>
                  Today, we operate across two strategic farm locations, combining traditional agricultural wisdom with
                  modern processing techniques to create products that meet international quality standards while
                  supporting local communities and sustainable practices.
                </p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <img
                src="/images/lemongrass-field.png"
                alt="Lens Organics Farm"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">2+</div>
                  <div className="text-sm text-muted-foreground">Years Operating</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">7</div>
                  <div className="text-sm text-muted-foreground">Agricultural Sectors</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">2</div>
                  <div className="text-sm text-muted-foreground">Farm Locations</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="glass-card p-3 rounded-full w-fit mb-4">
                  <Target className="h-6 w-6 text-emerald-500" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  To transform Ugandan agriculture through integrated farming operations that create premium,
                  value-added products while maintaining the highest quality standards and sustainable practices that
                  benefit local communities and international markets.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="glass-card p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  To become East Africa's leading integrated agricultural enterprise, recognized for innovation in
                  sustainable farming, premium product development, and creating lasting value for investors,
                  communities, and the global marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to sophisticated agricultural enterprise - key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="glass-card p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-16 bg-gradient-to-b from-emerald-200 to-transparent dark:from-emerald-800 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 glass-card p-6 rounded-xl group-hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                        {milestone.year}
                      </Badge>
                      <h3 className="font-semibold text-xl group-hover:text-emerald-600 transition-colors">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals driving innovation and growth in Ugandan agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="glass-card p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                    <Users className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-emerald-600 transition-colors">
                    {leader.role}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
                  <div className="glass-card p-3 rounded-lg">
                    <h4 className="font-medium text-sm text-emerald-600 mb-2">Key Focus Areas</h4>
                    <p className="text-xs text-muted-foreground">{leader.focus}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 rounded-2xl text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in transforming Ugandan agriculture. Whether you're an investor, partner, or customer, we'd love
              to discuss opportunities for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="glass-card hover:bg-emerald-600 hover:text-white">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card bg-transparent">
                <Link href="tel:+256772614807">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +256 772 614807
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
