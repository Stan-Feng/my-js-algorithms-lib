'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const commonTest = require('./common.spec');
const AVLTree= require('../DataStructure/AVLTree');

describe.only('DataStructure -- AVL Tree: \n', () => {
  commonTest(AVLTree, []);

  var tree;
  beforeEach(() => {
    tree = new AVLTree();
  });

  
});
