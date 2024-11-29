import { CategoryNav } from "@/components/CategoryNav"
import { GamesTabs } from "@/components/GamesTabs"
import { PromotionalCards } from "@/components/PromationalCards"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <CategoryNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PromotionalCards />
        <GamesTabs />
      </div>
    </div>
  )
}

