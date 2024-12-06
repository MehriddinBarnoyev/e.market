"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import games from "@/components/game-tabs";
import { Toast } from "@/components/ui/toast";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = games.find((game) => game.id === params.id);

  if (!product) {
    notFound();
  }
  const [mainImage, setMainImage] = useState(product.image);
  const [selectedMemory, setSelectedMemory] = useState("8/256 GB");
  const [selectedColor, setSelectedColor] = useState("black");
  const [isFavorite, setIsFavorite] = useState(false);

  // Create an array of images (you may want to replace these with actual additional images)
  const images = [product.image, product.image, product.image];

  const memoryOptions = {
    "8/256 GB": 195900,
    "6/128GB": 175900,
  };

  const colorOptions = ["black", "green"];

  const addToCart = () => {
    Toast({
      title: "Savatga qo'shildi",
      description: `${product.name} (${selectedMemory}, ${selectedColor}) savatga qo'shildi.`,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Toast({
      title: isFavorite
        ? "Sevimlilardan olib tashlandi"
        : "Sevimlilarga qo'shildi",
      description: `${product.name} ${
        isFavorite ? "sevimlilardan olib tashlandi" : "sevimlilarga qo'shildi"
      }.`,
    });
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-[100px_1fr_300px] gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                width={100}
                height={100}
                className={`rounded-lg border border-gray-800 cursor-pointer transition-opacity duration-200 ${
                  mainImage === img
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-75"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex flex-col gap-2 text-white">
            <div className="relative aspect-video bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden">
              <Image
                src={mainImage}
                alt={product.id}
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-900 rounded-xl ">
              <div className="text-white space-y-2 ">
                <p className="">Xotira</p>
                <div className="flex gap-2">
                  {Object.keys(memoryOptions).map((memory) => (
                    <Badge
                      key={memory}
                      variant="outline"
                      className={`cursor-pointer text-white ${
                        selectedMemory === memory
                          ? "bg-gray-800"
                          : "bg-transparent"
                      }`}
                      onClick={() => setSelectedMemory(memory)}
                    >
                      {memory}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white">Rang</p>
                <div className="flex gap-2">
                  {colorOptions.map((color) => (
                    <div
                      key={color}
                      className={`w-6 h-6 rounded-full bg-${color} border-2 cursor-pointer ${
                        selectedColor === color
                          ? "border-white"
                          : "border-transparent"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>4.8 (87 sharh)</span>
                <span>•</span>
                <span>300+ buyurtma</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {memoryOptions[selectedMemory].toLocaleString()}₽
                </span>
                <span className="text-gray-400 line-through">
                  220 000 ₽
                </span>
              </div>
              <Badge variant="destructive" className="bg-red-500">
                -35%
              </Badge>
            </div>

            <div className="space-y-4 bg-gray-900 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Sotuvda 36 dona bor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Bu hafta 144 kishi sotib oldi</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={addToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Savatga qo'shish
              </Button>
              <Button
                variant="outline"
                className={`border-gray-700`}
                onClick={toggleFavorite}
              >
                <Heart
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isFavorite ? "text-red-800" : "text-gray-700"
                  }`}
                />
              </Button>
            </div>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <div className="p-4 space-y-4">
                <h3 className="font-semibold">Mahsulot tavsilotlari:</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>{product.description}</p>
                  <p>• Kamera: {product.category}</p>
                  <p>• Batareya: {product.reviews}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
