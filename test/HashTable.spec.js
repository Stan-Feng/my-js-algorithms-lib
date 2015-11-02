'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const HashTable = require('../DataStructure/HashTable');
const LinkedList = require('../DataStructure/LinkedList');
const commonTest = require('./common.spec');


describe('DataStructure -- HashTable', () => {
  commonTest(HashTable, ['remove', 'get', 'put']);

  var table;
  beforeEach( () => {
    table = new HashTable();
    table.put('name', 'fjw');
  });

  describe('HashTabel -- put(key, value) methods \n', () => {
    it('should put value correctly \n', () => {
      var allLinkedList = table.getAllItems();
      allLinkedList.should.be.an('array');
      allLinkedList.should.have.length(1);
      allLinkedList[0].should.be.an('object');

      expect(allLinkedList[0] instanceof LinkedList).to.be.true;
      expect(allLinkedList[0].size()).to.equal(1);

      expect(allLinkedList[0].getHead().element.value).to.equal('fjw');
      expect(allLinkedList[0].getHead().element.key).to.equal('name');
    });

    it('should append value to the end of LinkedList whereas their key are the same \n', () =>{
      table.put('name', 'stan');

      var allLinkedList = table.getAllItems();
      allLinkedList.should.be.an('array');
      allLinkedList.should.have.length(1);
      allLinkedList[0].should.be.an('object');

      expect(allLinkedList[0] instanceof LinkedList).to.be.true;
      expect(allLinkedList[0].size()).to.equal(2);

      expect(allLinkedList[0].getHead().element.value).to.equal('fjw');
      expect(allLinkedList[0].getHead().element.key).to.equal('name');

      expect(allLinkedList[0].getHead().next.element.value).to.equal('stan');
      expect(allLinkedList[0].getHead().next.element.key).to.equal('name');
    });


      it('should put different key/value correctly \n', () => {

          table.put('age', 21);

          var allLinkedList = table.getAllItems();
          allLinkedList.should.be.an('array');
          allLinkedList.should.have.length(2);
          allLinkedList[0].should.be.an('object');
          allLinkedList[1].should.be.an('object');

          expect(allLinkedList[0] instanceof LinkedList).to.be.true;
          expect(allLinkedList[0].size()).to.equal(1);

          expect(allLinkedList[1] instanceof LinkedList).to.be.true;
          expect(allLinkedList[1].size()).to.equal(1);

          expect(allLinkedList[0].getHead().element.value).to.equal(21);
          expect(allLinkedList[0].getHead().element.key).to.equal('age');

          expect(allLinkedList[1].getHead().element.value).to.equal('fjw');
          expect(allLinkedList[1].getHead().element.key).to.equal('name');
      });

  });

  describe('HashTabel -- remove(key) method \n', () => {
    it('should remove LinkedList then set value to be undefined \n ', () => {
      var result = table.remove('name');
      result.should.be.true;

      var allLinkedList = table.getAllItems();
      allLinkedList.should.be.an('array');
      allLinkedList.should.have.length(1);
      expect(allLinkedList[0]).to.be.undefined;

      table.put('name', 'stan');
      table.put('name', 'fjw');
      table.remove('name');

      var allLinkedList = table.getAllItems();
      allLinkedList.should.be.an('array');
      allLinkedList.should.have.length(1);
      expect(allLinkedList[0]).to.be.undefined;
    });

    it('should remove the node on linkedlist correctly \n', () => {
      table.put('age', 21);

      table.remove('age').should.be.true;

      var allLinkedList = table.getAllItems();
      allLinkedList.should.be.an('array');
      allLinkedList.should.have.length(2);
      expect(allLinkedList[0]).to.be.undefined;
      expect(allLinkedList[1]).to.be.an('object');
    });

  });

  describe('HashTabel -- get(key) method \n', () => {
    it('should get exists key correctly \n', () => {
      table.put('name', 'stan');

      var getResult = table.get('name');
      getResult.should.be.an('array');
      getResult.should.have.length(2);
      getResult[0].should.be.equal('fjw');
      getResult[1].should.be.equal('stan');
    });

    it('shoud return undefined if the key is not exists \n', () => {
      expect(table.remove('age')).to.be.undefined;
    });
  });

});

