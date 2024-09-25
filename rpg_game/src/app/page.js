"use client";
import { Navigation } from "@/components/navigation";
import * as React from "react";
import { Interaction } from "@/components/interactions";

export default function Home() {
  const [currentTileType, setCurrentTileType] = React.useState("");
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
    setCurrentTileType(currentTile.type);
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
    setCurrentTileType(currentTile.type);
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
          const tileType = tileTypes[Math.floor(Math.random() * tileTypes.length)]; // Random type
          cols.push({
            id: `tile-${i}-${j}`,
            name: tileType.charAt(0).toUpperCase() + tileType.slice(1), // Capitalize the type name
            type: tileType,
            visited: false, // Track if the tile was visited
          });
        }
        rows.push(cols);
        totalTiles += cols.length;
      }
    }
  
    // Now, place the capital tile at a guaranteed random position
    const randomRow = Math.floor(Math.random() * rows.length);
    const randomCol = Math.floor(Math.random() * rows[randomRow].length);
    rows[randomRow][randomCol].type = "capital";
    rows[randomRow][randomCol].name = "Capital";
  
    return rows;
  }

  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh]">
      {grid.length > 0 && <Navigation Move={Move} grid={grid} yellowPosition={yellowPosition} />}
      <Interaction tileType={currentTileType}/>
    </main>
  );
}
