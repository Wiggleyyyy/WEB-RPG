"use client";

import * as React from "react";

export function Navigation({MoveDirection}) {
    function RandInt(max){
        var rand = Math.floor(Math.random() * max) + 1;
        const result = [];
        for (var i = 0; i < rand; i++){
            result.push(i);
        }
        return result;
    }
    var rows = RandInt(5);
    var rowColumns;
    var squares = 0;
    /*while (squares < 10){
        squares = 0;
        for (var i = 0; i < rows.length; i++){
            var rand = RandInt(7);
            rowColumns.push(rand);
            squares += rand.length;
            console.log(squares);
        }
    }*/
  return (
    <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col justify-center items-center">
        <div className="flex flex-col h-[40%] w-[90%] justify-center items-center">
            {rows.map((row) => {
            return (
                <div className="flex flex-row">
                    {rowColumns[row].map((col) => (
                        <>
                        <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                        {(rowColumns[row].length % 2 == 0 && col + 1 == rowColumns[row].length) && <div className="w-[2vw] h-[4vh] m-1"> </div>}
                        </>
                    ))}
                </div>
            )})}
        </div>
        <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-5"></div>
        <div className="h-[40%] flex flex-col justify-center items-center">
            <div className="flex flex-row">
                <div className="w-[4vw]"></div>
                <button onClick={() => MoveDirection("up")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Up</button>
                <div className="w-[4vw]"></div>
            </div>
            <div className="flex flex-row">
                <button onClick={() => MoveDirection("left")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Left</button>
                <div className="w-[4vw]"></div>
                <button onClick={() => MoveDirection("right")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Right</button>
            </div>
            <div className="flex flex-row">
                <div className="w-[4vw]"></div>
                <button onClick={() => MoveDirection("down")} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Down</button>
                <div className="w-[4vw]"></div>
            </div>
        </div>
    </div>
  );
}