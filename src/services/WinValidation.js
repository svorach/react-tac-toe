import { equalContents } from '../utils/arrayUtils.js';
import { getColumn, getDiagonals } from '../utils/matrixUtils.js';

class WinValidation {
  getWinner(matrix) {
    const buildWinner = (direction) => ({
      winner: this.winner,
      direction,
    });

    if (this.isHorizontalWin(matrix)) {
      return buildWinner('horizontal');
    } else if (this.isVerticalWin(matrix)) {
      return buildWinner('vertical');
    } else if (this.isDiagonalWin(matrix)) {
      return buildWinner('diagonal');
    }

    return false;
  }

  isHorizontalWin(matrix) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex ++) {
      const player = equalContents(matrix[rowIndex]);

      if (player) {
        this.winner = player;
        return true;
      }
    }

    return false;
  }

  isVerticalWin(matrix) {
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex ++) {
      const col = getColumn(matrix, colIndex);
      const player = equalContents(col);

      if (player) {
        this.winner = player;
        return true;
      }
    }

    return false;
  }

  isDiagonalWin(matrix) {
    const { downward, upward } = getDiagonals(matrix);
    const player = equalContents(downward) || equalContents(upward);

    if (player) {
      this.winner = player;
      return true;
    }

    return false;
  }
}

module.exports = WinValidation;
