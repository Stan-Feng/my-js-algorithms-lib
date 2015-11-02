'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const commonTest = require('./common.spec');
const Tree = require('../DataStructure/BinarySearchTree');


describe.only('DataStructure -- Tree : \n', () => {
  commonTest(Tree, ['insert', 'search', 'inOrderTraverse', 'preOrderTraverse', 'postOrderTraverse',
             'min', 'max', 'remove']);
});

