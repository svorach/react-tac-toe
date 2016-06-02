import React from 'react';

import './tile.scss';

const Tile = ({ claim, index, rowIndex, move }) => {
  const tileClasses = [
    'tile',
    'animated',
  ];

  tileClasses.push((claim) ? 'flip' : '');
  tileClasses.push(claim);

  const opts = {
    disabled: claim !== '',
    'data-coords': `${rowIndex},${index}`,
    className: tileClasses.join(' '),
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
