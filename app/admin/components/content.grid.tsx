import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GamepadIcon as GameController, Smartphone } from "lucide-react";
import Image from "next/image";

interface GridItem {
  id: string;
  name: string;
  icon: string;
}

const games: GridItem[] = [
  { id: "1", name: "Among Us", icon: "/placeholder.svg?height=48&width=48" },
  {
    id: "2",
    name: "Call of Duty",
    icon: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "3",
    name: "Counter-Strike",
    icon: "/placeholder.svg?height=48&width=48",
  },
  { id: "4", name: "Cyberpunk", icon: "/placeholder.svg?height=48&width=48" },
  { id: "5", name: "DayZ", icon: "/placeholder.svg?height=48&width=48" },
  {
    id: "6",
    name: "Dead by Daylight",
    icon: "/placeholder.svg?height=48&width=48",
  },
  // Add more games as needed
];

const apps: GridItem[] = [
  { id: "1", name: "App Store", icon: "/placeholder.svg?height=48&width=48" },
  { id: "2", name: "Discord", icon: "/placeholder.svg?height=48&width=48" },
  { id: "3", name: "PlayStation", icon: "/placeholder.svg?height=48&width=48" },
  { id: "4", name: "Spotify", icon: "/placeholder.svg?height=48&width=48" },
  { id: "5", name: "Steam", icon: "/placeholder.svg?height=48&width=48" },
  { id: "6", name: "Telegram", icon: "/placeholder.svg?height=48&width=48" },
  // Add more apps as needed
];

export function ContentGrid() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Добавить игру / приложение
          </h2>
          <Tabs defaultValue="games" className="">
            <TabsList className="bg-background ">
              <TabsTrigger
                value="games"
                className="data-[state=active]:bg-muted"
              >
                🎮 Игры
              </TabsTrigger>
              <TabsTrigger
                value="apps"
                className="data-[state=active]:bg-muted"
              >
                📱 Приложения
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Добавить категорию</h2>
          <Tabs defaultValue="games">
            <TabsList>
              <TabsTrigger value="games">
                <GameController className="w-4 h-4 mr-2" />
                Игра
              </TabsTrigger>
              <TabsTrigger value="apps">
                <Smartphone className="w-4 h-4 mr-2" />
                Приложение
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Игры</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {games.map((game) => (
              <div
                key={game.id}
                className="aspect-square rounded-lg bg-zinc-800 p-2 flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <Image
                  src={game.icon}
                  alt={game.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Приложения</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {apps.map((app) => (
              <div
                key={app.id}
                className="aspect-square rounded-lg bg-zinc-800 p-2 flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
