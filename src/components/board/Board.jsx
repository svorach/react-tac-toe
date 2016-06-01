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

const Board = ({ board, size, move, newGame, setSize }) => {
  const winner = getWinner(board);
  const boardClasses = [
    'board',
    'animated',
    'swoop-down-dramatic',
  ];

  if (size >= 5 && size < 7) {
    boardClasses.push('large');
  } else if (size >= 7) {
    boardClasses.push('huge');
  }

  const boardRows = board.map(
    (boardRow, i) => <Row key={i} row={boardRow} index={i} move={move} />
  );

  const displayWinner = () => {
    const hasWinner = () => typeof winner.player !== 'undefined';

    if (hasWinner()) {
      return <Winner {...{ size, newGame, winner, setSize }} />;
    }

    return '';
  };

  return (
    <div className={boardClasses.join(' ')}>
      {displayWinner()}
      {boardRows}
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
  size: React.PropTypes.number.isRequired,
  move: React.PropTypes.func.isRequired,
  newGame: React.PropTypes.func.isRequired,
  setSize: React.PropTypes.func.isRequired,
};

module.exports = Board;
