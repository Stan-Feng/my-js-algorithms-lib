'use strict';
import { expect } from 'chai';
import Dictionary from '../DataStructure/Dictionary';

import commonTest from './common.spec';

describe.only('DataStructure -- Dictionary(Map): \n', () => {
  commonTest(Dictionary, ['size', 'set', 'remove', 'has', 'get', 'keys', 'values', 'clear']);

  var dictionary;
  beforeEach( () => {
    dictionary = new Dictionary();
    dictionary.set('name', 'fjw');
  });

  describe('Dictionary(Map) -- set() method \n', ()=> {
    it('should add item correctly \n', () => {
      var result = dictionary.has('name');
      expect(result).to.be.true;
    });

    it('should increase size after add it successfully \n', () => {
      var size = dictionary.size();
      expect(size).to.be.a('number');
      expect(size).to.equal(1);
    });
  });


});
