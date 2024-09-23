"use client";
import { Navigation } from "@/components/navigation";
import { DEFAULT_SERIF_FONT } from "next/dist/shared/lib/constants";
import * as React from "react";

export default function Home() {
  const [grid, setGrid] = React.useState([]);
  const [yellowPosition, setYellowPosition] = React.useState({ row: 0, col: 0 });
  var leftOrRightRows = [];

  React.useEffect(() => {
    // Grid generation on component mount
    const generatedGrid = generateGrid(5, 7); // 5 rows, up to 7 columns per row
    setGrid(generatedGrid);
    
    // Random starting position
    const randomRow = Math.floor(Math.random() * generatedGrid.length);
    const randomCol = Math.floor(Math.random() * generatedGrid[randomRow].length);
    
    setYellowPosition({ row: randomRow, col: randomCol });
  }, []);

  function Move(direction) {
    const currentTileId = yellowPosition.row.toString() + yellowPosition.col.toString();
    let { row, col } = yellowPosition;
  
    // Update yellowPosition based on movement
    if (direction === "up" && row > 0) {
      var offset = (grid[row-1].length - grid[row].length) / 2;
      if (offset == 0.5){
        offset = 1;
        console.log("1'ede : ");
      }
      else if (offset == -0.5) {
        offset = -1;
        console.log("-1'ede : ");
      }
      offset = Math.ceil(offset);
      if (leftOrRightRows[row] != leftOrRightRows[row - 1]){
        if (leftOrRightRows[row] == "left" && leftOrRightRows[row-1] == "right"){
          if (Math.abs((grid[row-1].length - grid[row].length) / 2) >= 1){
            offset = -1;
          }
          else {
            offset += -1;
          }
          console.log("l to r : ");
        }
        if (leftOrRightRows[row] == "right" && leftOrRightRows[row-1] == "left"){
          if (Math.abs((grid[row-1].length - grid[row].length) / 2) <= 1){
            offset = 1;
          }
          else {
            offset += 1;
          }
          console.log("r to l : ");
        }
      }
      console.log(offset);
      col += offset;
      row--;
    }
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
  }
  
  

  function generateGrid(maxRows, maxCols) {
    const rows = [];
    let totalTiles = 0;
    
    while (totalTiles < 10) { // Ensure we have at least 10 tiles
      rows.length = 0; // Reset the rows for a fresh start
      totalTiles = 0;
  
      for (let i = 0; i < Math.floor(Math.random() * maxRows) + 1; i++) {
        const cols = [];
        for (let j = 0; j < Math.floor(Math.random() * maxCols) + 1; j++) {
          cols.push({
            id: `tile-${i}-${j}`,
            name: `Tile ${i},${j}`,
            type: "plain",  // You can change the type for different tiles
            visited: false, // Track if the tile was visited
          });
        }
        rows.push(cols);
        totalTiles += cols.length;
      }
    }
    
    return rows;
  }
  

  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh]">
      {grid.length > 0 && <Navigation Move={Move} grid={grid} yellowPosition={yellowPosition} leftOrRightRows={leftOrRightRows} />}
    </main>
  );
}
