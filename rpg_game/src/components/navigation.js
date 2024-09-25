"use client";

export function Navigation({ Move, grid, yellowPosition }) {
  return (
    <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col justify-center items-center">
      <h1 className="text-yellow-400 text-2xl">AREA</h1>
      <div className="flex flex-col h-[40%] justify-center ml-10">
        {grid.map((row, rowIndex) => (
          <div className="flex flex-row" key={rowIndex}>
            {row.map((tile, colIndex) => (
              <div key={tile.id}>
                {/* Active tile */}
                {rowIndex === yellowPosition.row && colIndex === yellowPosition.col ? (
                  <div id={tile.id} className="w-[2vw] h-[4vh] bg-yellow-400 m-1 flex items-center justify-center">
                    {tile.type.charAt(0).toUpperCase()} {/* Display the first letter of the type */}
                  </div>
                ) : (
                  // Previously visited tile
                  <div
                    id={tile.id}
                    className={`w-[2vw] h-[4vh] m-1 flex items-center justify-center ${
                      tile.visited ? "bg-yellow-200" : "bg-zinc-800"
                    }`}
                  >
                    {tile.type.charAt(0).toUpperCase()} {/* Display the first letter of the type */}
                  </div>
                )}
              </div>
            ))}
            {/* Make sure the row has even width */}
            {row.length % 2 === 0 && <div className="w-[2vw] h-[4vh] m-1"></div>}
          </div>
        ))}
      </div>
      <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-5"></div>
      <div className="h-[40%] flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <div className="w-[4vw]"></div>
          <button onClick={() => Move("up")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">
            Up
          </button>
          <div className="w-[4vw]"></div>
        </div>
        <div className="flex flex-row">
          <button onClick={() => Move("left")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">
            Left
          </button>
          <div className="w-[4vw]"></div>
          <button onClick={() => Move("right")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">
            Right
          </button>
        </div>
        <div className="flex flex-row">
          <div className="w-[4vw]"></div>
          <button onClick={() => Move("down")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">
            Down
          </button>
          <div className="w-[4vw]"></div>
        </div>
      </div>
    </div>
  );
}
