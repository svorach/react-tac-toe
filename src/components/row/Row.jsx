import React from 'react';
import Tile from '../tile/Tile.jsx';

const Row = ({ row, index, move }) => {
  const mappedRows = row.map(
    (tile, i) => <Tile key={i} tile={tile} rowIndex={index} index={i} move={move} />
  );

  return (
    <div className="row">{mappedRows}</div>
  );
};

Row.propTypes = {
  row: React.PropTypes.array.isRequired,
  index: React.PropTypes.number.isRequired,
  move: React.PropTypes.func.isRequired,
};

module.exports = Row;
