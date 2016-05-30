import React from 'react';
import { expect } from 'chai';

import WinValidation from '../../src/services/WinValidation.js';

const validation = new WinValidation();

describe('Win Validation', function() {
  it('should be an object', function() {
    expect(typeof validation).to.equal('object');
  });

  describe('equalContents', function() {
    it('should be a function', function() {
      expect(typeof validation.equalContents).to.equal('function');
    });

    it('should return true if all contents in an array are the same', function() {
      const test = ['o', 'o', 'o'];
      const intTest = [0, 0, 0, 0];
      const largeTest = test.concat(test).concat(test);

      expect(validation.equalContents(test)).to.equal(true);
      expect(validation.equalContents(intTest)).to.equal(true);
      expect(validation.equalContents(largeTest)).to.equal(true);
    });

    it('should return false if all contents in an array are not the same', function() {
      const test = ['x', 'o', 'x'];
      const intTest = [1, 2, 3, 4];
      const largeTest = test.concat(test).concat(test);

      expect(validation.equalContents(test)).to.equal(false);
      expect(validation.equalContents(intTest)).to.equal(false);
      expect(validation.equalContents(largeTest)).to.equal(false);
    });
  });

  describe('isHorizontalWin', function() {
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
});