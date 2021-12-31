import './App.css';
import Cell from './Cell';
import { useState } from 'react';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [filledCells, setFilledCells] = useState([]);

  const switchPlayers = () => {
    // console.log(currentPlayer);
    // console.log(filledCells);

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="App">
      <div className="Board">
        {[...Array(42)].map((x, i) => (
          <Cell
            id={i}
            key={i}
            onClick={switchPlayers}
            currentPlayer={currentPlayer}
            filledCells={filledCells}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
