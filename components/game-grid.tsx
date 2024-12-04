import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  platform: string;
  platformIcon: string;
  category: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  description: string;
}

export default function GameCard() {
  const products: Product[] = [
    {
      id: 1,
      platform: "Roblox",
      platformIcon:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/f/7/c/f7c9f2a9f31bf5748c52fa1087126828a5333ac8_2_500x500.png",
      category: "Предметы",
      title: "НЕ ДЮП Evil Secret Agent / Cosmic / Подарок",
      image:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/f/7/c/f7c9f2a9f31bf5748c52fa1087126828a5333ac8_2_500x500.png",
      price: 299,
      originalPrice: 499,
      discount: 40,
      rating: 5,
      reviews: 2184,
      description: "",
    },
    {
      id:2,
      platform: "Roblox",
      platformIcon:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/f/7/c/f7c9f2a9f31bf5748c52fa1087126828a5333ac8_2_500x500.png",
      category: "Аккаунты",
      title: "Жирный акк Blox Fruits с пермами",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/3/2022/12/Marvel-Snap-ae48df0.jpg?quality=90&resize=660,440",
      price: 2149,
      originalPrice: 2999,
      discount: 28,
      rating: 5,
      reviews: 13,
      description: "",
    },
    {
      id: 3,
      platform: "PlayStation",
      platformIcon:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png",
      category: "Пополнение бумажника",
      title: "100 ЛИР | PLAYSTATION",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png",
      price: 649,
      originalPrice: 999,
      discount: 35,
      rating: 5,
      reviews: 1266,
      description: "",
    },
    {
      id: 4,
      platform: "Car Parking Multiplayer",
      platformIcon:
        "https://pbs.twimg.com/profile_images/1861735711302410240/j0ppXDRB_400x400.jpg",
      category: "Аккаунты",
      title: "✅115 ВИНИЛОВ✅ КУПЛЕНО ВСЕ⭐30K коинов + 50KK баксов⭐",
      image:
        "https://pbs.twimg.com/profile_images/1861735711302410240/j0ppXDRB_400x400.jpg",
      price: 139,
      originalPrice: 199,
      discount: 30,
      rating: 5,
      reviews: 250,
      description: "",
    },
    {
      id: 5,
      platform: "PlayStation",
      platformIcon:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png",
      category: "Пополнение бумажника",
      title: "100 ЛИР | PLAYSTATION",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png",
      price: 649,
      originalPrice: 999,
      discount: 35,
      rating: 5,
      reviews: 1266,
      description: "",
    },
    {
      id: 6,
      platform: "Roblox",
      platformIcon:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/f/7/c/f7c9f2a9f31bf5748c52fa1087126828a5333ac8_2_500x500.png",
      category: "Предметы",
      title: "НЕ ДЮП Evil Secret Agent / Cosmic / Подарок",
      image:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/f/7/c/f7c9f2a9f31bf5748c52fa1087126828a5333ac8_2_500x500.png",
      price: 299,
      originalPrice: 499,
      discount: 40,
      rating: 5,
      reviews: 2184,
      description: "",
    },
    {
      id: 7,
      platform: "Car Parking Multiplayer",
      platformIcon:
        "https://pbs.twimg.com/profile_images/1861735711302410240/j0ppXDRB_400x400.jpg",
      category: "Аккаунты",
      title: "✅115 ВИНИЛОВ✅ КУПЛЕНО ВСЕ⭐30K коинов + 50KK баксов⭐",
      image:
        "https://pbs.twimg.com/profile_images/1861735711302410240/j0ppXDRB_400x400.jpg",
      price: 139,
      originalPrice: 199,
      discount: 30,
      rating: 5,
      reviews: 250,
      description: "",
    },
    {
      id: 8,
      platform: "Roblox",
      platformIcon:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/f/7/c/f7c9f2a9f31bf5748c52fa1087126828a5333ac8_2_500x500.png",
      category: "Аккаунты",
      title: "Жирный акк Blox Fruits с пермами",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/3/2022/12/Marvel-Snap-ae48df0.jpg?quality=90&resize=660,440",
      price: 2149,
      originalPrice: 2999,
      discount: 28,
      rating: 5,
      reviews: 13,
      description: "",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link
          href={`/product-info?name=${encodeURIComponent(product.platform)}`}
        >
          <Card
            key={index}
            className="bg-zinc-900 border-zinc-800 overflow-hidden hover:shadow-slate-50 hover:translate-y-[-5px] transition-transform"
            
          >
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-black bg-opacity-50 rounded-full px-2 py-1">
                  <div className="relative h-6 w-6">
                    <Image
                      src={product.platformIcon}
                      alt={product.platform}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {product.platform}
                  </span>
                </div>
                <div className="absolute top-2 left-2 bg-zinc-800 text-white text-xs px-2 py-1 rounded">
                  {product.category}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="text-white font-medium line-clamp-2 text-sm">
                  {product.title}
                </h3>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < product.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-zinc-600 text-zinc-600"
                      }`}
                    />
                  ))}
                  <span className="text-zinc-400 text-xs ml-1">
                    {product.reviews}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="w-full flex justify-between items-end">
                <div>
                  <div className="text-white font-bold text-lg">
                    {product.price} ₽
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="destructive"
                      className="bg-red-500 text-white text-xs"
                    >
                      -{product.discount}%
                    </Badge>
                    <span className="text-zinc-400 text-xs line-through">
                      {product.originalPrice} ₽
                    </span>
                  </div>
                </div>
                <div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4" />
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
        ))}
      </div>
    </div>
  );
}
