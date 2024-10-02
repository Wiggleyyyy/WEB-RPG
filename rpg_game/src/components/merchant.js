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
  } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" //rember install :)
import * as React from "react";
import { Shart } from "./ui/shart";

export function OpenNpc({name, items}) {
    if (name == "Ziggleborb"){
        return (
            <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col items-center">
                <label className="text-yellow-400 text-3xl">{name}</label>
                <br></br>
                <Tabs className="bg-zinc-700 w-[10dvw] flex flex-col">
                    <TabsList className="text-yellow-400 bg-zinc-700">
                        <TabsTrigger value="Buy" className="bg-zinc-800 data-[state=active]:bg-zinc-800 data-[state=active]:border-2 data-[state=active]:border-yellow-400 data-[state=active]:text-yellow-400">Buy</TabsTrigger>
                        <TabsTrigger value="Sell" >Sell</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Buy">
                        <div className="absolute left-2 border-2 border-yellow-400 w-[50%] h-[33%] flex flex-col items-center justify-center bg-zinc-800 rounded-lg">
                            <label className="text-yellow-400 text-xl">item name</label> {/* get from list of merchants with list of items*/}
                            <h1>image (hover for description)</h1>
                        </div>
                        <div className="absolute right-2 border-2 border-yellow-400 w-[50%] h-[33%] flex flex-col items-center justify-center bg-zinc-800 rounded-lg">
                            <label className="text-yellow-400 text-xl">item name</label>
                            <h1>image (hover for description)</h1>
                        </div>
                    </TabsContent>
                    <TabsContent value="Sell">Show inventory here</TabsContent> {/* open inv and add a select mechanic*/}
                </Tabs>
            </div>
        );
    }
    else if (name == "John Smith"){
        return (
            <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col items-center">
                <label className="text-yellow-400 text-3xl">{name}</label>
                <br></br>
                <Tabs className="bg-zinc-700 w-[10dvw] flex flex-col">
                    <TabsList className="text-yellow-400 bg-zinc-700">
                        <TabsTrigger value="upgrade" className="bg-zinc-800 data-[state=active]:bg-zinc-800 data-[state=active]:border-2 data-[state=active]:border-yellow-400 data-[state=active]:text-yellow-400">Upgrade Weapons</TabsTrigger>
                        <TabsTrigger value="other" >Other</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upgrade">{Shart({items})}</TabsContent> {/* open inv, click on weapon, select upgrade, make weapon dmg/scaling scale with upgrade lvl*/}

                    <TabsContent value="other">Show inventory here</TabsContent> {/* open inv and add a select mechanic*/}
                </Tabs>
            </div>
        );
    }
    else if (name == "John Knight"){
        return (
            <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col items-center">
                <label className="text-yellow-400 text-3xl">{name}</label>
                <br></br>
                <AlertDialog>
                        <AlertDialogTrigger className="bg-zinc-800 rounded-lg p-1 border-2 border-yellow-400 text-yellow-400">Talk</AlertDialogTrigger>
                        <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>John Knight</AlertDialogTitle>
                            <AlertDialogDescription>
                            By my troth, I am sore parched. Would that I had but a draught of water!
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>"yummers"</AlertDialogCancel>
                        </AlertDialogFooter>
                        </AlertDialogContent>
                </AlertDialog>
                <button className="bg-zinc-800 rounded-lg p-1 border-2 border-yellow-400 text-yellow-400 m-1">Give Item</button>
            </div>
        );
    }
}
