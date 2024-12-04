import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Menu, Share2 } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6" />
          <h1 className="text-lg font-medium">Профиль</h1>
        </div>
        <Share2 className="h-6 w-6" />
      </div>

      {/* Balance Card */}
      <Card
        className="mx-4 mt-4 bg-gray-800/50 border-gray-700"
        style={{ width: "40vh" }}
      >
        <div className="p-4 flex items-center gap-2 text-white">
          <div className="bg-blue-500 p-1.5 rounded">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </div>
          <span className="text-lg">0 ₽</span>
          <svg
            className="w-4 h-4 text-gray-400 ml-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Card>

      {/* Profile Info */}
      <div className="p-4 flex items-center gap-4">
        <Avatar className="h-16 w-16 bg-green-600">
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-medium">Username</h2>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="opacity-20">
                {star}
              </span>
            ))}
            <span className="ml-1">нет отзывов</span>
          </div>
          <p className="text-sm text-gray-400">на Playerok с ноября 2024</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="purchases" className="w-full">
        <TabsList className="w-full justify-start gap-2 bg-transparent p-4">
          <TabsTrigger
            value="items"
            className="bg-gray-800 data-[state=active]:bg-gray-700"
          >
            Мои товары 0
          </TabsTrigger>
          <TabsTrigger
            value="purchases"
            className="bg-blue-600 text-white data-[state=active]:bg-blue-700"
          >
            Покупки 0
          </TabsTrigger>
          <TabsTrigger
            value="sales"
            className="bg-gray-800 data-[state=active]:bg-gray-700"
          >
            Продажи 0
          </TabsTrigger>
        </TabsList>

        <div className="px-4">
          <TabsList className="w-full justify-start gap-2 bg-transparent mb-4">
            <TabsTrigger
              value="active"
              className="bg-blue-600 text-white data-[state=active]:bg-blue-700"
            >
              Активные 0
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="bg-gray-800 data-[state=active]:bg-gray-700"
            >
              Завершённые 0
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <span className="text-6xl mb-4">😕</span>
          <h3 className="text-xl font-medium mb-2">Нет покупок</h3>
          <p className="text-gray-400 mb-6">Давайте что-нибудь выберем</p>
          <Link href={"/"}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full max-w-md">
              Выбрать игру/приложение
            </Button>
          </Link>
        </div>
      </Tabs>
    </div>
  );
}
