import React from 'react';
import './winner.scss';

const Winner = ({ winner, newGame, size, setSize }) => {
  const display = {};
  const isTie = () => winner.player.toUpperCase() === 'TIE';

  if (isTie()) {
    display.header = 'Tie!';
    display.body = 'Cat\'s game.';
  } else {
    display.header = `Winner is ${winner.player.toUpperCase()}`;
    display.body = `Winning the game with a ${winner.direction} win.`;
  }

  return (
    <div className="winner animated scale-in-dramatic">
      <div className="winner-wrapper">
        <h1>{display.header}</h1>
        <p>{display.body}</p>
        <p className="info">
          If you would like to set a custom size, you can do
          so here. If the input is less than 3 or empty a new
          game with the current size will start.
        </p>
        <input type="text" val={size} onChange={setSize} />
        <footer>
          <a href="" className="new-game" onClick={newGame}>new game</a>
        </footer>
      </div>
    </div>
  );
};

Winner.propTypes = {
  winner: React.PropTypes.object.isRequired,
  newGame: React.PropTypes.func.isRequired,
  size: React.PropTypes.number.isRequired,
  setSize: React.PropTypes.func.isRequired,
};

module.exports = Winner;
