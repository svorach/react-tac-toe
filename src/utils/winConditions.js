import { equalContents } from '../utils/array.js';
import { getColumn, getDiagonals, getSize } from '../utils/matrix.js';

const winConditions = {
  horizontal: (matrix) => {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex ++) {
      const player = equalContents(matrix[rowIndex]);

      if (player) {
        return player;
      }
    }

    return false;
  },

  vertical: (matrix) => {
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex ++) {
      const col = getColumn(matrix, colIndex);
      const player = equalContents(col);

      if (player) {
        return player;
      }
    }

    return false;
  },

  diagonal: (matrix) => {
    const { downward, upward } = getDiagonals(matrix);
    const player = equalContents(downward) || equalContents(upward);

    return player || false;
  },

  tie: (matrix) => {
    const size = getSize(matrix);
    let claimed = '';

    matrix.forEach((row, idx) => {
      claimed += matrix[idx].reduce((a, b) => a + b);
    });

    return claimed.length === size;
  },
};

module.exports = winConditions;
