import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import games from "./game-tabs";

const GamesTabs = () => {
  return (
    <Tabs defaultValue="games" className="mb-12">
      <TabsList className="bg-background ">
        <TabsTrigger value="games" className="data-[state=active]:bg-muted">
          🎮 Игры
        </TabsTrigger>
        <TabsTrigger value="apps" className="data-[state=active]:bg-muted">
          📱 Приложения
        </TabsTrigger>
      </TabsList>
      <TabsContent value="games">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-6">
          {games.slice(0, 10).map((game) => (
            <div
              key={game.name}
              className="flex flex-col items-center cursor-pointer text-center"
            >
              <Link
                href={`/product-info?name=${encodeURIComponent(game.name)}`}
              >
                <div className="w-16 h-16 rounded-xl mb-2 flex items-center justify-center">
                  <Image
                    src={game.img}
                    alt={game.name}
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {game.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="apps">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-6">
          {games.slice(11).map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center cursor-pointer text-center"
            >
              <Link href={`/product-info?name=${encodeURIComponent(app.name)}`}>
                <div className="w-16 h-16 rounded-xl mb-2 flex items-center justify-center">
                  <Image
                    src={app.img}
                    alt={app.name}
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {app.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default GamesTabs;
