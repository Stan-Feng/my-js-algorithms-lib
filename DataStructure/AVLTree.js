'use strict';

function AVLTree() {
  var __root = null;
  var __Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  this.insert = function insertHelper(key, currentNode) {
    if(!__root){
      __root = new __Node(key);
      return true;
    }
    
    currentNode = currentNode || __root;

    if(currentNode.key > key){
      if(currentNode.left === null){
        currentNode.left = new __Node(key);
        return true;
      }
      //Go left
      insertHelper(key, currentNode.left);
    }
    else {
      if(currentNode.right === null){
        console.log(currentNode);
        currentNode.right = new __Node(key);
        return true;
      }
      //Go right
      insertHelper(key, currentNode.right);
    }

    return false;
  };

  this.search = function(key) {

  };

  this.delete = function(key) {

  };

  this.traversal = function() {

  };

  this.getRoot = function() {
    return __root;
  };

}


module.exports = AVLTree;