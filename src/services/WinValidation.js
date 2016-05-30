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

  isDiagonalWin() {
  }

  equalContents(array) {
    const val = array[0];

    for (let i = 0; i < array.length; i ++) {
      if (array[i] !== val) {
        return false;
      }
    }

    this.winner = val;

    return true;
  }

  getColumn(matrix, columnIndex) {
    let col = [];

    for (let row = 0; row < matrix.length; row ++) {
      col.push(matrix[row][columnIndex]);
    }

    return col;
  }
}

module.exports = WinValidation;
