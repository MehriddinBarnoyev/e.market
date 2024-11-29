import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const games = [
  {
    name: "Roblox",
    img: "https://download.logo.wine/logo/Roblox/Roblox-Logo.wine.png",
  },
  {
    name: "Fortnite",
    img: "https://crystalpng.com/wp-content/uploads/2024/09/Fortnite-logo-png.png",
  },
  {
    name: "Genshin Impact",
    img: "https://logos-world.net/wp-content/uploads/2024/01/Genshin-Impact-Logo.jpg",
  },
  {
    name: "Counter-Strike",
    img: "https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png/revision/latest?cb=20230330015359",
  },
  {
    name: "Minecraft",
    img: "https://preview.redd.it/minecraft-logo-v0-ak9w918zi5r81.png?auto=webp&s=614e5180aa1f7068676a06351c8edffc86b3b58a",
  },
  {
    name: "Valorant",
    img: "https://cdn.vectorstock.com/i/1000v/37/87/valorant-game-logo-icon-eps-10-gaming-streamer-vector-33193787.jpg",
  },
  {
    name: "PlayStation",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png",
  },
  {
    name: "GTA Online",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Grand_Theft_Auto_Online_Logo.svg",
  },
  {
    name: "War Thunder",
    img: "https://pbs.twimg.com/profile_images/1861735711302410240/j0ppXDRB_400x400.jpg",
  },
  {
    name: "Steam",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png",
  },
  {
    name: "Discord",
    img: "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
  },
];

const apps = [
  {
    name: "Telegram",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
  },
  {
    name: "TikTok",
    img: "https://static.vecteezy.com/system/resources/previews/023/986/561/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png",
  },
  {
    name: "App Store",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png",
  },
  {
    name: "YouTube",
    img: "https://img.freepik.com/premium-vector/youtube-logo-with-red-square_876006-17.jpg",
  },
];

export function GamesTabs() {
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
          {games.map((game) => (
            <div
              key={game.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-muted rounded-xl mb-2 flex items-center justify-center">
                <Image
                  src={game.img}
                  alt={game.name}
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
              </div>
              <span className="text-sm text-muted-foreground">{game.name}</span>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="apps">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-muted rounded-xl mb-2 flex items-center justify-center">
                <Image
                  src={app.img}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
              </div>
              <span className="text-sm text-muted-foreground">{app.name}</span>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
