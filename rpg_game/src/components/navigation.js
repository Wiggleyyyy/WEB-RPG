"use client";

export function Navigation({Move, yellowPosition}) {
    function RandLengthArray(max){
        var rand = Math.floor(Math.random() * max) + 1;
        const result = [];
        for (var i = 0; i < rand; i++){
            result.push(i);
        }
        return result;
    }
    var rows = RandLengthArray(4);
    rows.push(rows.length);
    var squares = [];
    var squaresAmount = 0;    

    while (squaresAmount < 10){
        var squares = [];
        squaresAmount = 0;
        for (var i = 0; i < rows.length; i++){
            var rand = RandLengthArray(7);
            squares.push(rand);
            squaresAmount += rand.length;
        }
    }
    yellowPosition.row = RandLengthArray(rows.length-1).length;
     yellowPosition.col = RandLengthArray(squares[yellowPosition.row].length-1).length-1;
  return (
    <div className="bg-zinc-700 border-2 border-yellow-400 w-[20dvw] h-[60dvh] rounded-lg absolute right-2 bottom-2 flex flex-col justify-center items-center">
        <div className="flex flex-col h-[40%] w-[90%] justify-center items-center">
            {rows.map((row) => {
            return (
                <div className="flex flex-row">
                    {squares[row].map((col) => {
                        return (
                        <>
                        {row == yellowPosition.row && col == yellowPosition.col? <div className="w-[2vw] h-[4vh] bg-yellow-400 m-1"> </div> : 
                                                                         <div className="w-[2vw] h-[4vh] bg-zinc-800 m-1"></div>}
                        </>
                    )})}
                    {squares[row].length % 2 == 0 && <div className="w-[2vw] h-[4vh] m-1"> </div>}
                </div>
            )})}
        </div>
        <div className="w-[90%] h-[0.25vh] bg-yellow-400 m-5"></div>
        <div className="h-[40%] flex flex-col justify-center items-center">
            <div className="flex flex-row">
                <div className="w-[4vw]"></div>
                <button onClick={() => Move("up", squares)} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Up</button>
                <div className="w-[4vw]"></div>
            </div>
            <div className="flex flex-row">
                <button onClick={() => Move("left", squares)} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Left</button>
                <div className="w-[4vw]"></div>
                <button onClick={() => Move("right", squares)} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Right</button>
            </div>
            <div className="flex flex-row">
                <div className="w-[4vw]"></div>
                <button onClick={() => Move("down", squares)} className="bg-zinc-800 border-2 border-yellow-400 rounded-lg w-[4vw] p-2 text-yellow-400">Down</button>
                <div className="w-[4vw]"></div>
            </div>
        </div>
    </div>
  );
}