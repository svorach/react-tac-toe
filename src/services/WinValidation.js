class WinValidation {
  checkForWinners() {
  }

  isHorizontalWin(matrix) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex ++) {
      if (this.equalContents(matrix[rowIndex])) {
        return true;
      }
    }

    return false;
  }

  isVerticalWin(matrix) {
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex ++) {
      const col = this.getColumn(matrix, colIndex);

      if (this.equalContents(col)) {
        return true;
      }
    }

    return false;
  }

  isDiagonalWin(matrix) {
    const { downward, upward } = this.getDiagonals(matrix);

    return this.equalContents(downward) || this.equalContents(upward) || false;
  }

  equalContents(array) {
    if (!array.length) {
      return false;
    }

    const val = array[0];

    for (let i = 0; i < array.length; i ++) {
      if (array[i] !== val) {
        return false;
      }
    }

    this.winner = val;

    return (true);
  }

  getColumn(matrix, columnIndex) {
    let col = [];

    for (let row = 0; row < matrix.length; row ++) {
      col.push(matrix[row][columnIndex]);
    }

    return col;
  }

  getDiagonals(matrix) {
    const matrixLength = matrix[0].length;

    let downward = [];
    let upward = [];

    for (let i = 0; i < matrixLength; i ++) {
      downward.push(matrix[i][i]);
    }

    for (let x = matrixLength - 1, y = 0; x > -1; x --, y ++) {
      upward.push(matrix[y][x]);
    }

    return { downward, upward };
  }
}

module.exports = WinValidation;
