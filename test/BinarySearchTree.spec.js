'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const commonTest = require('./common.spec');
const BinarySearchTree = require('../DataStructure/BinarySearchTree');


describe('DataStructure -- Tree : \n', () => {
	commonTest(BinarySearchTree, ['insert', 'search', 'inOrderTraverse', 'preOrderTraverse', 'postOrderTraverse',
             'min', 'max', 'remove']);

	var binaryTree;
	beforeEach(() => {
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
			binaryTree.insert(3);
			binaryTree.insert(1);
			binaryTree.insert(2);
			binaryTree.insert(4);
			binaryTree.insert(5);

			var root = binaryTree.getRoot();
			root.key.should.equal(3);

			root.left.should.be.an('object');
			root.left.key.should.equal(1);
			root.left.right.key.should.equal(2);

			root.right.key.should.equal(4);
			root.right.right.key.should.equal(5);
		});
	});


	describe('BinarySearchTree -- inOrderTraverse() method \n', () => {

		it('should return the correct array at correct order \n', () => {
			binaryTree.insert(11);
			binaryTree.insert(7);
			binaryTree.insert(15);
			binaryTree.insert(5);
			binaryTree.insert(3);
			binaryTree.insert(9);

			var result = binaryTree.inOrderTraverse();
			result.should.be.an('array');
			result.should.have.length(6);
			result[0].should.equal(3);
			result[1].should.equal(5);
			result[2].should.equal(7);
			result[3].should.equal(9);
			result[4].should.equal(11);
			result[5].should.equal(15);
		});

		it('should return the number from smallest one to largest one \n', () => {
      insertElement(binaryTree);

			var result = binaryTree.inOrderTraverse();
			result.should.have.length(15);
			result[0].should.equal(3);
			result[1].should.equal(5);
			result[2].should.equal(6);
			result[3].should.equal(7);
			result[4].should.equal(8);
			result[5].should.equal(9);
			result[6].should.equal(10);
			result[7].should.equal(11);
			result[8].should.equal(12);
			result[9].should.equal(13);
			result[10].should.equal(14);
			result[11].should.equal(15);
			result[12].should.equal(18);
			result[13].should.equal(20);
			result[14].should.equal(25);
		});
	});

	describe('BinarySearchTree -- min() method \n', () => {
		it('should return the min value of the whole tree \n', () => {
      insertElement(binaryTree);
			var minKey = binaryTree.min();
			minKey.should.equal(3);

			binaryTree.insert(11);
			binaryTree.insert(7);
			binaryTree.insert(15);
			binaryTree.insert(5);
			binaryTree.insert(3);
			binaryTree.insert(9);
			binaryTree.insert(1);

			var minKey = binaryTree.min();
			minKey.should.equal(1);
		});
	});

	describe('BinarySearchTree -- max() method \n', () => {
		it('should return the max value of the whole tree \n', () => {
      insertElement(binaryTree);
			var max = binaryTree.max();
			max.should.equal(25);

			binaryTree.insert(11);
			binaryTree.insert(7);
			binaryTree.insert(15);
			binaryTree.insert(5);
			binaryTree.insert(3);
			binaryTree.insert(9);
			binaryTree.insert(100);

			var max = binaryTree.max();
			max.should.equal(100);
		});
	});

	describe('BinarySearchTree -- search() method \n', () => {
		it('should return true when the element exists in the tree \n', () => {
      insertElement(binaryTree);
			var isExists = binaryTree.search(6);
			isExists.should.be.true;
		});

		it('should return false when the element does NOT exist \n', () => {
      insertElement(binaryTree);
			var isExists = binaryTree.search(99999);
			isExists.should.be.false;
		});
	});

	describe('BinarySearchTree -- remove() method \n', () => {
		it('should return the removed node when remove a leaf node \n', () => {
      insertElement(binaryTree);

      var result = binaryTree.remove(3);
      result.should.be.an('object');
      result.key.should.equal(3);

      var isExists = binaryTree.search(3);
      isExists.should.be.false;

      var inOrderTraverseResult = binaryTree.inOrderTraverse();
      inOrderTraverseResult.should.be.an('array');
      inOrderTraverseResult.should.have.length(14);
      inOrderTraverseResult[0].should.equal(5);
      inOrderTraverseResult[13].should.equal(25);

      var result = binaryTree.remove(10);
      result.should.be.an('object');
      result.key.should.equal(10);

      var isExists = binaryTree.search(10);
      isExists.should.be.false;

      var inOrderTraverseResult = binaryTree.inOrderTraverse();
      inOrderTraverseResult.should.be.an('array');
      inOrderTraverseResult.should.have.length(13);
      inOrderTraverseResult[0].should.equal(5);
      inOrderTraverseResult[12].should.equal(25);
		});


    it('shoud return the removed node when remove a node which contains one child', () => {
      insertElement(binaryTree);

      binaryTree.remove(3);
      var result = binaryTree.remove(5);
      result.should.be.an('object');
      result.key.should.equal(5);

      var isExists = binaryTree.search(5);
      isExists.should.be.false;

      var inOrderTraverseResult = binaryTree.inOrderTraverse();
      inOrderTraverseResult.should.be.an('array');
      inOrderTraverseResult.should.have.length(13);
      inOrderTraverseResult[0].should.equal(6);
      inOrderTraverseResult[12].should.equal(25);


      binaryTree.remove(8);
      var result = binaryTree.remove(9);
      result.should.be.an('object');
      result.key.should.equal(9);

      var isExists = binaryTree.search(9);
      isExists.should.be.false;

      var inOrderTraverseResult = binaryTree.inOrderTraverse();
      inOrderTraverseResult.should.be.an('array');
      inOrderTraverseResult.should.have.length(11);
      inOrderTraverseResult[0].should.equal(6);
      inOrderTraverseResult[10].should.equal(25);


    });

	});
});

function insertElement(binaryTree) {
	// body...
	binaryTree.insert(11);
	binaryTree.insert(7);
	binaryTree.insert(15);
	binaryTree.insert(5);
	binaryTree.insert(3);
	binaryTree.insert(9);
	binaryTree.insert(8);
	binaryTree.insert(10);
	binaryTree.insert(13);
	binaryTree.insert(12);
	binaryTree.insert(14);
	binaryTree.insert(20);
	binaryTree.insert(18);
	binaryTree.insert(25);
	binaryTree.insert(6);
}