import React from 'react';
import Row from '../row/Row.jsx';

const Board = ({ board }) => {
  const boardRows = board.map((row, i) => <Row key={i} row={row} />);

  return (
    <div className="board">
      {boardRows}
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
};

module.exports = Board;
