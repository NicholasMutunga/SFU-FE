import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="w-full">
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}
