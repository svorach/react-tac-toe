import React from 'react';

const Tile = ({ tile }) => (
  <div className="tile">
    {tile.player || 'yo'}
  </div>
);

Tile.propTypes = {
  tile: React.PropTypes.object.isRequired,
};

module.exports = Tile;
