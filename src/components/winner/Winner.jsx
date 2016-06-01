import React from 'react';
import './winner.scss';

const Winner = ({ winner, newGame, size, setSize }) => {
  const display = {};
  const isStaleMate = () => winner.player.toUpperCase() === 'TIE';

  if (isStaleMate()) {
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
        <p>
          If you would like to set a custom size, do so here.<br />
          Must be greater than or equal to 3.<br />
          If empty this will create a new 3x3 game.
        </p>
        <input type="text" val={size} onChange={setSize} />
        <footer>
          <a href="" className="new-game" onClick={newGame}>New Game</a>
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
