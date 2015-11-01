'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const HashTable = require('../DataStructure/HashTable');
const LinkedList = require('../DataStructure/LinkedList');
const commonTest = require('./common.spec');


describe.only('DataStructure -- HashTable', () => {
  commonTest(HashTable, ['remove', 'get', 'put']);

  var table;
  beforeEach( () => {
    table = new HashTable();
    table.put('name', 'fjw');
  });

  describe('HashTabel -- put(key, value) methods \n', () => {
    it('should put value correctly \n', () => {
      var putItems = table.getAllItems();
      putItems.should.be.an('array');
      putItems.should.have.length(1);
      putItems[0].should.be.an('object');

      expect(putItems[0] instanceof LinkedList).to.be.true;
      expect(putItems[0].size()).to.equal(1);

      expect(putItems[0].getHead().element.value).to.equal('fjw');
      expect(putItems[0].getHead().element.key).to.equal('name');
    });

    it('should append value to the end of LinkedList whereas their key are the same \n', () =>{
      table.put('name', 'stan');

      var putItems = table.getAllItems();
      putItems.should.be.an('array');
      putItems.should.have.length(1);
      putItems[0].should.be.an('object');

      expect(putItems[0] instanceof LinkedList).to.be.true;
      expect(putItems[0].size()).to.equal(2);

      expect(putItems[0].getHead().element.value).to.equal('fjw');
      expect(putItems[0].getHead().element.key).to.equal('name');

      expect(putItems[0].getHead().next.element.value).to.equal('stan');
      expect(putItems[0].getHead().next.element.key).to.equal('name');
    });
  });

  it('should put different key/value correctly \n', () => {

      table.put('age', 21);

      var putItems = table.getAllItems();
      putItems.should.be.an('array');
      putItems.should.have.length(2);
      putItems[0].should.be.an('object');
      putItems[1].should.be.an('object');

      expect(putItems[0] instanceof LinkedList).to.be.true;
      expect(putItems[0].size()).to.equal(1);

      expect(putItems[1] instanceof LinkedList).to.be.true;
      expect(putItems[1].size()).to.equal(1);

      expect(putItems[0].getHead().element.value).to.equal(21);
      expect(putItems[0].getHead().element.key).to.equal('age');

      expect(putItems[1].getHead().element.value).to.equal('fjw');
      expect(putItems[1].getHead().element.key).to.equal('name');
  });

});
