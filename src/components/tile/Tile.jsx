import React from 'react';

const Tile = ({ claim, index, rowIndex, move }) => {
  const classList = [
    'tile',
    'animated',
  ];

  classList.push((claim) ? 'flip' : '');

  const opts = {
    disabled: claim !== '',
    'data-coords': `${rowIndex},${index}`,
    className: classList.join(' '),
    href: '',
    onClick: move,
  };

  return (
    <button {...opts}>
      {(claim) ? <span className="claim">{claim}</span> : ''}
    </button>
  );
};

Tile.propTypes = {
  claim: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  rowIndex: React.PropTypes.number.isRequired,
  move: React.PropTypes.func.isRequired,
};

module.exports = Tile;
