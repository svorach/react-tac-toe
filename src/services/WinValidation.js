class WinValidation {
  equalContents(array) {
    const val = array[0];

    for (let i = 0; i < array.length; i ++) {
      if (array[i] !== val) {
        return false;
      }
    }

    return true;
  }

  checkForWinners() {
  }

  isHorizontalWin(matrix) {
    for (let row = 0; row < matrix.length; row ++) {
      if (this.equalContents(matrix[row])) {
        return true;
      }
    }

    return false;
  }

  isVerticalWin() {
  }

  isDiagonalWin() {
  }
}

module.exports = WinValidation;
