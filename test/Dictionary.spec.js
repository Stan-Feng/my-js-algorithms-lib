'use strict';
import { expect } from 'chai';
import { should } from 'chai';
import Dictionary from '../DataStructure/Dictionary';

import commonTest from './common.spec';

describe('DataStructure -- Dictionary(Map): \n', () => {
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

  describe('Dictionary(Map) -- get(key) method \n', () => {
    it('should return error message when the key is not found \n', () => {
      var result = dictionary.get('age');
      result.should.be.an('object');
      result.should.have.property('key');
      result.should.have.property('error');
      result.key.should.equal('age');
    });

    it('should return value correctly \n', () => {
      var result = dictionary.get('name');
      result.should.be.a('string');
      result.should.equal('Stan Feng');
    });

  });

  describe('Dictionary(Map) -- keys() method \n', () => {
    it('should return an array contains all values of dictionary \n', () => {
      dictionary.set('age', '21');
      dictionary.set('gender', 'Male');

      var result = dictionary.keys();
      result.should.be.an('array');
      result.should.have.length(3);
      result[0].should.equal('name');
      result[1].should.equal('age');
      result[2].should.equal('gender');
    });
  });

  describe('Dictionary(Map) -- values() method \n', () => {
    it('should return an array contains all values of dictionary \n', () => {
      dictionary.set('age', '21');
      dictionary.set('gender', 'Male');

      var result = dictionary.values();
      result.should.be.an('array');
      result.should.have.length(3);
      result[0].should.equal('Stan Feng');
      result[1].should.equal('21');
      result[2].should.equal('Male');
    });
  });
});










