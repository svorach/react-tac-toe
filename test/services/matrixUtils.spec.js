import { expect } from 'chai';
import matrixUtils from '../../src/utils/matrixUtils.js';

describe('matrixUtils', function() {
  describe('getColumn', function() {
    it('should be a function', function() {
      expect(typeof matrixUtils.getColumn).to.equal('function');
    });

    it('should return an array with all of the values in a column of an array matrix', function() {
      const matrix = [
        ['x', 'o', 'x'],
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(matrixUtils.getColumn(matrix, 0)).to.deep.equal(['x', 'x', 'x']);
      expect(matrixUtils.getColumn(matrix, 1)).to.deep.equal(['o', 'x', 'x']);
      expect(matrixUtils.getColumn(matrix, 2)).to.deep.equal(['x', 'o', 'o']);
    });
  });

  describe('getDiagonals', function() {
    it('should be a function', function() {
      expect(typeof matrixUtils.getDiagonals).to.equal('function');
    });

    it('should return an object with downward and upward arrays extracted from a matrix', function() {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      expect(typeof matrixUtils.getDiagonals(matrix)).to.equal('object');

      const { downward, upward } = matrixUtils.getDiagonals(matrix);

      expect(downward).to.include.members([1, 5, 9]);
      expect(upward).to.include.members([7, 5, 3]);
    });
  });
});