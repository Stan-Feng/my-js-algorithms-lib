//Date: Thu Oct 15 2015 15:24:53 GMT+0800 (CST)
'use strict';
var should = require('chai').should();
var listPath = '../DataStructure/LinkedList';


describe.only('DataStructure -- LinkedList: \n', function () {

  describe('LinkedList -- Export: \n', function(){
    var LinkedList = require(listPath);

    it('should be a constructor \n ', function(){
        LinkedList.should.exist;
        LinkedList.should.be.a('function');
    });

    it('the constructor should create a brand new LinkedList object', function () {
      var l1 = new LinkedList();
      var l2 = new LinkedList();

      l1.should.be.an('object');
      l2.should.be.an('object');

      var comparasion = (l1 === l2); //TODO: Continue......
      comparasion.should.be.a('boolean');
      comparasion.should.equal(false);
    });

  });

});