'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const commonTest = require('./common.spec');
const AVLTree= require('../DataStructure/AVLTree');

describe.only('DataStructure -- AVL Tree: \n', () => {
  commonTest(AVLTree, ['search', 'traversal', 'insert', 'delete']);

  var tree;
  beforeEach(() => {
    tree = new AVLTree();
  });

  describe('AVL Tree -- insert(key) method \n', () => {
    it('should insert a key to root node when tree is empty \n', () => {
      tree.insert(2);

      var result = tree.getRoot();
      result.should.be.an('object');
      result.should.have.property('key');
      result.should.have.property('left');
      result.should.have.property('right');
      result.key.should.equal(2);
    });

    it('should insert small key on the left, large key on the right \n', () =>{
      tree.insert(2);
      tree.insert(1);
      tree.insert(3);

      var root = tree.getRoot();
      root.left.key.should.equal(1);
      root.right.key.should.equal(3);
    });

    it('should insert node recursively \n', () => {

    });

  });

});
