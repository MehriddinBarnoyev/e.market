import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  
  const categories = [
    "Донат", "Аккаунты", "Предметы", "Игровая валюта", "Скины", "Другое", "Буст", "Пополнение баланса"
  ]
  
  export function CategoryNav() {
    return (
      <NavigationMenu className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 cursor-pointer">
        <NavigationMenuList>
          {categories.map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink className="text-sm hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md">
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  
  