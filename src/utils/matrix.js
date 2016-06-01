module.exports = {
  getColumn: (matrix, columnIndex) => {
    const col = [];

    for (let row = 0; row < matrix.length; row ++) {
      col.push(matrix[row][columnIndex]);
    }

    return col;
  },

  getDiagonals: (matrix) => {
    const matrixLength = matrix[0].length;
    const downward = [];
    const upward = [];

    for (let i = 0; i < matrixLength; i ++) {
      downward.push(matrix[i][i]);
      upward.push(matrix[i][matrixLength - i - 1]);
    }

    return { downward, upward };
  },

  Matrix(size = 3) {
    const matrix = [];

    for (let rowIndex = 0; rowIndex < size; rowIndex ++) {
      const row = [];

      for (let colIndex = 0; colIndex < size; colIndex++) {
        row.push('');
      }

      matrix.push(row);
    }

    return matrix;
  },
};
