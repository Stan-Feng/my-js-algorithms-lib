//Date: Thu Oct 15 2015 15:24:53 GMT+0800 (CST)
'use strict';
import chai from 'chai';
const should = chai.should();
const expect = chai.expect;

import LinkedList from '../DataStructure/LinkedList';

describe('DataStructure -- LinkedList: \n', () => {

  describe('LinkedList -- Export: \n', () => {

    it('should be a constructor \n ',  () => {
        LinkedList.should.exist;
        LinkedList.should.be.a('function');
    });

    it('the constructor should create a brand new LinkedList object: \n', () =>{
      var l1 = new LinkedList();
      var l2 = new LinkedList();

      l1.should.be.an('object');
      l2.should.be.an('object');

      var comparasion = (l1 === l2);
      comparasion.should.be.a('boolean');
      comparasion.should.equal(false);
    });

  });

  describe('LinkedList -- Methods \n', () => {

    describe('LinkedList -- should have \n', () => {
      var linkedlist = new LinkedList();

      it('should have append() method \n', () => {
        var append = linkedlist.append;
        append.should.be.exist;
        append.should.be.a('function');
      });

      it('should have removeAt() method \n', () => {
        var removeAt = linkedlist.removeAt;
        removeAt.should.be.exist;
        removeAt.should.be.a('function');
      });


      it('should have insert() method \n', () => {
        var insert= linkedlist.insert;
        insert.should.be.exist;
        insert.should.be.a('function');
      });

      it('should have toString() method \n', () => {
        var toString = linkedlist.toString;
        toString.should.be.exist;
        toString.should.be.a('function');
      });

      it('should have indexOf() method \n', () => {
        var indexOf = linkedlist.indexOf;
        indexOf.should.be.exist;
        indexOf.should.be.a('function');
      });

      it('should have remove() method \n', () => {
        var remove= linkedlist.remove;
        remove.should.be.exist;
        remove.should.be.a('function');
      });
    });


    describe('LinkedList -- append method \n', () => {
      var linkedlist = new LinkedList();

      it('should add element to the list \n', () => {
        linkedlist.append(12);
        var result = linkedlist.size();
        result.should.be.a('number');
        result.should.equal(1);
      });

      it('should add the element to the end of list \n', () =>{
        linkedlist.append(23);
        var result = linkedlist.getHead().next.element;
        result.should.be.a('number');
        result.should.not.equal(13);
        result.should.equal(23);
      });

    });


    describe('LinkedList -- removeAt method \n', () => {


      it('should check whether input is valid \n', () => {
        var linkedlist = new LinkedList();
        linkedlist.append(11);
        linkedlist.append(12);

        var invalidInput1 = -1;
        var invalidInput2 = 3;
        var invalidInput3 = 2;

        var result1 = linkedlist.removeAt(invalidInput1);
        var result2 = linkedlist.removeAt(invalidInput2);
        var result3 = linkedlist.removeAt(invalidInput3);

        result1.should.be.an('error');
        result2.should.be.an('error');
        result3.should.be.an('error');
      });

      it('should return the first element, when input position is 0 \n', () => {
        var linkedlist = new LinkedList();
        linkedlist.append(11);
        linkedlist.append(12);

        var node = linkedlist.removeAt(0);
        node.should.be.an('object');
        node.should.have.property('element');
        node.should.have.property('next');
        node.element.should.equal(11);

        var length = linkedlist.size();
        length.should.be.a('number');
        length.should.equal(1);

        var count = 0;
        var head = linkedlist.getHead();
        var length = linkedlist.size()- 1;
        while(head.next){
          count++;
        }
        count.should.equal(length);
      });

      it('should return the specified element and remove it \n', () => {
        var linkedlist = new LinkedList();
        linkedlist.append(12);
        linkedlist.append(13);
        linkedlist.append(14);
        linkedlist.append(15);

        var node = linkedlist.removeAt(2);
        node.should.be.an('object');
        node.should.have.property('element');
        node.should.have.property('next');

        var element = node.element;
        element.should.be.a('number');
        element.should.equal(14);

        var head = linkedlist.getHead();
        var length = linkedlist.size();
        var count = 0;
        while(head.next){
          head = head.next;
          count++;
        }
        var isLengthCorrect = (count + 1 === length);
        isLengthCorrect.should.be.a('boolean');
        isLengthCorrect.should.be.true;
        isLengthCorrect.should.equal(true);

        var head = linkedlist.getHead();
        head.should.be.an('object');
        head.element.should.be.a('number');
        head.element.should.equal(12);
        head.next.element.should.equal(13);
        head.next.next.element.should.equal(15);
      });

      it('should remove the last item correctly \n', () => {
        var linkedlist = new LinkedList();
        linkedlist.append(1);
        linkedlist.append(2);
        linkedlist.append(3);
        linkedlist.append(4);
        linkedlist.append(5);

        var node = linkedlist.removeAt(4);
        node.should.be.an('object');
        node.should.have.property('element');
        node.should.have.property('next');

        node.element.should.be.a('number');
        node.element.should.equal(5);

        var head = linkedlist.getHead();
        head.should.be.an('object');
        head.element.should.be.a('number');
        head.element.should.equal(1);
        head.next.element.should.equal(2);
        head.next.next.element.should.equal(3);
        head.next.next.next.element.should.equal(4);
        expect(head.next.next.next.next).be.a('null');

        var length = linkedlist.size();
        length.should.be.a('number');
        length.should.equal(4);
      });

    });


    describe('LinkedList -- insert() method: \n', () =>{

      it('should check input is valid \n', () => {
        var linkedlist = new LinkedList();
        var insert = linkedlist.insert;

        var invalidInput1 = -1;
        var invalidInput2 = 5;
        var validInput= 0;

        var validResult = insert(validInput, 12);
        validResult.should.be.a('boolean');
        validResult.should.be.equal(true);

        var invalidResult1 = insert(invalidInput1, 12);
        var invalidResult2 = insert(invalidInput2, 13);
        invalidResult1.should.be.an('error');
        invalidResult2.should.be.an('error');
      });

      it('should insert element directly when list is empty \n', () => {
        var linkedlist = new LinkedList();
        var insert = linkedlist.insert;

        var result = insert(0, 12);
        result.should.be.a('boolean');
        result.should.be.true;
        result.should.equal(true);

        var length = linkedlist.size();
        length.should.equal(1);

        var head = linkedlist.getHead();
        head.should.be.an('object');
        head.should.have.property('next');
        head.should.have.property('element');

        expect(head.next).to.be.a('null');
        head.element.should.equal(12);
      });

      it('should insert 0 position correctly \n', () => {
        var linkedlist = new LinkedList();
        var insert = linkedlist.insert;

        linkedlist.append(13);
        var result = insert(0, 12);
        result.should.be.a('boolean');
        result.should.be.true;
        result.should.equal(true);

        var head = linkedlist.getHead();
        var length = linkedlist.size();

        head.should.be.an('object');
        head.should.have.property('element');
        head.should.have.property('next');
        head.element.should.equal(12);
        head.next.should.be.an('object');
        head.next.element.should.equal(13);

      });

      it('should insert other position correctly \n', () => {
        var linkedlist = new LinkedList();
        var insert = linkedlist.insert;

        linkedlist.append(12);
        linkedlist.append(14);

        var result = insert(1, 13);
        result.should.be.a('boolean');
        result.should.equal(true);

        var head = linkedlist.getHead();
        var length = linkedlist.size();
        length.should.equal(3);

        head.next.element.should.equal(13);
        head.next.next.should.be.an('object');
        head.next.next.element.should.equal(14);

        var result = linkedlist.insert(2, 100);
        result.should.equal(true);

        head.next.element.should.equal(13);
        head.next.next.element.should.equal(100);

      });

      it('should insert the last position correctly \n', () => {
        var linkedlist = new LinkedList();
        var insert = linkedlist.insert;

        linkedlist.append(12);
        linkedlist.append(13);
        linkedlist.append(15);

        var result = insert(2, 14);
        result.should.be.a('boolean');
        result.should.equal(true);

        var head = linkedlist.getHead();
        var length = linkedlist.size();

        length.should.equal(4);
        head.next.next.should.be.an('object');
        head.next.next.element.should.equal(14);

      });

    });


    describe('LinkedList -- toString() method: \n', () => {

      it('should return empty string while the list is empty \n', () => {
          var linkedlist = new LinkedList();
          var result = linkedlist.toString();

          result.should.be.a('string');
          result.should.equal('');
      });

      it('should return toString at correctly format \n', () => {
          var linkedlist = new LinkedList();
          linkedlist.append(1);
          linkedlist.append(2);
          linkedlist.append(3);

          var result = linkedlist.toString();

          result.should.be.a('string');
          result.should.equal('123');

      });

    });


    describe('LinkedList -- indexOf() method: \n', () => {

      it('should return error when the list is empty \n', () =>{
        var linkedlist = new LinkedList();
        var indexOf = linkedlist.indexOf;
        var result = indexOf(12);
        result.should.be.a('error');
      });

      it('should return correct index \n', () => {
        var linkedlist = new LinkedList();
        var indexOf = linkedlist.indexOf;

        linkedlist.append(1);
        linkedlist.append(2);
        linkedlist.append(3);

        var result1 = linkedlist.indexOf(3);
        result1.should.equal(2);

        var result2 = linkedlist.indexOf(2);
        result2.should.equal(1);


        var result3 = linkedlist.indexOf(1);
        result3.should.equal(0);

      });

      it('should return -1 when the input element is not exist \n', () => {
        var linkedlist = new LinkedList();
        var indexOf = linkedlist.indexOf;

        linkedlist.append(1);
        linkedlist.append(2);
        linkedlist.append(3);

        var result = linkedlist.indexOf(4);
        result.should.equal(-1);
      });

    });


    describe('LinkedList -- remove() method: \n', () => {
      it('should thrwo error when remove an empty list \n', () => {
        var linkedlist = new LinkedList();
        var result = linkedlist.remove(123);

        result.should.be.an('error');
      });

      it('should return -1 when the element does not exist \n', () => {
        var linkedlist = new LinkedList();
        linkedlist.append(1);
        linkedlist.append(2);
        linkedlist.append(3);

        var result = linkedlist.remove(4);
        result.should.equal(-1);
      });

      it('should remove correct element in the linkedlist \n', () =>{
        var linkedlist = new LinkedList();
        linkedlist.append(1);
        linkedlist.append(2);
        linkedlist.append(3);

        var result1 = linkedlist.remove(1);
        result1.should.equal(1);

        var result2 = linkedlist.remove(1);
        result2.should.equal(-1);

      });
    });


  });

});
