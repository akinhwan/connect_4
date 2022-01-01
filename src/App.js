import './App.css';
import Cell from './Cell';
import { useState } from 'react';
import sound1 from './cell.mp3';
import sound2 from './sound3.mp3';

function App() {
  let player1Sound = new Audio(sound1);
  let player2Sound = new Audio(sound2);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [filledCells, setFilledCells] = useState([]);
  const [blueCells, setBlueCells] = useState([]);
  const [redCells, setRedCells] = useState([]);
  const [victoryMessage, setVictoryMessage] = useState('');

  const player1Color = '#007eff';
  const player2Color = '#e72c2c';
  const emptyCellColor = '#ececec';

  const col1 = ['0', '7', '14', '21', '28', '35'];
  const col2 = ['1', '8', '15', '22', '29', '36'];
  const col3 = ['2', '9', '16', '23', '30', '37'];
  const col4 = ['3', '10', '17', '24', '31', '38'];
  const col5 = ['4', '11', '18', '25', '32', '39'];
  const col6 = ['5', '12', '19', '26', '33', '40'];
  const col7 = ['6', '13', '20', '27', '34', '41'];

  const allCols = [col1, col2, col3, col4, col5, col6, col7];

  const handleCellClick = (cellID, newCellColor) => {
    currentPlayer === 1 ? player1Sound.play() : player2Sound.play();

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
    // if redCells/blueCells contains 4 consecutive numbers that increment regularly by 1, 6, 7, or 8
    checkVictory(redCells, 'Red', player2Color);
    checkVictory(blueCells, 'Blue', player1Color);

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const checkVictory = (playersCells, colorText, backgroundColor) => {
    for (const cell of playersCells.sort()) {
      if (
        (playersCells.includes((Number(cell) + 1).toString()) &&
          playersCells.includes((Number(cell) + 2).toString()) &&
          playersCells.includes((Number(cell) + 3).toString())) ||
        (playersCells.includes((Number(cell) + 6).toString()) &&
          playersCells.includes((Number(cell) + 12).toString()) &&
          playersCells.includes((Number(cell) + 18).toString())) ||
        (playersCells.includes((Number(cell) + 7).toString()) &&
          playersCells.includes((Number(cell) + 14).toString()) &&
          playersCells.includes((Number(cell) + 21).toString())) ||
        (playersCells.includes((Number(cell) + 8).toString()) &&
          playersCells.includes((Number(cell) + 16).toString()) &&
          playersCells.includes((Number(cell) + 24).toString()))
      ) {
        setVictoryMessage(`${colorText} Wins!`);
        const modal = document.getElementsByClassName('Modal')[0];
        const board = document.getElementsByClassName('Board')[0];

        modal.style.visibility = 'initial';
        modal.style.backgroundColor = `${backgroundColor}`;
        board.style.filter = 'brightness(0.5)';
        board.style.pointerEvents = 'none';

        setTimeout(() => {
          restartGame();
          modal.style.visibility = 'hidden';
          board.style.filter = 'none';
          board.style.pointerEvents = 'auto';
        }, 2000);
      }
    }
  };

  const restartGame = () => {
    filledCells.map(
      (x) => (document.getElementById(x).style.backgroundColor = emptyCellColor)
    );
    setFilledCells([]);
    setBlueCells([]);
    setRedCells([]);
    setCurrentPlayer(1);
  };

  return (
    <div className="App">
      <div className="Modal">{victoryMessage}</div>
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
            player1Color={player1Color}
            player2Color={player2Color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
