import React from 'react';

const Tile = ({ tile }) => (
  <div className="tile">
    <div className="player">{tile.player || 'yo'}</div>
  </div>
);

Tile.propTypes = {
  tile: React.PropTypes.object.isRequired,
};

module.exports = Tile;
