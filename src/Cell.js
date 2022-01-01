import './Cell.css';
// import sound1 from './cell.mp3';
// import sound2 from './sound3.mp3';

function Cell(props) {
  // let player1Sound = new Audio(sound1);
  // let player2Sound = new Audio(sound2);

  const cellClick = (e) => {
    const cellID = e.target.id;
    const newCellColor =
      props.currentPlayer === 1 ? props.player1Color : props.player2Color;

    props.handleCellClick(cellID, newCellColor);
  };

  return (
    <div id={props.id} onClick={(e) => cellClick(e)} className="Cell"></div>
  );
}

export default Cell;
