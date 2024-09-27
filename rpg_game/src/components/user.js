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
import { Inventory } from "./inventory";

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
          <Inventory items={items} handleItemClick={handleItemClick} equipLeftHand={equipLeftHand} equipRightHand={equipRightHand} unequipLeftHand={unequipLeftHand} unequipRightHand={unequipRightHand} selectedItem={selectedItem} setSelectedItem={setSelectedItem} leftHandItem={leftHandItem} setLeftHandItem={setLeftHandItem} rightHandItem={rightHandItem} setRightHandItem={setRightHandItem}/>
          <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">
            Ongoing quests
          </button>
        </div>
      </div>
    </div>
  );
}
