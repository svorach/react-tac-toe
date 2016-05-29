import React from 'react';

const Tile = ({ tile, index, rowIndex, move }) => {
  const opts = {
    disabled: typeof tile.player !== 'undefined',
    'data-coords': `${rowIndex},${index}`,
    className: 'tile',
    href: '',
    onClick: move,
  };

  return (
    <button {...opts}>
      <div className="player">
        {tile}
      </div>
    </button>
  );
};

Tile.propTypes = {
  tile: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  rowIndex: React.PropTypes.number.isRequired,
  move: React.PropTypes.func.isRequired,
};

module.exports = Tile;
