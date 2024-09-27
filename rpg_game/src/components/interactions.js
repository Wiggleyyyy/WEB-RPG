"use client";

import { Merchant } from "./merchant";
import * as React from "react";
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
} from "@/components/ui/alert-dialog";

  

export function Interaction({ tile }) {
    const [merchantOpen, setMerchantOpen] = React.useState(false);
    function OpenMerchant(){
        var name = "Ziggleborb";
        return (
            setMerchantOpen(<Merchant name={name}/>)
        )
    }

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
        <>
        <div className="w-[20vw] h-[37.5vh] bg-zinc-700 border-2 border-yellow-400 absolute right-2 top-2 rounded-lg">
        {tile.type === "plain" ? (
            <div className="flex items-center justify-center h-[100%]">
                <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" onClick={() => CheckForAnimals()}>Check for animals</button>
            </div>
        ) : tile.type === "settlement" ? (
            <h1>settlement</h1>
        ) : tile.type === "forest" ? (
            <h1>forest</h1>
        ) : tile.type === "dungeon" ? (
            <h1>dungeon</h1>
        ) : tile.type === "capital" ? (
            <div className="flex items-center justify-center h-[100%]"> 
                <div className="flex items-center justify-center h-[100%]">
                    <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" onClick={() => setMerchantOpen(<Merchant name={"Ziggleborb"}/>)}>Talk to Merchant</button>
                    <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" onClick={() => setMerchantOpen(false)}>Talk to Blacksmith</button>
                    <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" onClick={() => OpenMerchant()}>Talk to Knight</button>
                </div>

            </div>
        ) : tile.type === "lake" ? (
            <h1>lake</h1>
        ) : (
            <h1>Error, tile type not found</h1>
        )}
        </div>
        { merchantOpen && merchantOpen }
        </>
    );
}
