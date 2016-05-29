import React from 'react';
import Row from '../row/Row.jsx';

import '../../sass/board.scss';

const Board = ({ board, move }) => {
  let row;

  const boardRows = board.map(
    (boardRow, i) => <Row key={i} row={boardRow} index={i} ref={node => row = node} move={move} />
  );

  return (
    <div className="board">
      {boardRows}
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
  move: React.PropTypes.func.isRequired,
};

module.exports = Board;
