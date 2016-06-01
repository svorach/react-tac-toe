import React from 'react';
import Row from '../row/Row.jsx';
import Winner from '../winner/Winner.jsx';

import './board.scss';

const Board = ({ board, move, reset, winner }) => {
  const boardRows = board.map(
    (boardRow, i) => <Row key={i} row={boardRow} index={i} move={move} />
  );

  const displayWinner = () => {
    const hasWinner = () => typeof winner.player !== 'undefined';

    if (hasWinner()) {
      return <Winner winner={winner} reset={reset} />;
    }

    return '';
  };

  return (
    <div className="board animated swoop-down-dramatic">
      {displayWinner()}
      {boardRows}
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
  move: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  winner: React.PropTypes.object,
};

module.exports = Board;
