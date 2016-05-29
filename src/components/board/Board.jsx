import React from 'react';
import Row from '../row/Row.jsx';

import '../../sass/board.scss';

const Board = ({ board, move }) => {
  const boardRows = board.map(
    (boardRow, i) => <Row key={i} row={boardRow} index={i} move={move} />
  );

  return (
    <div className="board animated swoop-down-dramatic">
      {boardRows}
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
  move: React.PropTypes.func.isRequired,
};

module.exports = Board;
