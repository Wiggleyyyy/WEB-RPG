"use client";

import { OpenNpc } from "./merchant";
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

  

export function Interaction({ tile, items }) {
    const [npcName, setNpcName] = React.useState("");

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
            <div className="flex  justify-center items-center flex-col h-[100%]"> 
                <div className="absolute">
                    {npcName != "Ziggleborb" ? 
                        <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" 
                        onClick={() => setNpcName("Ziggleborb")}>Talk to Merchant</button>

                    :   <button className="bg-zinc-800 bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" onClick={() => setNpcName("")}> exit</button>
                    }
                    <br></br>
                    {npcName != "John Smith" ? 
                        <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400 my-1" 
                        onClick={() => setNpcName("John Smith")}>Talk to Blacksmith</button>

                    :   <button className="bg-zinc-800 bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400 my-1" 
                        onClick={() => setNpcName("")}> exit</button>
                    }
                    <br></br>
                    {npcName != "John Knight" ? 
                        <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" 
                        onClick={() => setNpcName("John Knight")}>Talk to Knight</button>

                    :   <button className="bg-zinc-800 bg-zinc-800 border-2 border-yellow-400 rounded-lg p-2 text-yellow-400" 
                        onClick={() => setNpcName("")}> exit</button>
                    }
                </div>

            </div>
        ) : tile.type === "lake" ? (
            <h1>lake</h1>
        ) : (
            <h1>Error, tile type not found</h1>
        )}
        </div>
        { npcName && <OpenNpc name={npcName} items={items}/> }
        </>
    );
}
