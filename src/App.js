import './App.css';
import Cell from './Cell';
import { useState } from 'react';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [filledCells, setFilledCells] = useState([]);
  const [blueCells, setBlueCells] = useState([]);
  const [redCells, setRedCells] = useState([]);

  const handleCellClick = () => {
    // console.log(currentPlayer);
    // console.log(filledCells);

    // / forward diagonal 8 apart
    // \ backward diagonal 6 apart
    // horizontal 1 apart
    // vertical 7 apart

    // if redCells contains 4 consecutive numbers that increment regularly by 1, 6, 7, or 8
    console.log('red', redCells, 'blue', blueCells);
    for (const cell of redCells.sort()) {
      if (
        (redCells.includes((Number(cell) + 1).toString()) &&
          redCells.includes((Number(cell) + 2).toString()) &&
          redCells.includes((Number(cell) + 3).toString())) ||
        (redCells.includes((Number(cell) + 6).toString()) &&
          redCells.includes((Number(cell) + 12).toString()) &&
          redCells.includes((Number(cell) + 18).toString())) ||
        (redCells.includes((Number(cell) + 7).toString()) &&
          redCells.includes((Number(cell) + 14).toString()) &&
          redCells.includes((Number(cell) + 21).toString())) ||
        (redCells.includes((Number(cell) + 8).toString()) &&
          redCells.includes((Number(cell) + 16).toString()) &&
          redCells.includes((Number(cell) + 24).toString()))
      ) {
        alert('red win');
      }
    }
    for (const cell of blueCells.sort()) {
      if (
        (blueCells.includes((Number(cell) + 1).toString()) &&
          blueCells.includes((Number(cell) + 2).toString()) &&
          blueCells.includes((Number(cell) + 3).toString())) ||
        (blueCells.includes((Number(cell) + 6).toString()) &&
          blueCells.includes((Number(cell) + 12).toString()) &&
          blueCells.includes((Number(cell) + 18).toString())) ||
        (blueCells.includes((Number(cell) + 7).toString()) &&
          blueCells.includes((Number(cell) + 14).toString()) &&
          blueCells.includes((Number(cell) + 21).toString())) ||
        (blueCells.includes((Number(cell) + 8).toString()) &&
          blueCells.includes((Number(cell) + 16).toString()) &&
          blueCells.includes((Number(cell) + 24).toString()))
      ) {
        alert('blue win');
      }
    }

    // if blueCells contains 4 consecutive numbers that increment regularly by 1, 6, 7, or 8

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="App">
      <div className="Board">
        {[...Array(42)].map((x, i) => (
          <Cell
            id={i}
            key={i}
            onClick={handleCellClick}
            currentPlayer={currentPlayer}
            filledCells={filledCells}
            blueCells={blueCells}
            redCells={redCells}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
