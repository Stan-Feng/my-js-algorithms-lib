'use strict';
import chai from 'chai';
import Set from '../DataStructure/Set';
import commonTest from './common.spec';

const expect = chai.expect;

describe('DataStructure -- Set: \n', () => {
  commonTest(Set, ['add', 'remove', 'has', 'clear', 'size', 'values',
                    'union', 'intersection', 'difference', 'subset']);

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
      let result = set.add(1);
      result.should.be.an('object');
      result.isSuccess.should.be.true;
      expect(result.reason).to.be.a('null');

      let length = set.size();
      length.should.equal(1);
    });

  });


  describe('Set -- remove(item) method: \n', () => {
    it('should throw error when removed elemet does not exist. \n', () => {
      let result = set.remove(1);
      result.should.be.an('object');
      result.should.have.property('isSuccess');
      result.should.have.property('reason');
      result.isSuccess.should.be.false;
      result.reason.should.exist;
    });

    it('should remove element correctly. \n', () => {
      set.add(1);
      set.add(2);
      set.add(3);

      let result = set.remove(2);
      result.should.equal(2);

      let isExist = set.has(2);
      isExist.should.be.false;

      let length = set.size();
      length.should.equal(2);
    });

  });

  describe('Set -- values() method: \n', () => {
    it('should return an empty array while set is empty \n ', () => {
      let result = set.values();
      result.should.be.an('array');
      result.should.have.length(0);
    });

    it('should return an array with all items \n', () =>{
      set.add(1);
      set.add(2);
      set.add(3);

      let result = set.values();

      result.should.be.an('array');
      result.should.have.length(3);

      result.map(item => {
        item.should.be.a('number');
      });
    });
  });

  describe('Set -- prototype.union() method: \n', () => {

    it('should return false when input is not a Set instance. \n', () => {
      let result = set.union(123);
      result.should.be.an('object');
      result.should.have.property('isSuccess');
      result.should.have.property('reason');
      result.isSuccess.should.be.false;
    });

    it('should return a correct set with no element repeated. \n', () => {
      set.add(1);
      set.add(2);
      set.add(3);

      let otherSet = new Set();
      otherSet.add(3);
      otherSet.add(4);
      otherSet.add(5);

      let result = set.union(otherSet);

      result.should.be.an('object');
      (result instanceof Set).should.equal(true);

      result.values().should.be.an('array');
      let count = 1;
      result.values().map(item => {
        item.should.be.a('number');
        item.should.equal(count);
        count++;
      });
    });

  });

  describe('Set -- prototype.intersection() method: \n', () => {
    it('should return false when input is not a Set instance. \n', () => {
      let result = set.intersection(123);
      result.should.be.an('object');
      result.should.have.property('isSuccess');
      result.should.have.property('reason');
      result.isSuccess.should.be.false;
    });

    it('should return correct intersection set \n', () => {
      set.add(1);
      set.add(2);
      set.add(3);

      let otherSet = new Set;
      otherSet.add(2);
      otherSet.add(3);
      otherSet.add(4);
      otherSet.add(5);

      let resultSet = set.intersection(otherSet);
      resultSet.should.be.an('object');
      resultSet.size().should.equal(2);

      resultSet.has(2).should.be.true;
      resultSet.has(3).should.be.true;

      resultSet.has(1).should.be.false;
    });

  });

  describe('Set -- prototype.difference() method: \n', () => {

    it('should return false when input is not a Set instance. \n', () => {
      let result = set.difference(123);
      result.should.be.an('object');
      result.should.have.property('isSuccess');
      result.should.have.property('reason');
      result.isSuccess.should.be.false;
    });

    it('should find difference of setA from setB \n', () => {
      set.add(1);
      set.add(2);
      set.add(3);
      set.add(4);

      let otherSet = new Set();
      otherSet.add(3);
      otherSet.add(5);
      otherSet.add(4);
      otherSet.add(7);
      otherSet.add(9);

      let diffOfA = set.difference(otherSet);
      diffOfA.should.be.an('object');
      (diffOfA instanceof Set).should.be.true;

      let values = diffOfA.values();
      values.should.have.length(2);
      values[0].should.be.equal(1);
      values[1].should.be.equal(2);

      let diffOfB = otherSet.difference(set);
      diffOfB.values().should.have.length(3);
      (diffOfB.has(5)).should.be.equal(true);
      (diffOfB.has(7)).should.be.equal(true);
      (diffOfB.has(9)).should.be.equal(true);
    });
  });

  describe('Set -- prototype.subset() method:]n ', () => {
    it('should return false when input is not a Set instance. \n', () => {
      let result = set.subset(123);
      result.should.be.an('object');
      result.should.have.property('isSuccess');
      result.should.have.property('reason');
      result.isSuccess.should.be.false;
    });

    it('should judge coorectly whether this set is subset of other set \n', () => {
      let otherSet = new Set();

      set.add(1);
      set.add(2);
      set.add(3);
      set.add(4);

      otherSet.add(1);
      otherSet.add(2);
      otherSet.add(3);
      otherSet.add(4);
      otherSet.add(5);
      otherSet.add(6);

      let result = set.subset(otherSet);
      result.should.be.a('boolean');
      result.should.be.true;
      result.should.equal(true);
    });
  });
});


