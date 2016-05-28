import React from 'react';
import { expect } from 'chai';
import { horizontal, vertical, diagonal, tie } from '../../src/utils/winConditions.js';

describe('winConditions', function() {
  describe('horizontal', function() {
    it('should be a function', function() {
      expect(typeof horizontal).to.equal('function');
    });

    it('should return false if no horizontal win is present', function() {
      const noHorizontalWin = [
        ['x', 'o', 'x'],
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(horizontal(noHorizontalWin)).to.equal(false);
    });

    describe('should return true if a horizontal win is present in', function() {
      it('the first row', function() {
        const firstRow = [
          ['x', 'x', 'x'],
          ['x', 'o', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(horizontal(firstRow)).to.equal('x');
      });

      it('the second row', function() {
        const secondRow = [
          ['x', 'o', 'x'],
          ['o', 'o', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(horizontal(secondRow)).to.equal('o');
      });

      it('the third row', function() {
        const thirdRow = [
          ['x', 'o', 'x'],
          ['x', 'x', 'o'],
          ['o', 'o', 'o'],
        ];

        expect(horizontal(thirdRow)).to.equal('o');
      });

      it('any row', function() {
        const anyRow = [
          ['x', 'o', 'x', 'o', 'o', 'x'],
          ['o', 'o', 'o', '', 'x', 'x'],
          ['x', 'x', 'o', '', 'o', 'o'],
          ['x', 'x', 'o', '', '', ''],
          ['x', 'x', 'o', '', '', ''],
          ['x', 'x', 'x', 'x', 'x', 'x'],
        ];

        expect(horizontal(anyRow)).to.equal('x');
      });
    });
  });

  describe('vertical', function() {
    it('should be a function', function() {
      expect(typeof vertical).to.equal('function');
    });

    it('should return false if no vertical win is present', function() {
      const noVerticalWin = [
        ['x', 'o', 'x'],
        ['o', 'o', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(vertical(noVerticalWin)).to.equal(false);
    });

    describe('should return true if a vertical win is present in', function() {
      it('the first col', function() {
        const firstCol = [
          ['x', 'x', 'x'],
          ['x', 'o', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(vertical(firstCol)).to.equal('x');
      });

      it('the second col', function() {
        const secondCol = [
          ['x', 'x', 'x'],
          ['o', 'x', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(vertical(secondCol)).to.equal('x');
      });

      it('the third col', function() {
        const thirdCol = [
          ['x', 'o', 'o'],
          ['x', 'x', 'o'],
          ['o', 'o', 'o'],
        ];

        expect(vertical(thirdCol)).to.equal('o');
      });

      it('any col', function() {
        const anyCol = [
          ['x', 'o', 'x', 'o', 'o', 'x'],
          ['o', 'o', 'o', 'o', 'x', 'x'],
          ['x', 'x', 'o', 'o', 'o', 'o'],
          ['x', 'x', 'o', 'o', 'o', 'x'],
          ['x', 'x', 'o', 'o', '', ''],
          ['x', 'x', 'x', 'o', 'x', 'x'],
        ];

        expect(vertical(anyCol)).to.equal('o');
      });
    });
  });

  describe('diagonal', function() {
    it('should be a function', function() {
      expect(typeof diagonal).to.equal('function');
    });

    it('should return false if no diagonal win is present', function() {
      const noDiagonalWin = [
        ['x', 'o', 'x'],
        ['o', 'o', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(diagonal(noDiagonalWin)).to.equal(false);
    });

    describe('should return true if a diagonal win is present in a', function() {
      it('3x3 matrix with a downward diagnol', function() {
        const downward = [
          ['x', 'o', 'x'],
          ['o', 'x', 'o'],
          ['o', 'o', 'x'],
        ];

        expect(diagonal(downward)).to.equal('x');
      });

      it('3x3 matrix with an upward diagnol', function() {
        const upward = [
          ['x', 'o', 'x'],
          ['o', 'x', 'o'],
          ['x', 'o', 'o'],
        ];

        expect(diagonal(upward)).to.equal('x');
      });

      it('large matrix with an downward diagnol', function() {
        const downward = [
          ['o', 'o', 'x', 'o', 'x'],
          ['o', 'o', 'o', 'x', 'x'],
          ['x', 'o', 'o', 'o', 'x'],
          ['x', 'x', 'x', 'o', 'x'],
          ['x', 'o', 'x', 'o', 'o'],
        ];

        expect(diagonal(downward)).to.equal('o');
      });

      it('large matrix with an upward diagnol', function() {
        const upward = [
          ['o', 'o', 'x', 'o', 'x'],
          ['o', 'o', 'o', 'x', 'x'],
          ['x', 'o', 'x', 'o', 'x'],
          ['x', 'x', 'x', 'o', 'x'],
          ['x', 'o', 'x', 'o', 'x'],
        ];

        expect(diagonal(upward)).to.equal('x');
      });
    });
  });

  describe('tie', function() {
    it('should be a function', function() {
      expect(typeof tie).to.equal('function');
    });

    it('should return false if all tiles are not claimed', function() {
      const emptyTiles = [
        ['x', 'o', 'x'],
        ['', '', 'o'],
        ['', 'x', 'o'],
      ];

      expect(tie(emptyTiles)).to.equal(false);
    });

    it('should return true all tiles are claimed', function() {
      const allClaimed = [
        ['x', 'o', 'x'],
        ['x', 'o', 'o'],
        ['o', 'x', 'o'],
      ];

      expect(tie(allClaimed)).to.equal(true);
    });
  });
});
