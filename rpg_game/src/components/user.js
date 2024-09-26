"use client";

import { DiscAlbum } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"


export function User() {
  return (
    <div className="w-[20vw] h-[98vh] bg-zinc-700 border-2 border-yellow-400 absolute left-2 top-2 rounded-lg p-5">
        <div className="flex flex-col justify-center items-center w-[100%]">
            <div className="flex flex-col w-[100%] justify-center items-center">
                <h1 className="mb-5 text-2xl text-yellow-400">Levels</h1>
                <h1 className="text-yellow-400 text-lg">Level: 0</h1>
                <h1 className="text-yellow-400 text-lg mb-5">Unspent level(s): 0</h1>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Vigor</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400 ">+</button>
                </div>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Endurance</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">+</button>
                </div>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Strength</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">+</button>
                </div>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Dexterity</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">+</button>
                </div>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Inteligence</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">+</button>
                </div>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Faith</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">+</button>
                </div>
                <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
                    <h1>Arcane</h1>
                    <h1>0/99</h1>
                    <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">+</button>
                </div>
                <button className="text-lg text-yellow-400 bg-zinc-800 rounded-lg border-2 border-yellow-400 p-2 m-2 w-[90%]">Confirm</button>
            </div>
            <div className="w-[100%] m-5 h-[0.25vh] bg-yellow-400"></div>
            <div className="flex flex-col justify-center items-center w-[100%]">
                <Drawer>
                    <DrawerTrigger asChild>
                        <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">Inventory</button>
                    </DrawerTrigger>
                    <DrawerContent className="bg-zinc-800 border-2 border-yellow-400">
                        <DrawerHeader className="flex flex-col items-center justify-center">
                            <DrawerTitle className="text-2xl text-yellow-400">Inventory</DrawerTitle>
                            <DrawerDescription className="text-yellow-400 text-lg">Here you can view and manage all your items!</DrawerDescription>
                            <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-5"></div>
                        </DrawerHeader>
                        <DrawerFooter className="">
                            <div className="flex flex-row items-center justify-evenly">
                                <ScrollArea className="flex flex-col bg-zinc-900 rounded-lg w-[25vw] h-[50vh] p-5">
                                    <div className="flex flex-row justify-evenly mt-5">
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg">

                                        </div>
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg">

                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-evenly mt-5">
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg"></div>
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg"></div>
                                    </div>
                                    <div className="flex flex-row justify-evenly mt-5">
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg"></div>
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg"></div>
                                    </div>
                                    <div className="flex flex-row justify-evenly mt-5">
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg"></div>
                                        <div className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg"></div>
                                    </div>
                                </ScrollArea>
                                <div className="w-[25vw] h-[50vh] flex flex-col">
                                    <div className="bg-black h-[20vh]">

                                    </div>
                                </div>
                                <div className=" bg-zinc-900 rounded-lg w-[25vw] h-[50vh] flex flex-col">
                                    
                                </div>
                            </div>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">Ongoing quests</button>
            </div>
        </div>
    </div>
  );
}
