import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegisterHero } from "@/components/register-hero"
import { RegisterForm } from "@/components/register-form"
import { MembershipBenefits } from "@/components/membership-benefits"

export default function RegisterPage() {
  return (
    <main className="w-full">
      <Header />
      <RegisterHero />
      <RegisterForm />
      <MembershipBenefits />
      <Footer />
    </main>
  )
}
