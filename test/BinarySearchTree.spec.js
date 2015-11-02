'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const commonTest = require('./common.spec');
const BinarySearchTree = require('../DataStructure/BinarySearchTree');


describe.only('DataStructure -- Tree : \n', () => {
  commonTest(BinarySearchTree, ['insert', 'search', 'inOrderTraverse', 'preOrderTraverse', 'postOrderTraverse',
             'min', 'max', 'remove']);

   var binaryTree;
   beforeEach( () => {
     binaryTree = new BinarySearchTree();
   });


   describe('BinarySearchTree -- insert(key) method\n', () => {
     it('should insert correctly when the tree is empty \n', () => {
        var result = binaryTree.insert(1);
        result.should.be.a('boolean');
        result.should.be.true;

        var root = binaryTree.getRoot();
        root.should.be.an('object');
        root.should.have.property('key');
        root.should.have.property('right');
        root.should.have.property('left');

        expect(root.left).to.be.a.null;
        expect(root.right).to.be.a.null;
        expect(root.key).to.equal(1);
     });

     it('should insert node correctly based on their key \n', () => {
       
     });


   });


});

