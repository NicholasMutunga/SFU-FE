import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import { TimelineSection } from "@/components/timeline-section"

export default function AboutPage() {
  return (
    <main className="w-full">
      <Header />
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <Footer />
    </main>
  )
}
