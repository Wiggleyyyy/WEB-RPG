"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { parse } from "next/dist/build/swc";
import { useState } from "react";

export function Shart({ items }) {
    function handleItemClick(item){
        if (item.type == "weapon"){
            if (IsInteger(item.name[item.name.length-1])){
                item.name[item.name.length-1] = toString(parse(item.name[item.name.length-1]) + 1);
            }
            return (
                <></>

            )
        }
    }
  return (
    <Drawer>76
        <DrawerTrigger asChild>
          <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">
            Choose Item
          </button>
        </DrawerTrigger>
        <DrawerContent className="bg-zinc-800 border-2 border-yellow-400">
          <DrawerHeader className="flex flex-col items-center justify-center">
            <DrawerTitle className="text-2xl text-yellow-400">
              Inventory
            </DrawerTitle>
            <DrawerDescription className="text-yellow-400 text-lg">
              Here you can view and manage all your items!
            </DrawerDescription>
            <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-2"></div>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col justify-center items-center">
            <div className=" w-[100%] flex flex-row items-center justify-evenly">
              {/* Inventory Items */}
              <ScrollArea className="flex flex-col bg-zinc-900 rounded-lg w-[25vw] h-[50vh] p-5">
                <div className="grid grid-cols-2 gap-5">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly cursor-pointer"
                      onClick={() => handleItemClick(item)}
                    >
                      <img src={item.image} className="h-[7.5vh]"/>
                      <h1 className="text-yellow-400">{item.name}</h1>
                      <h1 className="text-yellow-400">{item.type}</h1>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
            </div>
          </DrawerFooter>
        </DrawerContent>
    </Drawer>
  );
}
