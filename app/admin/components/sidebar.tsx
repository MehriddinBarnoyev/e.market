import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  FolderTree,
  Package,
  Users,
  MessageSquare,
  BarChart,
  Megaphone,
  Settings,
} from "lucide-react";
import React from "react";

export function Sidebar() {
  const menuItems = [
    {
      href: "/",
      icon: <LayoutDashboard />,
      label: "Панель управления",
    },
    { href: "/admin/orders", icon: <ShoppingCart />, label: "Заказы", badge: 8 },
    { href: "/admin/categories", icon: <FolderTree />, label: "Категории" },
    { href: "/admin/products", icon: <Package />, label: "Товары" },
    { href: "/admin/users", icon: <Users />, label: "Пользователи" },
    { href: "/admin/contract", icon: <MessageSquare />, label: "КонтрОК" },
    { href: "/admin/analitcs", icon: <BarChart />, label: "Аналитика" },
    { href: "/admin/adds", icon: <Megaphone />, label: "Реклама" },
    { href: "/admin/settings", icon: <Settings />, label: "Настройки" },
  ];

  return (
    <div className="w-64 h-screen bg-zinc-900 text-zinc-100 p-4 flex flex-col gap-2">
      <div className="mb-8">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
