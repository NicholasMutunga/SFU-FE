import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DonateHero } from "@/components/donate-hero"
import { DonationOptions } from "@/components/donation-options"
import { ImpactStory } from "@/components/impact-story"

export default function DonatePage() {
  return (
    <main className="w-full">
      <Header />
      <DonateHero />
      <DonationOptions />
      <ImpactStory />
      <Footer />
    </main>
  )
}
