"use client"
import { Navigation } from "@/components/navigation";
import * as React from "react";

export default function Home() {
  function Move(direction, squares) {   
  var id = yellowPosition.row.toString()+yellowPosition.col.toString(); // doesn't work cus column length changes between rows. TODO: move between rows depending on the length between current row and desired row
  switch (direction) {
      case "up":
    if (yellowPosition.row > 0) {
      yellowPosition.row--; // Move up
    }
    break;

  case "left":
    if (yellowPosition.col > 0) {
      yellowPosition.col--; // Move left
    }
    break;

  case "right":
    if (yellowPosition.col + 2 < squares[yellowPosition.row].length) {
      yellowPosition.col++; // Move right
    }
    break;

  case "down":
    if (yellowPosition.row + 2 < squares.length) {
      yellowPosition.row++; // Move down
    }
    break;
  }
  if (id != yellowPosition.row.toString()+yellowPosition.col.toString()) {
    ChangeBackgroundColor(id, "133 77 14");
    id = yellowPosition.row.toString()+yellowPosition.col.toString();
    ChangeBackgroundColor(id, "250 204 21");
  }
}

  function ChangeBackgroundColor(id, color) {
    console.log(id);
    document.getElementById(id).style.backgroundColor = `rgb(${color})`;
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


