import games from '@/components/game-tabs'
import GamesTabs from '@/components/GamesTabs'


export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Games and Apps</h1>
      <GamesTabs games={games} />
    </main>
  )
}

