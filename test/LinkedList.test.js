//Date: Thu Oct 15 2015 15:24:53 GMT+0800 (CST)
'use strict';
const should = require('chai').should();
const listPath = '../DataStructure/LinkedList';
var LinkedList = require(listPath);


describe.only('DataStructure -- LinkedList: \n', () => {

  describe('LinkedList -- Export: \n', () => {

    it('should be a constructor \n ',  () => {
        LinkedList.should.exist;
        LinkedList.should.be.a('function');
    });

    it('the constructor should create a brand new LinkedList object', () =>{
      var l1 = new LinkedList();
      var l2 = new LinkedList();

      l1.should.be.an('object');
      l2.should.be.an('object');

      var comparasion = (l1 === l2); //TODO: Continue......
      comparasion.should.be.a('boolean');
      comparasion.should.equal(false);
    });

  });

  describe('LinkedList -- Methods: \n', () => {

    describe('LinkedList -- should have: \n', () => {
      var linkedlist = new LinkedList();

      it('should have append() method', () => {
        var append = linkedlist.append;
        append.should.be.exist;
        append.should.be.a('function');
      });

      it('should have removeAt() method', () => {
        var removeAt = linkedlist.removeAt;
        removeAt.should.be.exist;
        removeAt.should.be.a('function');
      });

    });


    describe('LinkedList -- append method', () => {
      var linkedlist = new LinkedList();

      it('should add element to the list', () => {
        linkedlist.append(12);
        var result = linkedlist.testMethod().length;
        result.should.be.a('number');
        result.should.equal(1);
      });

      it('should add the element to the end of list', () =>{
        linkedlist.append(23);
        var result = linkedlist.testMethod().head.next.element;
        result.should.be.a('number');
        result.should.not.equal(13);
        result.should.equal(23);
      });

    });

    describe('LinkedList -- removeAt method', () => {
      var linkedlist = new LinkedList();
      linkedlist.append(12);
      linkedlist.append(12);

      it('should check whether input is valid', () => {
        var invalidInput1 = -1;
        var invalidInput2 = 3;

        var result1 = linkedlist.removeAt(invalidInput1);
        var result2 = linkedlist.removeAt(invalidInput2);

        result1.should.be.an('error');
        result2.should.be.an('error');
      });

      it('should return the first element, when input position is 0', () => {
        
      });


    });


  });

});