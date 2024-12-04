import GameCard from "@/components/game-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { GameGrid } from "./game-grid";

const Page = () => {
  return (
    <div className="min-h-screen bg-dark">
      <GameGrid />
    </div>
  );
};

export default Page;
