import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartsFinder } from "@/components/parts-finder"
import { TopBrands } from "@/components/top-brands"
import { StatisticsSection } from "@/components/statistics-section"
import { CompanyInfo } from "@/components/company-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PartsFinder />
        <TopBrands />
        <StatisticsSection />
        <CompanyInfo />
      </main>
      <Footer />
    </div>
  )
}
