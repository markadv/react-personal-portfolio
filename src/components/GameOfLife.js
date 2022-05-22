import React, { useState, useCallback, useRef } from "react";
import produce from "immer";

const numRows = Math.round(window.innerHeight / 20) - Math.round(window.innerHeight / 400) - 8;
const numCols = Math.round(window.innerWidth / 20) - Math.round(window.innerWidth / 400);

//an array of operations
const operations = [
  [0, 1], //South
  [0, -1], //North
  [1, -1], //North-east
  [-1, 1], //South-west
  [1, 1], //South-east
  [-1, -1], //North-west
  [1, 0], //East
  [-1, 0], //West
];

const generateEmptyGrid = () => {
  const rows = Array(numRows)
    .fill()
    .map(() => Array(numCols).fill(0));

  return rows;
  // const rows = [];
  // //basically, create an array full of 0
  // for (let i = 0; i < numRows; i++) {
  //   rows.push(Array.from(Array(numCols), () => 0));
  // }
  // return rows;
};

const GameOfLife = () => {
  // creating grid base on numRows and numCols
  const [grid, setGrid] = useState(() => {
    // so this function only runs one when state initialize
    return generateEmptyGrid();
  });

  //check state if the game is running
  const [running, setRunning] = useState(false);

  //this is use to make sure that the current value is used in the simulation
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    //Simulate the rules of Game of Life
    setGrid((currentValue) => {
      return produce(currentValue, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            //check for the cells around the current cells
            let neighbours = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = j + y;
              //Check bounds that it is not out of grid
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbours += currentValue[newI][newK];
              }
            });
            //The rules of Game of Life
            //Rule 1. Any live cell with fewer than two lives neighbours dies, as if by underpopulation
            //Rule 3. Any live cell with more than three live neighbours dies, as if by overpopulation
            if (neighbours < 2 || neighbours > 3) {
              gridCopy[i][j] = 0;
              //Rule 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
            } else if (currentValue[i][j] === 0 && neighbours === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    //loop to check each cells
    //simulate
    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div className="bg-primary">
      <div className="h-16"></div>
      <div
        className="h-full w-full justify-center"
        style={{
          //create the cols
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              className="bg-secondary text-secondary"
              key={`${i}-${j}`}
              onClick={() => {
                // when clicked, change value to 0 or 1, prdouce create a new mutable state
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? "#5778B1" : undefined,
                border: "solid 1px gray",
              }}
            />
          )),
        )}
      </div>
      <div className="flex flex-row justify-center gap-4 p-4">
        <button
          className="
        rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-accent hover:border-transparent hover:bg-accent hover:text-white"
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          className="
        rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0)));
            }
            setGrid(rows);
          }}
        >
          Random
        </button>
        <button
          className="rounded border border-red-500 bg-transparent py-2 px-4 font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
          onClick={() => {
            setGrid(generateEmptyGrid());
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default GameOfLife;
