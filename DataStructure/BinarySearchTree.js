'use strict';

/**
 * @class: Tree --> Nonsequential DataStructure --> Hierachical Structure
 *     - Root, a node does NOT have parent
 *     - The depth of one node means the number of its ancestor is
 * @param: {}
 */
function BinarySearchTree() {
  var __root = null;

  this.insert = function (key) {
    if( __root === null) {
      __root = new __Node(key);
      return true;
    }


  };

  this.search = function (key) {

  };

  this.inOrderTraverse = function () {
    // body...
  };

  this.preOrderTraverse = function () {
    // body...
  };

  this.postOrderTraverse = function () {
    // body...
  };

  this.min = function () {
    // body...
  };

  this.max = function () {
    // body...
  };

  this.remove = function (key) {

  };

  this.getRoot= function () {
    return __root;
  };

  function __staticInsertNode(currentNode, insertNode) {
    if (currentNode.key < insertNode.key) {

    } else {

    }
  }

  function __Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

module.exports = BinarySearchTree;