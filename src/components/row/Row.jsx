import React from 'react';
import Tile from '../tile/Tile.jsx';

const Row = ({ row }) => {
  const mappedRows = row.map((tile, i) => <Tile key={i} tile={tile} />);
  return (
    <div className="row">{mappedRows}</div>
  );
};

Row.propTypes = {
  row: React.PropTypes.array.isRequired,
};

module.exports = Row;
