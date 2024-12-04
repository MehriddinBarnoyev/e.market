"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import games from "@/components/game-tabs";

export function ContentGrid() {
  return (
    <div className="p-6 space-y-8 bg-zinc-900 text-zinc-100">
      <div className="flex justify-between items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Добавить игру / приложение
          </h2>
          <Tabs defaultValue="games" className="w-full">
            <TabsList className="bg-zinc-800/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-800/60 p-1 rounded-xl">
              <TabsTrigger
                value="games"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100 transition-all duration-200"
              >
                🎮 Игры
              </TabsTrigger>
              <TabsTrigger
                value="apps"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100 transition-all duration-200"
              >
                📱 Приложения
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-zinc-200">Игры</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {games.map((game) => (
            <Card
              key={game.name}
              className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-zinc-800 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-700/30 hover:-translate-y-1"
            >
              <div className="relative aspect-square p-6">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/30 transition-all duration-300 group-hover:bg-zinc-900/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-zinc-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Image
                      src={game.img}
                      alt={game.name}
                      width={70}
                      height={70}
                      className={cn(
                        "relative z-10 h-16 w-16 object-contain transition-all duration-300 group-hover:scale-110",
                        "drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <h3 className="text-sm font-medium text-center truncate text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                  {game.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
