import './Cell.css';
import { useState } from 'react';

function Cell(props) {
  const [cellColor, setCellColor] = useState('white');

  const col1 = ['0', '7', '14', '21', '28', '35'];
  const col2 = ['1', '8', '15', '22', '29', '36'];
  const col3 = ['2', '9', '16', '23', '30', '37'];
  const col4 = ['3', '10', '17', '24', '31', '38'];
  const col5 = ['4', '11', '18', '25', '32', '39'];
  const col6 = ['5', '12', '19', '26', '33', '40'];
  const col7 = ['6', '13', '20', '27', '34', '41'];

  const allCols = [col1, col2, col3, col4, col5, col6, col7];

  // / forward diagonal 8 apart
  // \ backward diagonal 6 apart
  // horizontal 1 apart
  // vertical 7 apart

  const cellClick = (e) => {
    const cellID = e.target.id;
    const newCellColor = props.currentPlayer === 1 ? 'cadetblue' : 'red';
    // console.log(cellID);
    // if (cellColor === 'white') {
    // if unfilled, set color, switch current player
    setCellColor(newCellColor);

    console.log('filled', props.filledCells, 'cellid', cellID);
    for (const col of allCols) {
      if (col.includes(cellID)) {
        let bottomCell = col
          .filter((x) => !props.filledCells.includes(x))
          .pop();
        document.getElementById(bottomCell).style.backgroundColor =
          newCellColor;
        props.onClick(props.filledCells.push(bottomCell));
      }
    }

    props.onClick(props.currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div
      id={props.id}
      onClick={(e) => cellClick(e)}
      className="Cell"
      // style={{ backgroundColor: cellColor }}
    ></div>
  );
}

export default Cell;
