import './Cell.css';

function Cell(props) {
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
