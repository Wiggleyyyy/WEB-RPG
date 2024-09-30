"use client";

import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export function Inventory({
  items,
  handleItemClick,
  equipLeftHand,
  equipRightHand,
  unequipLeftHand,
  unequipRightHand,
  selectedItem,
  setSelectedItem,
  leftHandItem,
  setLeftHandItem,
  rightHandItem,
  setRightHandItem,
  headArmorItem,
  setHeadArmorItem,
  chestArmorItem,
  setChestArmorItem,
  armsArmorItem,
  setArmsArmorItem,
  legsArmorItem,
  setLegsArmorItem
}) {
  function equipArmor(armorType) {
    if (!selectedItem || selectedItem.type !== "armor") return; // Check if the selected item is armor

    switch (armorType) {
      case "head":
        if (selectedItem.armor_type === "head") {
          setHeadArmorItem(selectedItem);
        } else {
          alert("You can only equip helmets in the head slot.");
        }
        break;
      case "chest":
        if (selectedItem.armor_type === "chest") {
          setChestArmorItem(selectedItem);
        } else {
          alert("You can only equip chest armor in the chest slot.");
        }
        break;
      case "arms":
        if (selectedItem.armor_type === "arms") {
          setArmsArmorItem(selectedItem);
        } else {
          alert("You can only equip arm armor in the arms slot.");
        }
        break;
      case "legs":
        if (selectedItem.armor_type === "legs") {
          setLegsArmorItem(selectedItem);
        } else {
          alert("You can only equip leg armor in the legs slot.");
        }
        break;
      default:
        break;
    }
  }

  function unequipArmor(armorType) {
    switch (armorType) {
      case "head":
        setHeadArmorItem(null);
        break;
      case "chest":
        setChestArmorItem(null);
        break;
      case "arms":
        setArmsArmorItem(null);
        break;
      case "legs":
        setLegsArmorItem(null);
        break;
      default:
        break;
    }
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="m-5 bg-zinc-800 border-2 border-yellow-400 text-yellow-400 rounded-lg p-2 w-[90%]">
          Inventory
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-800 border-2 border-yellow-400">
        <DrawerHeader className="flex flex-col items-center justify-center">
          <DrawerTitle className="text-2xl text-yellow-400">Inventory</DrawerTitle>
          <DrawerDescription className="text-yellow-400 text-lg">Here you can view and manage all your items!</DrawerDescription>
          <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-2"></div>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-between w-[90%] h-fit bg-zinc-900 m-5 rounded-lg p-2">
            <div className="flex flex-row justify-evenly w-[22.5vw]">
              {/* Left hand slot */}
              <div className="w-[10vw] h-[20vh] bg-zinc-800 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly">
                <img src={leftHandItem ? leftHandItem.image : ""} className="h-[7.5vh]" />
                <h1 className="text-yellow-400 text-lg">{leftHandItem ? leftHandItem.name : "Left Hand"}</h1>
                <h1 className="text-yellow-400 text-lg">{leftHandItem ? leftHandItem.type : ""}</h1>
                {leftHandItem && (
                  <button className="text-yellow-400 text-lg" onClick={unequipLeftHand}>
                    Unequip Left Hand
                  </button>
                )}
              </div>

              {/* Right hand slot */}
              <div className="w-[10vw] h-[20vh] bg-zinc-800 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly">
                <img src={rightHandItem ? rightHandItem.image : ""} className="h-[7.5vh]" />
                <h1 className="text-yellow-400 text-lg">{rightHandItem ? rightHandItem.name : "Right Hand"}</h1>
                <h1 className="text-yellow-400 text-lg">{rightHandItem ? rightHandItem.type : ""}</h1>
                {rightHandItem && (
                  <button className="text-yellow-400 text-lg" onClick={unequipRightHand}>
                    Unequip Right Hand
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-row w-[45vw] items-center justify-evenly">
              {/* Helmet Slot */}
              <div className="w-[10vw] h-[20vh] bg-zinc-800 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly" onClick={() => equipArmor("head")}>
                <img src={headArmorItem ? headArmorItem.image : ""} className="h-[7.5vh]"/>
                <h1 className="text-yellow-400 text-lg">{headArmorItem ? headArmorItem.name : "Helmet"}</h1>
                {headArmorItem && (
                  <button className="text-yellow-400 text-lg" onClick={() => unequipArmor("head")}>
                    Unequip Helmet
                  </button>
                )}
              </div>

              {/* Chest Armor Slot */}
              <div className="w-[10vw] h-[20vh] bg-zinc-800 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly" onClick={() => equipArmor("chest")}>
                <img src={chestArmorItem ? chestArmorItem.image : ""} className="h-[7.5vh]"/>
                <h1 className="text-yellow-400 text-lg">{chestArmorItem ? chestArmorItem.name : "Chest Armor"}</h1>
                {chestArmorItem && (
                  <button className="text-yellow-400 text-lg" onClick={() => unequipArmor("chest")}>
                    Unequip Chest Armor
                  </button>
                )}
              </div>

              {/* Arm Armor (Greaves for Arms) Slot */}
              <div className="w-[10vw] h-[20vh] bg-zinc-800 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly" onClick={() => equipArmor("arms")}>
                <img src={armsArmorItem ? armsArmorItem.image : ""} className="h-[7.5vh]"/>
                <h1 className="text-yellow-400 text-lg">{armsArmorItem ? armsArmorItem.name : "Arm Armor"}</h1>
                {armsArmorItem && (
                  <button className="text-yellow-400 text-lg" onClick={() => unequipArmor("arms")}>
                    Unequip Arm Armor
                  </button>
                )}
              </div>

              {/* Leg Armor (Greaves for Legs) Slot */}
              <div className="w-[10vw] h-[20vh] bg-zinc-800 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly" onClick={() => equipArmor("legs")}>
                <img src={legsArmorItem ? legsArmorItem.image : ""} className="h-[7.5vh]"/>
                <h1 className="text-yellow-400 text-lg">{legsArmorItem ? legsArmorItem.name : "Greaves"}</h1>
                {legsArmorItem && (
                  <button className="text-yellow-400 text-lg" onClick={() => unequipArmor("legs")}>
                    Unequip Greaves
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Inventory Items */}
          <div className="w-[100%] flex flex-row items-center justify-evenly">
            <ScrollArea className="flex flex-col bg-zinc-900 rounded-lg w-[25vw] h-[50vh] p-5">
              <div className="grid grid-cols-2 gap-5">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 w-[20vh] h-[20vh] border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-evenly cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    <img src={item.image} className="h-[7.5vh]" />
                    <h1 className="text-yellow-400">{item.name}</h1>
                    <h1 className="text-yellow-400">{item.type}</h1>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Selected Item Stats */}
            <div className="w-[25vw] h-[50vh] flex flex-col bg-zinc-900 p-5 rounded-lg">
              <ScrollArea>
                {selectedItem ? (
                  <>
                    <div className="h-[20vh] flex justify-center items-center">
                      {selectedItem.image && <img src={selectedItem.image} />}
                    </div>
                    <h1 className="text-2xl text-yellow-400 my-5">{selectedItem.name}</h1>
                    <h1 className="text-lg text-yellow-400 my-5">{selectedItem.description || "No description available."}</h1>
                    <h1 className="text-lg text-yellow-400 my-5">{selectedItem.lore || "No lore available."}</h1>
                    {/* Equip buttons for selected item */}
                    {selectedItem.equipable && selectedItem.type === "weapon" ? (
                      <div className="my-5 flex flex-row w-[100%] items-center justify-evenly">
                        {leftHandItem === selectedItem ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={unequipLeftHand}>
                            Unequip left hand
                          </button>
                        ) : (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={equipLeftHand}>
                            Equip left hand
                          </button>
                        )}
                        {rightHandItem === selectedItem ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={unequipRightHand}>
                            Unequip right hand
                          </button>
                        ) : (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={equipRightHand}>
                            Equip right hand
                          </button>
                        )}
                        <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg">Discard</button>
                      </div>
                    ) : selectedItem.equipable && selectedItem.type === "armor" ? (
                      <div className="my-5 flex flex-row w-[100%] items-center justify-evenly">
                        {headArmorItem === selectedItem ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => unequipArmor("head")}>
                            Unequip helmet
                          </button>
                        ) : selectedItem.armor_type === "head" ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => equipArmor("head")}>
                            Equip helmet
                          </button>
                        ) : null}
                        
                        {chestArmorItem === selectedItem ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => unequipArmor("chest")}>
                            Unequip chest armor
                          </button>
                        ) : selectedItem.armor_type === "chest" ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => equipArmor("chest")}>
                            Equip chest armor
                          </button>
                        ) : null}

                        {armsArmorItem === selectedItem ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => unequipArmor("arms")}>
                            Unequip arm armor
                          </button>
                        ) : selectedItem.armor_type === "arms" ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => equipArmor("arms")}>
                            Equip arm armor
                          </button>
                        ) : null}

                        {legsArmorItem === selectedItem ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => unequipArmor("legs")}>
                            Unequip greaves
                          </button>
                        ) : selectedItem.armor_type === "legs" ? (
                          <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg" onClick={() => equipArmor("legs")}>
                            Equip greaves
                          </button>
                        ) : null}

                        <button className="text-lg bg-zinc-800 text-yellow-400 p-2 border-2 border-yellow-400 rounded-lg">Discard</button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <h1 className="text-yellow-400 text-lg">No item selected.</h1>
                )}
              </ScrollArea>
            </div>
            <div className="w-[25vw] h-[50vh] flex flex-col bg-zinc-900 p-5 rounded-lg">
              {/* You can add stats for the selected item here */}
              {selectedItem ? (
                <div className="flex flex-col items-center w-[100%]">
                  <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                    <h1>Rarity:</h1>
                    <h1>{selectedItem.rarity}</h1>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {selectedItem && selectedItem.type === "weapon" ? (
                <ScrollArea>
                  <div className="flex flex-col items-center w-[100%] my-5">
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                        <h1>Base damage:</h1>
                        <h1>{selectedItem.base_damage}</h1>
                    </div>
                    <h1 className="text-lg text-yellow-400">Required attributes:</h1>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Strength:</h1>
                      <h1>{selectedItem.required_stats.strength}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Dexterity:</h1>
                      <h1>{selectedItem.required_stats.dexterity}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Intelligence:</h1>
                      <h1>{selectedItem.required_stats.intelligence}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Faith:</h1>
                      <h1>{selectedItem.required_stats.faith}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Arcane:</h1>
                      <h1>{selectedItem.required_stats.arcane}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-[100%] my-5">
                    <h1 className="text-lg text-yellow-400">Scaling:</h1>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Strength:</h1>
                      <h1>{selectedItem.scaling.strength.rank}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Dexterity:</h1>
                      <h1>{selectedItem.scaling.dexterity.rank}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Intelligence:</h1>
                      <h1>{selectedItem.scaling.intelligence.rank}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Faith:</h1>
                      <h1>{selectedItem.scaling.faith.rank}</h1>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between text-yellow-400">
                      <h1>Arcane:</h1>
                      <h1>{selectedItem.scaling.arcane.rank}</h1>
                    </div>
                  </div>
                </ScrollArea>
              ) : selectedItem && selectedItem.type === "armor" ?(
                <div className="flex w-[100%] flex-row justify-between items-center text-yellow-400">
                  <h1>Defence: </h1>
                  <h1>{selectedItem.defence}</h1>
                </div>
              ) : (
                <h1 className="text-yellow-400 text-lg">No item selected.</h1>
              )}
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
