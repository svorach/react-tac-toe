import React from 'react';
import './winner.scss';

const Winner = ({ winner, reset }) => {
  const display = {};
  const isStaleMate = () => winner.player.toUpperCase() === 'TIE';

  if (isStaleMate()) {
    display.header = 'Tie!';
    display.body = 'Cat scratch fever.';
  } else {
    display.header = `Winning player is ${winner.player.toUpperCase()}`;
    display.body = `You have won the game with a ${winner.direction} win.`;
  }

  return (
    <div className="winner animated scale-in-dramatic">
      <div className="winner-wrapper">
        <h1>{display.header}</h1>
        <p>{display.body}</p>
        <a href="" className="reset" onClick={reset}>reset</a>
      </div>
    </div>
  );
};

Winner.propTypes = {
  winner: React.PropTypes.object.isRequired,
  reset: React.PropTypes.func.isRequired,
};

module.exports = Winner;
