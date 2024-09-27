"use client";

import { DiscAlbum, Scroll } from "lucide-react";
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
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export function User({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [leftHandItem, setLeftHandItem] = useState(null);
  const [rightHandItem, setRightHandItem] = useState(null);

  function LoadInventory() {
    console.log("Inventory loaded");
  }

  function handleItemClick(item) {
    console.log("Clicked item:", item);
    setSelectedItem(item); // Set the clicked item as the selected item
  }

  function equipLeftHand() {
    if (selectedItem && selectedItem.equipable) {
      // If the item is already equipped in the right hand, unequip it
      if (rightHandItem === selectedItem) {
        setRightHandItem(null);
      }
      setLeftHandItem(selectedItem);
      console.log("Equipped in left hand:", selectedItem.name);
    }
  }

  function equipRightHand() {
    if (selectedItem && selectedItem.equipable) {
      // If the item is already equipped in the left hand, unequip it
      if (leftHandItem === selectedItem) {
        setLeftHandItem(null);
      }
      setRightHandItem(selectedItem);
      console.log("Equipped in right hand:", selectedItem.name);
    }
  }

  function unequipLeftHand() {
    setLeftHandItem(null);
    console.log("Unequipped left hand");
  }

  function unequipRightHand() {
    setRightHandItem(null);
    console.log("Unequipped right hand");
  }

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
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
            <h1>Endurance</h1>
            <h1>0/99</h1>
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
            <h1>Strength</h1>
            <h1>0/99</h1>
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
            <h1>Dexterity</h1>
            <h1>0/99</h1>
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
            <h1>Intelligence</h1>
            <h1>0/99</h1>
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
            <h1>Faith</h1>
            <h1>0/99</h1>
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between w-[100%] text-yellow-400 m-2">
            <h1>Arcane</h1>
            <h1>0/99</h1>
            <button className="bg-zinc-800 w-[2vw] rounded-lg border-2 border-yellow-400">
              +
            </button>
          </div>
          <button className="text-lg text-yellow-400 bg-zinc-800 rounded-lg border-2 border-yellow-400 p-2 m-2 w-[90%]">
            Confirm
          </button>
        </div>
        <div className="w-[100%] m-5 h-[0.25vh] bg-yellow-400"></div>
        <div className="flex flex-col justify-center items-center w-[100%]">
        <Drawer onOpenChange={(open) => open && LoadInventory()}>
            <DrawerTrigger asChild>
              <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">
                Inventory
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
                <div className="flex flex-row w-[90%] h-fit bg-zinc-900 m-5 rounded-lg p-2">
                  <div className="flex flex-row justify-between w-[45vh]">
                    <div className="w-[10vw] h-[20vh] bg-zinc-900 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly">
                      {/* Left hand slot */}
                      <img src={leftHandItem ? leftHandItem.image : ""} className="h-[7.5vh]"/>
                      <h1 className="text-yellow-400 text-lg">
                        {leftHandItem ? leftHandItem.name : "Left Hand"}
                      </h1>
                      <h1 className="text-yellow-400 text-lg">
                        {leftHandItem ? leftHandItem.type : ""}
                      </h1>
                    </div>
                    <div className="w-[10vw] h-[20vh] bg-zinc-900 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly">
                      {/* Right hand slot */}
                      <img src={rightHandItem ? rightHandItem.image : ""} className="h-[7.5vh]"/>
                      <h1 className="text-yellow-400 text-lg">
                        {rightHandItem ? rightHandItem.name : "Right Hand"}
                      </h1>
                      <h1 className="text-yellow-400 text-lg">
                        {rightHandItem ? rightHandItem.type : ""}
                      </h1>
                    </div>
                  </div>
                </div>
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
                  <div className="w-[25vw] h-[50vh] flex flex-col bg-zinc-900 p-5 rounded-lg">
                    {/* Selected item */}
                    <ScrollArea>
                      {selectedItem ? (
                        <>
                          <div className="h-[20vh] flex justify-center items-center">
                            {selectedItem.image && (
                              <img src={selectedItem.image}></img>
                            )}
                          </div>
                          <h1 className="text-2xl text-yellow-400 my-5">
                            {selectedItem.name}
                          </h1>
                          <h1 className="text-lg text-yellow-400 my-5">
                            {selectedItem.description ||
                              "No description available."}
                          </h1>
                          <h1 className="text-lg text-yellow-400 my-5">
                            {selectedItem.lore || "No lore available."}
                          </h1>
                          {/* Equip buttons */}
                          {selectedItem.equipable && (
                            <div className="my-5 flex flex-row w-[100%] items-center justify-evenly">
                              {leftHandItem === selectedItem ? (
                                <button
                                  className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg"
                                  onClick={unequipLeftHand}
                                >
                                  Unequip left hand
                                </button>
                              ) : (
                                <button
                                  className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg"
                                  onClick={equipLeftHand}
                                >
                                  Equip left hand
                                </button>
                              )}
                              {rightHandItem === selectedItem ? (
                                <button
                                  className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg"
                                  onClick={unequipRightHand}
                                >
                                  Unequip right hand
                                </button>
                              ) : (
                                <button
                                  className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg"
                                  onClick={equipRightHand}
                                >
                                  Equip right hand
                                </button>
                              )}
                              <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg">
                                Discard
                              </button>
                            </div>
                          )}
                        </>
                      ) : (
                        <h1 className="text-yellow-400 text-lg">
                          No item selected.
                        </h1>
                      )}
                    </ScrollArea>
                  </div>
                  <div className="w-[25vw] h-[50vh] flex flex-col bg-zinc-900 p-5 rounded-lg">
                    {/* You can add stats for the selected item here */}
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">
            Ongoing quests
          </button>
        </div>
      </div>
    </div>
  );
}
