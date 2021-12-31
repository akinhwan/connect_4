import './Cell.css';
// import { useState } from 'react';

function Cell(props) {
  // const [cellColor, setCellColor] = useState('white');

  const cellClick = (e) => {
    const cellID = e.target.id;
    const newCellColor = props.currentPlayer === 1 ? 'cadetblue' : 'red';

    // if unfilled, set color, switch current player
    // setCellColor(newCellColor);

    props.handleCellClick(cellID, newCellColor);
  };

  return (
    <div id={props.id} onClick={(e) => cellClick(e)} className="Cell"></div>
  );
}

export default Cell;
