"use client";
import { Navigation } from "@/components/navigation";
import * as React from "react";
import { Interaction } from "@/components/interactions";
import { User } from "@/components/user";

export default function Home() {
  const plains = [
    "The Ashen Fields",
    "Vareldar Expanse",
    "Hallowwind Flats",
    "Ebonvale Plateau",
    "Mournshade Steppe",
    "Sablemere Grasslands",
    "Cradle of Dust",
    "The Weeping Plains",
    "Galehollow Stretch",
    "The Forsaken Steppe",
    "The Bleakreach",
    "Stormveil Expanse",
    "Skyshear Plains",
    "The Voidscar Wastes",
    "Frostspire Tundra",
    "Ashfall Downs",
    "The Boneplains",
    "Evergale Expanse",
    "Starfell Flats",
    "The Silent Reach"
  ];
  
  const dungeons = [
    "Tomb of Blackened Souls",
    "Grimspire Crypt",
    "Obsidian Abyss",
    "Chasm of the Forgotten",
    "Hollowpeak Catacombs",
    "Veilrend Vault",
    "The Bleakspire Ruins",
    "Direstone Pit",
    "Nethergrasp Chambers",
    "The Abyssal Bastion",
    "Doomspire Caverns",
    "Ebonforge Depths",
    "Shadowfang Vault",
    "Harrowhold Dungeon",
    "The Abyssal Cradle",
    "Frostheart Ruins",
    "The Blackscar Maze",
    "Dreadspire Labyrinth",
    "The Forgotten Sepulchre",
    "Grimstone Tunnels"
  ];
  
  const lakes = [
    "Lamentation Lake",
    "Moonveil Waters",
    "Crystalfall Basin",
    "The Sunken Mirror",
    "Lake of Silent Echoes",
    "Emerald Veil Lake",
    "The Blackmire Loch",
    "Frostmourne Lake",
    "Gloomwater Depths",
    "The Azure Shallows",
    "Veilrend Lake",
    "The Sinking Abyss",
    "Hallowedmere Loch",
    "Silvermist Waters",
    "The Glassmere",
    "Gloomveil Tarn",
    "Duskfall Lagoon",
    "Bloodtide Lake",
    "Lunarwhisper Pond",
    "The Crystal Hollow"
  ];
  
  const capitals = [
    "Ironscar Keep",
    "Thornhaven Citadel",
    "Ivoryspire Bastion",
    "Wraithfell City",
    "Sablethorn Hold",
    "Darkveil Sanctum",
    "The Gilded Spire",
    "Stormcrest Citadel",
    "Vaylenrath",
    "Bloodstone Bastion"
  ];
  
  const settlements = [
    "Grimshade Hamlet",
    "The Withered Den",
    "Hollowspring Village",
    "Stormwatch Outpost",
    "Ironbranch Hamlet",
    "Duskwatch Refuge",
    "Gloomhollow Encampment",
    "Oathmoor Settlement",
    "Ashenroot Village",
    "Shardfen Hold"
  ];
  
  const forests = [
    "The Eldergloom Thicket",
    "Harrowshade Grove",
    "Mistveil Wilds",
    "The Blackthorn Forest",
    "Fellwood Expanse",
    "Duskfall Hollow",
    "Ironbark Wilderness",
    "The Whispering Glade",
    "Ravenmist Wood",
    "The Shrouded Vale",
    "Brackenfell Grove",
    "Twilightbloom Wilds",
    "Shadefern Hollow",
    "Wraithwood Thicket",
    "The Cursed Briar",
    "Ravenpeak Woods",
    "The Forsaken Canopy",
    "Moonshadow Grove",
    "The Gloomspire Thicket",
    "The Oathroot Forest"
  ];

  const items = [
    {
      type: "weapon",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px.png",
      name: "Blade of the Forgotten King",
      description: "A mystical sword forged in the heart of a dying star, wielded by a forgotten king. The blade hums with ancient power, said to be bound to the soul of its rightful heir. It is rumored that whoever wields this sword shall never face defeat in battle, but at the cost of their memories fading away.",
      rarity: "Epic",
      base_damage: 100,
      equipable: true,
      required_stats: {
        strength: 10,
        dexterity: 5,
        intelligence: 0,
        faith: 0,
        arcane: 0,
      },
      scaling: {
        strength: {
          rank: "S",
          scaling: 1.60,
        },
        dexterity: {
          rank: "B",
          scaling: 1.4,
        },
        intelligence: {
          rank: "F",
          scaling: 1.0,
        },
        faith: {
          rank: "F",
          scaling: 1.0,
        },
        arcane: {
          rank: "F",
          scaling: 1.0,
        },
      },
      lore: "This legendary sword was lost to time after the fall of the Forgotten Kingdom. Many have sought it, but few have survived its cursed powers. The one who wields it shall control the fate of worlds, but risk losing their identity to the whispers of the Forgotten King."
    },
    {
      type: "weapon",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_bow_weapon_elden_ring_wiki_guide_200px.png",
      name: "Ashen Bow of Eldoria",
      description: "Crafted from the ashes of the Eldorian World Tree, this bow burns with an unquenchable fire. Legends say that it was wielded by the hero who sealed the fire elementals in an eternal prison beneath Eldoria's roots.",
      rarity: "Legendary",
      base_damage: 80,
      equipable: true,
      required_stats: {
        strength: 0,
        dexterity: 15,
        intelligence: 8,
        faith: 0,
        arcane: 0,
      },
      scaling: {
        strength: {
          rank: "F",
          scaling: 1.0,
        },
        dexterity: {
          rank: "A",
          scaling: 1.5,
        },
        intelligence: {
          rank: "C",
          scaling: 1.3,
        },
        faith: {
          rank: "F",
          scaling: 1.0,
        },
        arcane: {
          rank: "F",
          scaling: 1.0,
        },
      },
      lore: "The Ashen Bow was said to be the only weapon capable of channeling the fiery wrath of the elementals without burning its wielder. Only those of true resolve can master its wild power."
    },
    {
      type: "weapon",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/battle_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
      name: "Stormbreaker Warhammer",
      description: "A massive warhammer imbued with the power of thunder. It once belonged to the Storm Warden, a titan who controlled the skies. The hammer sparks with lightning, and its strikes can shatter the earth.",
      rarity: "Epic",
      base_damage: 130,
      equipable: true,
      required_stats: {
        strength: 18,
        dexterity: 0,
        intelligence: 0,
        faith: 0,
        arcane: 0,
      },
      scaling: {
        strength: {
          rank: "A",
          scaling: 1.50,
        },
        dexterity: {
          rank: "F",
          scaling: 1.0,
        },
        intelligence: {
          rank: "F",
          scaling: 1.0,
        },
        faith: {
          rank: "F",
          scaling: 1.0,
        },
        arcane: {
          rank: "F",
          scaling: 1.0,
        },
      },
      lore: "Stormbreaker was passed down through generations of Storm Wardens, but its true power has never been fully unleashed—some say the wielder must be one with the storms to unlock its full might."
    },
    {
      type: "weapon",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_dagger_weapon_elden_ring_wiki_guide_200px.png",
      name: "Dagger of Eternal Night",
      description: "A shadowy dagger forged in the depths of the underworld. Its blade is sharp enough to cut through light itself. Assassins who wield this dagger become invisible in the shadows.",
      rarity: "Rare",
      base_damage: 60,
      equipable: true,
      required_stats: {
        strength: 0,
        dexterity: 12,
        intelligence: 0,
        faith: 0,
        arcane: 8,
      },
      scaling: {
        strength: {
          rank: "F",
          scaling: 1.0,
        },
        dexterity: {
          rank: "A",
          scaling: 1.5,
        },
        intelligence: {
          rank: "F",
          scaling: 1.0,
        },
        faith: {
          rank: "F",
          scaling: 1.0,
        },
        arcane: {
          rank: "C",
          scaling: 1.3,
        },
      },
      lore: "The Dagger of Eternal Night was crafted by a forgotten sorcerer who sought to control the power of darkness. Legend has it that those who wield the dagger are doomed to wander the night forever."
    },
    {
      type: "weapon",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_spear_elden_ring_wiki_guide_200px.png",
      name: "Frostbound Spear",
      description: "An icy spear forged in the glaciers of the Frost Peaks. It emanates a chilling aura, freezing enemies on contact. The spear's origins are lost to time, but it is believed to have been wielded by the Frost Guardians.",
      rarity: "Epic",
      base_damage: 90,
      equipable: true,
      required_stats: {
        strength: 10,
        dexterity: 0,
        intelligence: 0,
        faith: 0,
        arcane: 0,
      },
      scaling: {
        strength: {
          rank: "B",
          scaling: 1.4,
        },
        dexterity: {
          rank: "B",
          scaling: 1.4,
        },
        intelligence: {
          rank: "F",
          scaling: 1.0,
        },
        faith: {
          rank: "F",
          scaling: 1.0,
        },
        arcane: {
          rank: "F",
          scaling: 1.0,
        },
      },
      lore: "The Frostbound Spear was once the symbol of the Frost Guardians, who protected their icy realm from invaders. It is said that the spear holds the essence of eternal winter."
    },
    {
      type: "weapon",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.png",
      name: "Inferno's Edge",
      description: "A greatsword eternally wreathed in flames, said to be forged in the volcanic heart of the world. Those who wield it must withstand its intense heat or risk being burned by its wrath.",
      rarity: "Legendary",
      base_damage: 120,
      equipable: true,
      required_stats: {
        strength: 16,
        dexterity: 0,
        intelligence: 0,
        faith: 8,
        arcane: 0,
      },
      scaling: {
        strength: {
          rank: "A",
          scaling: 1.50,
        },
        dexterity: {
          rank: "B",
          scaling: 1.4,
        },
        intelligence: {
          rank: "F",
          scaling: 1.0,
        },
        faith: {
          rank: "C",
          scaling: 1.3,
        },
        arcane: {
          rank: "F",
          scaling: 1.0,
        },
      },
      lore: "The blade is said to contain the essence of a fire god, and those who can master its flames will wield a power that can reshape the world. Many have tried to control the Inferno’s Edge, but few have survived."
    },
    {
      type: "armor",
      armor_type: "head",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/verdigris_helm_helm_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
      name: "Lionheart Plate",
      description: "Forged in the heart of a dying sun, this plate armor glows with a faint golden light. It was worn by the Lionheart, a fearless champion who led armies into battle without ever faltering.",
      rarity: "Legendary",
      defence: 120,
      equipable: true,
      lore: "The Lionheart Plate was said to be indestructible, capable of withstanding even the most devastating blows. However, it is said to weigh heavily on the soul, burdening the wearer with the memories of past battles.",
    },
    {
      type: "armor",
      armor_type: "head",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pelt_of_ralva_helm_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
      name: "Helm of the Eternal Flame",
      description: "A fiery helm crafted in the depths of a volcanic forge. The wearer can feel the heat of the molten core radiating from within, providing protection against fire.",
      rarity: "Legendary",
      defence: 80,
      equipable: true,
      lore: "The Helm of the Eternal Flame is said to contain the burning spirit of a fire deity. Those who wear it can withstand the heat of the flames but may become consumed by an unquenchable rage."
    },
    {
      type: "armor",
      armor_type: "chest",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knight_armor_elden_ring_wiki_guide_200px.png",
      name: "Dragonscale Chestplate",
      description: "This chestplate was forged from the scales of an ancient dragon. Its surface is nearly indestructible, and it offers unparalleled protection against physical attacks.",
      rarity: "Epic",
      defence: 150,
      equipable: true,
      lore: "Forged from the scales of a dragon long thought to be extinct, the Dragonscale Chestplate is a relic of a forgotten era. Only the strongest warriors can bear its weight."
    },
    {
      type: "armor",
      armor_type: "legs",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_cuissardes_legs_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
      name: "Greaves of the Forgotten Warden",
      description: "Heavy greaves worn by the Forgotten Wardens of an ancient fortress. Their durability has withstood the test of time, granting the wearer stability in the face of battle.",
      rarity: "Rare",
      defence: 100,
      equipable: true,
      lore: "The Forgotten Wardens once guarded the ruins of a fallen kingdom. Their greaves have been passed down through generations, each wearer bearing the burden of the past."
    },

  ];
    

  const [currentTile, setCurrentTile] = React.useState({});
  const [grid, setGrid] = React.useState([]);
  const [yellowPosition, setYellowPosition] = React.useState({ row: 0, col: 0 });

  React.useEffect(() => {
    // Grid generation on component mount
    const generatedGrid = generateGrid(4, 7); // 4 rows, up to 7 columns per row
    setGrid(generatedGrid);
    
     // Random starting position
     const randomRow = Math.floor(Math.random() * generatedGrid.length);
     const randomCol = Math.floor(Math.random() * generatedGrid[randomRow].length);
     
     setYellowPosition({ row: randomRow, col: randomCol });
     
    const currentTile = generatedGrid[randomRow][randomCol];
    setCurrentTile(currentTile);
  }, []);

  function GetRandomNpcs (count) {
    for (let i = 0; i < Math.floor(Math.random()) * count; i++){
      npcs.push("");
    }
  }
  function Move(direction) {
    const currentTileId = yellowPosition.row.toString() + yellowPosition.col.toString();
    let { row, col } = yellowPosition;
  
    // Update yellowPosition based on movement
    if (direction === "up" && row > 0) row--;
    if (direction === "down" && row < grid.length - 1) row++;
    if (direction === "left" && col > 0) col--;
    if (direction === "right" && col < grid[row].length - 1) col++;
  
    // Check if the movement is valid (i.e., the new row and column have a tile)
    if (!grid[row] || !grid[row][col]) {
      return; // Stop movement if there's no tile in that direction
    }
  
    const newTileId = row.toString() + col.toString();
  
    // Mark the previous tile as visited and update the grid
    const updatedGrid = [...grid];
    updatedGrid[yellowPosition.row][yellowPosition.col].visited = true;
    setGrid(updatedGrid);
  
    // Update yellow position
    setYellowPosition({ row, col });

    const currentTile = grid[row][col];
    setCurrentTile(currentTile);
  }

  function generateGrid(maxRows, maxCols) {
    const rows = [];
    let totalTiles = 0;
    const tileTypes = ["plain", "settlement", "forest", "lake", "dungeon"]; // Tile types
  
    // First, generate the entire grid without worrying about placing the capital yet
    while (totalTiles < 10) { // Ensure we have at least 10 tiles
      rows.length = 0; // Reset the rows for a fresh start
      totalTiles = 0;
  
      for (let i = 0; i < Math.floor(Math.random() * maxRows) + 1; i++) {
        const cols = [];
        for (let j = 0; j < Math.floor(Math.random() * maxCols) + 1; j++) {
          const tileType = tileTypes[Math.floor(Math.random() * tileTypes.length)];
          var tileName = "";
          var npcs = [];

          switch (tileType) {
            case "plain" :
              tileName = plains[Math.floor(Math.random() * plains.length)];
              GetRandomNpcs(2);
              break;
            case "settlement":
              tileName = settlements[Math.floor(Math.random() * settlements.length)];
              GetRandomNpcs(1);
              break;
            case "lake":
              tileName = lakes[Math.floor(Math.random() * lakes.length)];
              GetRandomNpcs(2);
              break;
            case "forest":
              tileName = forests[Math.floor(Math.random() * forests.length)];
              GetRandomNpcs(3);
              break;
            case "dungeon":
              tileName = dungeons[Math.floor(Math.random() * dungeons.length)];
              GetRandomNpcs(0);
              break;
          }
          cols.push({
            id: `tile-${i}-${j}`,
            name: tileName,
            type: tileType,
            visited: false, // Track if the tile was visited
            hasNpcs: npcs.count > 0,
            npcs: npcs,
          });
        }
        rows.push(cols);
        totalTiles += cols.length;
      }
    }
  
    // Now, place the capital tile at a guaranteed random position
    const randomRow = Math.floor(Math.random() * rows.length);
    const randomCol = Math.floor(Math.random() * rows[randomRow].length);
    var capitalTile = rows[randomRow][randomCol];
    capitalTile.type = "capital";
    capitalTile.name = capitals[Math.floor(Math.random() * capitals.length)];
    capitalTile.hasNpcs = true;
    capitalTile.npcs = ["merchant", "blacksmith", "knight", "king"];
    rows[randomRow][randomCol] = capitalTile;
    
    return rows;
  }
  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh]">
      {grid.length > 0 && <Navigation Move={Move} grid={grid} yellowPosition={yellowPosition} tile={currentTile}/>}
      <Interaction tile={currentTile} items={items}/>
      <User items={items}/>
    </main>
  );
}