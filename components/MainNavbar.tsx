"use client"

import Image from "next/image";
import { Search, Plus, MessageSquare, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/hooks/useAuth";

const categories = [
  "Донат",
  "Аккаунты",
  "Предметы",
  "Игровая валюта",
  "Скины",
  "Другое",
  "Буст",
  "Пополнение баланса",
];

export function MainNavbar() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  const handleUserIconClick = () => {
    if (isLoading) return;
    if (user) {
      router.push('/user-profile');
    } else {
      router.push('/auth');
    }
  };

  return (
    <nav className="bg-[#000] border-b border-border ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Link href={"/"}>
                <Image
                  src="https://r1creative.net/wp-content/uploads/2017/09/R1-Creative-Hell-Rell-Logo.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-md object-contain"
                />
              </Link>
            </div>
            <span className="text-sm bg-[#1e1e1e] text-white rounded px-2 py-1">
              ⭐ 5.0
            </span>
          </div>
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Поиск игр и приложений"
                className="w-full bg-[#1e1e1e] border-0 placeholder:text-gray-400 text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={"/sell/terms-of-sale"}>
              <Button variant="ghost" size="icon" className="text-gray-400 ">
                <Plus className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"/chats"}>
              <Button variant="ghost" size="icon" className="text-gray-400 ">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-400"
              onClick={handleUserIconClick}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

