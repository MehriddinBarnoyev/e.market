import { CategoryNav } from "@/components/CategoryNav"
import Footer from "@/components/footer"
import GameCard from "@/components/game-grid"
import GamesTabs from "@/components/GamesTabs"
import { PromotionalCards } from "@/components/PromationalCards"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-foreground dark">
      <CategoryNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PromotionalCards />
        <GamesTabs />
        <GameCard/>
      </div>
        <Footer/>
    </div>
  )
}

