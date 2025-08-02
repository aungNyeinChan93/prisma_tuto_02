import { Spicy_Rice } from "next/font/google";
import React from "react";

export const generateMetaData = async ({ params }: GameDetailProps) => {
  const { id } = await params;
  return {
    title: `Game - ${id}`,
    description: "Game Detail Page",
  };
};

interface GameDetailProps {
  params: Promise<{ id: string }>;
}

const spicyRiceFont = Spicy_Rice({
  weight: "400",
  subsets: ["latin"],
});

const GameDetail: React.FC<GameDetailProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main className={`${spicyRiceFont.className} text-red-600 text-2xl`}>
        Game ID : {id}
      </main>
    </React.Fragment>
  );
};

export default GameDetail;
