"use client";

export function Interaction(tileType) {
  var image;
  var interractions = ["combat", "merchant", "npc", "objective", "gamble"]
  switch (tileType) {
    case "plain" :
      // roll dice for interraction amount
      // roll dice in list of interractions
      // save tile in localstorage and make sure not to reroll dice :)
      image = "interraction image";
      break;
    
    case "settlement" :
      // shit
      break;
    
    case "forest" :
      // shit
      break;

    case "lake" :
      // shit
      break;

    case "dungeon" :
      // shit
      break;

    case "capital" :
      // shit
      break;
  }
  return (
    <div className="w-[20vw] h-[37.5vh] bg-zinc-700 border-2 border-yellow-400 absolute right-2 top-2 rounded-lg">
        {/* display interractions */}
    </div>
  );
}
