import { Navigation } from "@/components/navigation"
import { PartnersHero } from "@/components/partners/partners-hero"
import { PartnershipOpportunity } from "@/components/partners/partnership-opportunity"
import { BusinessModel } from "@/components/partners/business-model"
import { PartnershipTypes } from "@/components/partners/partnership-types"
import { ContactPartners } from "@/components/partners/contact-partners"

export default function PartnersPage() {
  return (
    <main>
      <Navigation />
      <PartnersHero />
      <PartnershipOpportunity />
      <BusinessModel />
      <PartnershipTypes />
      <ContactPartners />
    </main>
  )
}
