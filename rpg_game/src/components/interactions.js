"use client";

export function Interaction({tileType}) {
  return (
    <div className="w-[20vw] h-[37.5vh] bg-zinc-700 border-2 border-yellow-400 absolute right-2 top-2 rounded-lg">
        {tileType === "plain" ? (
            <h1>plain</h1>
        ) : tileType === "settlement" ? (
            <h1>settlement</h1>
        ) : tileType === "forest" ? (
            <h1>forest</h1>
        ) : tileType === "dungeon" ? (
            <h1>dungeon</h1>
        ) : tileType === "capital" ? (
            <h1>capital</h1>
        ) : tileType === "lake" ? (
            <h1>lake</h1>
        ) : (
            <h1>Error, tile type not found</h1>
        )}
    </div>
  );
}
