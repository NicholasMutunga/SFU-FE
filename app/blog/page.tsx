import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { FeaturedArticle } from "@/components/featured-article"
import { NewsletterCTA } from "@/components/newsletter-cta"

export default function BlogPage() {
  return (
    <main className="w-full">
      <Header />
      <BlogHero />
      <FeaturedArticle />
      <BlogGrid />
      <NewsletterCTA />
      <Footer />
    </main>
  )
}
