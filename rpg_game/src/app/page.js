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
    console.log(currentTile.type);
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
          switch (tileType) {
            case "plain" :
              tileName = plains[Math.floor(Math.random() * plains.length)];
              break;
            case "settlement":
              tileName = settlements[Math.floor(Math.random() * settlements.length)];
              break;
            case "lake":
              tileName = lakes[Math.floor(Math.random() * lakes.length)];
              break;
            case "forest":
              tileName = forests[Math.floor(Math.random() * forests.length)];
              break;
            case "dungeon":
              tileName = dungeons[Math.floor(Math.random() * dungeons.length)];
              break;
          }
          cols.push({
            id: `tile-${i}-${j}`,
            name: tileName,
            type: tileType,
            visited: false, // Track if the tile was visited
            hasNpcs: false,
            npcs: [],
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
    
    return rows;
  }
  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh]">
      {grid.length > 0 && <Navigation Move={Move} grid={grid} yellowPosition={yellowPosition} tile={currentTile}/>}
      <Interaction tile={currentTile}/>
      <User />
    </main>
  );
}