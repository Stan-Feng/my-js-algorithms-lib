'use strict';

import { should } from 'chai';
import { expect } from 'chai';
import Set from '../DataStructure/Set';
import commonTest from './common.spec';

describe.only('DataStructure -- Set: \n', () => {
  commonTest(Set, ['add', 'remove', 'has', 'clear', 'size', 'values']);

  let set;
  beforeEach(() => {
    set = new Set();
  });

  describe('Set -- has(item) method: \n ', () => {
    it('should return false when set does not contain element \n', () => {
      let result = set.has(2);
      result.should.equal(false);
    });
  });

  describe('Set -- add(item) method: \n ', () => {
    it('should return error when added element alread exists \n', () => {
      set.add(1);
      let result = set.add(1);
      result.should.be.an('object');
      result.should.have.property('isSuccess');
      result.should.have.property('reason');
      result.isSuccess.should.be.false;
      result.reason.should.exist;
    });

    it('should item add correctly \n', () => {
      set.add(1);

      let length = set.size();
      length.should.equal(1);
    });
  });



});


