import React from 'react';
import { expect } from 'chai';

import WinValidation from '../../src/services/WinValidation.js';

const validation = new WinValidation();

describe('Win Validation', function() {
  it('should be an object', function() {
    expect(typeof validation).to.equal('object');
  });

  describe('isHorizontalWin', function() {
    it('should be a function', function() {
      expect(typeof validation.isHorizontalWin).to.equal('function');
    });

    it('should return false if no horizontal win is present', function() {
      const noHorizontalWin = [
        ['x', 'o', 'x'],
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(validation.isHorizontalWin(noHorizontalWin)).to.equal(false);
    });

    describe('should return true if a horizontal win is present in', function() {
      it('the first row', function() {
        const firstRow = [
          ['x', 'x', 'x'],
          ['x', 'o', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(validation.isHorizontalWin(firstRow)).to.equal(true);
      });

      it('the second row', function() {
        const secondRow = [
          ['x', 'o', 'x'],
          ['o', 'o', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(validation.isHorizontalWin(secondRow)).to.equal(true);
      });

      it('the third row', function() {
        const thirdRow = [
          ['x', 'o', 'x'],
          ['x', 'x', 'o'],
          ['o', 'o', 'o'],
        ];

        expect(validation.isHorizontalWin(thirdRow)).to.equal(true);
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

        expect(validation.isHorizontalWin(anyRow)).to.equal(true);
      });
    });
  });

  describe('isVerticalWin', function() {
    it('should be a function', function() {
      expect(typeof validation.isVerticalWin).to.equal('function');
    });

    it('should return false if no vertical win is present', function() {
      const noVerticalWin = [
        ['x', 'o', 'x'],
        ['o', 'o', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(validation.isVerticalWin(noVerticalWin)).to.equal(false);
    });

    describe('should return true if a vertical win is present in', function() {
      it('the first col', function() {
        const firstCol = [
          ['x', 'x', 'x'],
          ['x', 'o', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(validation.isVerticalWin(firstCol)).to.equal(true);
      });

      it('the second col', function() {
        const secondCol = [
          ['x', 'x', 'x'],
          ['o', 'x', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(validation.isVerticalWin(secondCol)).to.equal(true);
      });

      it('the third col', function() {
        const thirdCol = [
          ['x', 'o', 'o'],
          ['x', 'x', 'o'],
          ['o', 'o', 'o'],
        ];

        expect(validation.isVerticalWin(thirdCol)).to.equal(true);
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

        expect(validation.isVerticalWin(anyCol)).to.equal(true);
      });
    });
  });

  describe('isDiagnolWin', function() {
    it('should be a function', function() {
      expect(typeof validation.isDiagonalWin).to.equal('function');
    });

    it('should return false if no diagonal win is present', function() {
      const noVerticalWin = [
        ['x', 'o', 'x'],
        ['o', 'o', 'o'],
        ['x', 'x', 'o'],
      ];

      expect(validation.isDiagonalWin(noVerticalWin)).to.equal(false);
    });

    describe('should return true if a diagonal win is present in a', function() {
      it('3x3 matrix with a downward diagnol', function() {
        const downward = [
          ['x', 'o', 'x'],
          ['o', 'x', 'o'],
          ['o', 'o', 'x'],
        ];

        expect(validation.isDiagonalWin(downward)).to.equal(true);
      });

      it('3x3 matrix with an upward diagnol', function() {
        const upward = [
          ['x', 'o', 'x'],
          ['o', 'x', 'o'],
          ['x', 'o', 'x'],
        ];

        expect(validation.isDiagonalWin(upward)).to.equal(true);
      });

      it('large matrix with an downward diagnol', function() {
        const downward = [
          ['o', 'o', 'x', 'o', 'x'],
          ['o', 'o', 'o', 'x', 'x'],
          ['x', 'o', 'o', 'o', 'x'],
          ['x', 'x', 'x', 'o', 'x'],
          ['x', 'o', 'x', 'o', 'o'],
        ];

        expect(validation.isDiagonalWin(downward)).to.equal(true);
      });

      it('large matrix with an upward diagnol', function() {
        const upward = [
          ['o', 'o', 'x', 'o', 'x'],
          ['o', 'o', 'o', 'x', 'x'],
          ['x', 'o', 'x', 'o', 'x'],
          ['x', 'x', 'x', 'o', 'x'],
          ['x', 'o', 'x', 'o', 'x'],
        ];

        expect(validation.isDiagonalWin(upward)).to.equal(true);
      });
    });
  });

  describe('getWinner', function() {
    it('should be a function', function() {
      expect(typeof validation.getWinner).to.equal('function');
    });

    it('should return false no winner is present', function() {
      const incompleteGame = [
        ['', 'o', 'x'],
        ['o', '', 'o'],
        ['x', 'o', ''],
      ];

      expect(validation.getWinner(incompleteGame)).to.equal(false);
    });

    describe('should return a winner object with the direction and player that won when a', function() {
      it('horizontal win occurs', function() {
        const horizontalOWin = [
          ['', 'o', 'x'],
          ['o', 'o', 'o'],
          ['x', 'x', ''],
        ];

        expect(validation.getWinner(horizontalOWin)).to.deep.equal({ player: 'o', direction: 'horizontal' });
      });

      it('vertical win occurs', function() {
        const horizontalOWin = [
          ['o', 'o', 'x'],
          ['o', 'x', 'o'],
          ['o', 'x', ''],
        ];

        expect(validation.getWinner(horizontalOWin)).to.deep.equal({ player: 'o', direction: 'vertical' });
      });

      it('downward diagonal win occurs', function() {
        const horizontalOWin = [
          ['x', 'o', 'x'],
          ['o', 'x', 'o'],
          ['o', 'x', 'x'],
        ];

        expect(validation.getWinner(horizontalOWin)).to.deep.equal({ player: 'x', direction: 'diagonal' });
      });

      it('upward diagonal win occurs', function() {
        const horizontalOWin = [
          ['x', 'o', 'x'],
          ['o', 'x', 'o'],
          ['x', 'x', 'o'],
        ];

        expect(validation.getWinner(horizontalOWin)).to.deep.equal({ player: 'x', direction: 'diagonal' });
      });
    });
  })
});