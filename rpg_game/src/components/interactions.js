"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
  

export function Interaction({ tile }) {
  function CheckForAnimals() {
    var isAnimals = false;
    var randomNumber = Math.floor(Math.random() * 101);
    if (randomNumber > 50 && randomNumber < 90){
        //For animals
    } else if (randomNumber >= 90) {
        //For ambushes
    } else {
        //For nothing
    }
  }

  return (
    <div className="w-[20vw] h-[37.5vh] bg-zinc-700 border-2 border-yellow-400 absolute right-2 top-2 rounded-lg">
        {tile.tileType === "plain" ? (
            <div className="flex items-center justify-center h-[100%]">
                <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" onClick={() => CheckForAnimals()}>Check for animals</button>
            </div>
        ) : tile.tileType === "settlement" ? (
            <h1>settlement</h1>
        ) : tile.tileType === "forest" ? (
            <h1>forest</h1>
        ) : tile.tileType === "dungeon" ? (
            <h1>dungeon</h1>
        ) : tile.tileType === "capital" ? (
            <h1>capital</h1>
        ) : tile.tileType === "lake" ? (
            <h1>lake</h1>
        ) : (
            <h1>Error, tile type not found</h1>
        )}
    </div>
  );
}
