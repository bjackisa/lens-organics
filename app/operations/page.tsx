import { Navigation } from "@/components/navigation"
import { OperationsHero } from "@/components/operations/operations-hero"
import { OperationsGrid } from "@/components/operations/operations-grid"
import { FarmLocations } from "@/components/operations/farm-locations"
import { OperationsStats } from "@/components/operations/operations-stats"
import { ProcessingFacilities } from "@/components/operations/processing-facilities"

export default function OperationsPage() {
  return (
    <main>
      <Navigation />
      <OperationsHero />
      <OperationsStats />
      <OperationsGrid />
      <ProcessingFacilities />
      <FarmLocations />
    </main>
  )
}
