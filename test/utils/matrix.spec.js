import { expect } from 'chai';
import { getSize, getColumn, getDiagonals, Matrix } from '../../src/utils/matrix.js';

describe('matrixUtils', function() {
  describe('getSize', function() {
    it('should be a function', function() {
      expect(typeof getSize).to.equal('function');
    });

    it('should return a count of all the cells in a give matrix', function() {
      const matrix = [
        ['x', 'o', 'x'],
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(getSize(matrix)).to.equal(9);
    });
  });

  describe('getColumn', function() {
    it('should be a function', function() {
      expect(typeof getColumn).to.equal('function');
    });

    it('should return an array with all of the values in a column of an array matrix', function() {
      const matrix = [
        ['x', 'o', 'x'],
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(getColumn(matrix, 0)).to.deep.equal(['x', 'x', 'x']);
      expect(getColumn(matrix, 1)).to.deep.equal(['o', 'x', 'x']);
      expect(getColumn(matrix, 2)).to.deep.equal(['x', 'o', 'o']);
    });
  });

  describe('getDiagonals', function() {
    it('should be a function', function() {
      expect(typeof getDiagonals).to.equal('function');
    });

    it('should return an object with downward and upward arrays extracted from a matrix', function() {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      expect(typeof getDiagonals(matrix)).to.equal('object');

      const { downward, upward } = getDiagonals(matrix);

      expect(downward).to.include.members([1, 5, 9]);
      expect(upward).to.include.members([7, 5, 3]);
    });
  });

  describe('Matrix', function() {
    it('should be a constructor', function() {
      expect(typeof Matrix).to.equal('function');
      expect(typeof new Matrix()).to.equal('object');
    });

    it('should by default return a new 3x3 2d matrix', function() {
      const threeByThree = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];

      expect(new Matrix()).to.deep.equal(threeByThree);
    });

    it('should return a new NxN 2d matrix', function() {
      const fiveByFive = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
      ];

      const sevenBySeven = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ];

      expect(new Matrix(5)).to.deep.equal(fiveByFive);
      expect(new Matrix(7)).to.deep.equal(sevenBySeven);
    });
  });
});