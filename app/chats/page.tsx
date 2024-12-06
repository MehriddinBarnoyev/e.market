"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, Search } from "lucide-react";
import ChatView from "./component/chat-view";

const users = [
  {
    id: 1,
    name: "Анна С.",
    message: "Привет! Как дела?",
    time: "14:30",
    unread: 2,
  },
  {
    id: 2,
    name: "Иван П.",
    message: "Спасибо за игру!",
    time: "Вчера",
    unread: 0,
  },
  {
    id: 3,
    name: "Мария К.",
    message: "Когда следующая встреча?",
    time: "Пн",
    unread: 1,
  },
  {
    id: 4,
    name: "Алексей Д.",
    message: "Отличная сделка!",
    time: "Вс",
    unread: 0,
  },
  {
    id: 5,
    name: "Ольга В.",
    message: "Новые предложения?",
    time: "Пт",
    unread: 3,
  },
];

export default function ChatsPage() {
  const [chats, setChats] = useState(users);
  const [selectedChat, setSelectedChat] = useState<
    (typeof users)[0] | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleChatClick = (chat: (typeof users)[0]) => {
    setSelectedChat(chat);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  if (selectedChat) {
    return <ChatView chat={selectedChat} onBack={handleBackToList} />;
  }

  return (
    <div className="flex flex-col h-screen bg-dark ">
      {/* Search Input */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="w-30 text-end pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-4 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleChatClick(chat)}
          >
            <Avatar>
              <AvatarImage src={`https://i.pravatar.cc/100?u=${chat.id}`} />
              <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h2 className="text-sm font-medium text-white truncate">
                  {chat.name}
                </h2>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-400 truncate">{chat.message}</p>
            </div>
            {chat.unread > 0 && (
              <div className="bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </ScrollArea>

      {/* New Chat Button */}
      <div className="p-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Новый чат
        </Button>
      </div>
    </div>
  );
}
