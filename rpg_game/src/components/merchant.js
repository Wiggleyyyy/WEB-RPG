"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" //rember install :)
import * as React from "react";

export function Merchant({name}) {
    return (
        <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col items-center">
            <label className="text-yellow-400 text-3xl">{name}</label>
            <br></br>
            <Tabs className="bg-zinc-700 w-[10dvw] flex flex-col">
                <TabsList className="text-yellow-400 bg-zinc-700">
                    <TabsTrigger value="Buy" className="bg-zinc-800 data-[state=active]:bg-zinc-800 data-[state=active]:border-2 data-[state=active]:border-yellow-400 data-[state=active]:text-yellow-400">Buy</TabsTrigger>
                    <TabsTrigger value="Sell" className="bg-zinc-800 data-[state=active]:bg-zinc-800 data-[state=active]:border-2 data-[state=active]:border-yellow-400 data-[state=active]:text-yellow-400">Sell</TabsTrigger>
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
