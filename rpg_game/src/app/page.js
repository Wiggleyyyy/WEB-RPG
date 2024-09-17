"use client"
import Image from "next/image";
import { Navigation } from "@/components/navigation";

export default function Home() {
  function Move(direction) {
    switch (direction) {
      case "up": 

        break;
      case "left":
        
        break;
    }
  }

  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh] ">
      <Navigation MoveDirection={Move} />
    </main>
  );
}


