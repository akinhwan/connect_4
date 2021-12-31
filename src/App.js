import './App.css';
import Cell from './Cell';
import { useState } from 'react';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [filledCells, setFilledCells] = useState([]);
  const [blueCells, setBlueCells] = useState([]);
  const [redCells, setRedCells] = useState([]);

  const col1 = ['0', '7', '14', '21', '28', '35'];
  const col2 = ['1', '8', '15', '22', '29', '36'];
  const col3 = ['2', '9', '16', '23', '30', '37'];
  const col4 = ['3', '10', '17', '24', '31', '38'];
  const col5 = ['4', '11', '18', '25', '32', '39'];
  const col6 = ['5', '12', '19', '26', '33', '40'];
  const col7 = ['6', '13', '20', '27', '34', '41'];

  const allCols = [col1, col2, col3, col4, col5, col6, col7];

  const handleCellClick = (cellID, newCellColor) => {
    // fill in cells from the bottom up
    for (const col of allCols) {
      if (col.includes(cellID)) {
        let bottomCell = col.filter((x) => !filledCells.includes(x)).pop();
        document.getElementById(bottomCell).style.backgroundColor =
          newCellColor;
        filledCells.push(bottomCell);
        currentPlayer === 1
          ? blueCells.push(bottomCell)
          : redCells.push(bottomCell);
      }
    }

    // / forward diagonal 8 apart, \ backward diagonal 6 apart, horizontal 1 apart, vertical 7 apart

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
        restartGame();
      }
    }

    // if blueCells contains 4 consecutive numbers that increment regularly by 1, 6, 7, or 8
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
        restartGame();
      }
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const restartGame = () => {
    setFilledCells([]);
    setBlueCells([]);
    setRedCells([]);
    setCurrentPlayer(1);
  };

  return (
    <div className="App">
      <div className="Board">
        {[...Array(42)].map((x, i) => (
          <Cell
            id={i}
            key={i}
            handleCellClick={handleCellClick}
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
