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

    __static__InsertNode(__root, new __Node(key));
  };

  this.search = function (key) {

  };

  this.inOrderTraverse = function () {
    var keys = [];

    __static__TraverseNode(__root, (key) => {
      keys.push(key);
    });

    return keys;
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

  function __static__TraverseNode(node, callback) {
    if(node !== null) {
      __static__TraverseNode(node.left, callback);
      callback(node.key);
      __static__TraverseNode(node.right, callback);
    }
  }

  function __static__InsertNode(currentNode, insertNode) {
    if (currentNode.key > insertNode.key) {
      if (currentNode.left === null) {
        currentNode.left = insertNode;
        return true;
      }
      //Go left
      __static__InsertNode(currentNode.left, insertNode);

    } else {
      if(currentNode.right === null) {
        currentNode.right = insertNode;
        return true;
      }
      //Go right
      __static__InsertNode(currentNode.right, insertNode);
    }
  }

  function __Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

module.exports = BinarySearchTree;