import { expect } from 'chai';
import arrayUtils from '../../src/utils/array.js';

describe('arrayUtils', function() {
  describe('equalContents', function() {
    it('should be a function', function() {
      expect(typeof arrayUtils.equalContents).to.equal('function');
    });

    it('should return false if an empty array is passed in', function() {
      expect(arrayUtils.equalContents([])).to.equal(false);
    });

    it('should return the value that is in an array with all equal contents', function() {
      expect(arrayUtils.equalContents([''])).to.equal('');
      expect(arrayUtils.equalContents([1])).to.equal(1);
      expect(arrayUtils.equalContents([{cat: 'Dog'}])).to.deep.equal({cat: 'Dog'});
    });

    it('should return false if all contents in an array are not the same', function() {
      const test = ['x', 'o', 'x'];
      const intTest = [1, 2, 3, 4];
      const largeTest = test.concat(test).concat(test);

      expect(arrayUtils.equalContents(test)).to.equal(false);
      expect(arrayUtils.equalContents(intTest)).to.equal(false);
      expect(arrayUtils.equalContents(largeTest)).to.equal(false);
    });
  });
});