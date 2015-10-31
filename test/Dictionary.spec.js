'use strict';
import { expect } from 'chai';
import { should } from 'chai';
import Dictionary from '../DataStructure/Dictionary';

import commonTest from './common.spec';

describe.only('DataStructure -- Dictionary(Map): \n', () => {
  commonTest(Dictionary, ['size', 'set', 'remove', 'has', 'get', 'keys', 'values', 'clear']);

  var dictionary;
  beforeEach( () => {
    dictionary = new Dictionary();
    dictionary.set('name', 'Stan Feng');
  });

  describe('Dictionary(Map) -- set(key, value) method \n', ()=> {
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

  describe('Dictionary(Map) -- remove(key) method \n', () => {
    it('should return error message when the key is not found \n', () => {
      var result = dictionary.remove('age');
      result.should.be.an('object');
      result.should.have.property('key');
      result.should.have.property('error');
      result.key.should.equal('age');
    });

    it('should remove item correctly \n', () => {
      var result = dictionary.remove('name');

      result.should.be.an('object');
      result.should.have.property('name');
      result.name.should.equal('Stan Feng');

      var hasKey = dictionary.has('name');
      hasKey.should.be.false;
      hasKey.should.equal(false);
    });

    it('should decrease the size after remove \n', () => {
      dictionary.remove('name');
      var size = dictionary.size();
      size.should.equal(0);
    });

  });


});
