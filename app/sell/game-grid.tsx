"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Smartphone, AppWindowIcon as Apps } from "lucide-react";
import Image from "next/image";
import games from "@/components/game-tabs";
import Link from "next/link";

// const games = [
//   { id: 1, name: "Brawl Stars", image: "/placeholder.svg", category: "mobile" },
//   { id: 2, name: "PUBG Mobile", image: "/placeholder.svg", category: "mobile" },
//   { id: 3, name: "Black Russia", image: "/placeholder.svg", category: "game" },
//   { id: 4, name: "Clash of Clans", image: "/placeholder.svg", category: "mobile" },
//   { id: 5, name: "Standoff 2", image: "/placeholder.svg", category: "mobile" },
//   { id: 6, name: "Free Fire", image: "/placeholder.svg", category: "mobile" },
//   { id: 7, name: "Call of Duty", image: "/placeholder.svg", category: "mobile" },
//   { id: 8, name: "Clash Royale", image: "/placeholder.svg", category: "mobile" },
// ]

export function GameGrid() {
  const [activeTab, setActiveTab] = useState<"games" | "mobile" | "apps">(
    "mobile"
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Выберите игру / приложение
      </h2>

      <div className="flex space-x-2">
        <Button
          variant={activeTab === "games" ? "default" : "secondary"}
          className={`space-x-2 ${
            activeTab === "games"
              ? "bg-blue-600 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setActiveTab("games")}
        >
          <Gamepad2 className="h-4 w-4" />
          <span>Игры</span>
          <span className="text-sm opacity-70">292</span>
        </Button>

        <Button
          variant={activeTab === "mobile" ? "default" : "secondary"}
          className={`space-x-2 ${
            activeTab === "mobile"
              ? "bg-blue-600 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setActiveTab("mobile")}
        >
          <Smartphone className="h-4 w-4" />
          <span>Мобильные игры</span>
          <span className="text-sm opacity-70">231</span>
        </Button>

        <Button
          variant={activeTab === "apps" ? "default" : "secondary"}
          className={`space-x-2 ${
            activeTab === "apps"
              ? "bg-blue-600 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setActiveTab("apps")}
        >
          <Apps className="h-4 w-4" />
          <span>Приложения</span>
          <span className="text-sm opacity-70">44</span>
        </Button>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
        key={"something"}
      >
        {games.slice(0, 10).map((game) => (
          <Link href={`/product-info/${game.id}`}>
            <div
              key={game.id}
              className="group relative aspect-square cursor-pointer rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-700 transition-all"
            >
              <Image
                src={game.image}
                alt="game"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-sm text-white truncate">{game.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
