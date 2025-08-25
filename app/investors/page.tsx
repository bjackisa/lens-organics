import { Navigation } from "@/components/navigation"
import { InvestorsHero } from "@/components/investors/investors-hero"
import { InvestmentOpportunity } from "@/components/investors/investment-opportunity"
import { BusinessModel } from "@/components/investors/business-model"
import { FinancialProjections } from "@/components/investors/financial-projections"
import { RiskMitigation } from "@/components/investors/risk-mitigation"
import { PartnershipTypes } from "@/components/investors/partnership-types"
import { ContactInvestors } from "@/components/investors/contact-investors"

export default function InvestorsPage() {
  return (
    <main>
      <Navigation />
      <InvestorsHero />
      <InvestmentOpportunity />
      <BusinessModel />
      <FinancialProjections />
      <RiskMitigation />
      <PartnershipTypes />
      <ContactInvestors />
    </main>
  )
}
