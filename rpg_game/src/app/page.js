"use client"
import { Navigation } from "@/components/navigation";
import * as React from "react";

















//i will kms irl
//code doesn't work because up != up and/or 2 < 0. What the fuck?


























export default function Home() {
  function Move(direction, squares) {   
    switch (direction) {
      case "up" && yellowPosition.row > 0: 
            yellowPosition.row--; // TODO: change the location of the actual square rather than the data
        break;

      case "left" && yellowPosition.col > 0: 
            yellowPosition.col--;            
        break;

      case "right" && yellowPosition.col + 2 < squares[yellowPosition.row].length: 
            yellowPosition.col++;    
        break;

      case "down" && yellowPosition.row + 2 < squares.length: 
              yellowPosition.row++;    
        break;
      
      default:
              console.log(direction + " : " + yellowPosition.row);
        break;
    }
  }

  const [yellowPosition, setYellowPosition] = React.useState({
    row: 0,
    col: 0,
  });

  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh] ">
      <Navigation Move={Move} yellowPosition={yellowPosition} />
    </main>
  );
}


