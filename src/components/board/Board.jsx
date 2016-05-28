import React from 'react';
import Row from '../row/Row.jsx';
import Winner from '../winner/Winner.jsx';
import { horizontal, vertical, diagonal, tie } from '../../utils/winConditions.js';

import './board.scss';

const getWinner = (matrix) => {
  const horizontalWinner = horizontal(matrix);
  const verticalWinner = vertical(matrix);
  const diagonalWinner = diagonal(matrix);
  const tieGame = tie(matrix);

  if (horizontalWinner) {
    return { player: horizontalWinner, direction: 'horizontal' };
  } else if (verticalWinner) {
    return { player: verticalWinner, direction: 'vertical' };
  } else if (diagonalWinner) {
    return { player: diagonalWinner, direction: 'diagonal' };
  } else if (tieGame) {
    return { player: 'Tie' };
  }

  return false;
};

const Board = ({ board, move, reset }) => {
  const winner = getWinner(board);

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
