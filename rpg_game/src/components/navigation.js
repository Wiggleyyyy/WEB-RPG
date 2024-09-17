"use client";

import * as React from "react";

export function Navigation() {
  return (
    <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col justify-center items-center">
        <div className="flex flex-col h-[40%] w-[90%] justify-center items-center">
            <div className="flex flex-row">
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
            </div>
            <div className="flex flex-row">
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
            </div>
            <div className="flex flex-row">
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-yellow-400 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
            </div>
            <div className="flex flex-row">
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
            </div>
            <div className="flex flex-row">
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
                <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>
            </div>
        </div>
        <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-5"></div>
        <div className="h-[40%] flex flex-col justify-center items-center">
            <div className="flex flex-row">
                <div className="w-[4vw]"></div>
                <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Up</button>
                <div className="w-[4vw]"></div>
            </div>
            <div className="flex flex-row">
                <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Left</button>
                <div className="w-[4vw]"></div>
                <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Right</button>
            </div>
            <div className="flex flex-row">
                <div className="w-[4vw]"></div>
                <button className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Down</button>
                <div className="w-[4vw]"></div>
            </div>
        </div>
    </div>
  );
}