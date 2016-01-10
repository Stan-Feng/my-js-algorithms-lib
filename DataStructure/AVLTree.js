'use strict';

function AVLTree() {
	var __root = null;
	var __Node = function (key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

  //Assume before insert the tree is balance
	this.insert = function insertHelper(key, currentNode) {
		if (!__root) {
			__root = new __Node(key);
			return true;
		}

		currentNode = currentNode || __root;

		if (currentNode.key >= key) {
			if (currentNode.left === null) {
				currentNode.left = new __Node(key);

        __static__balanceTree(currentNode);
				return true;
			}
			//Go left
			insertHelper(key, currentNode.left);
		}
    else {
			if (currentNode.right === null) {
				currentNode.right = new __Node(key);

        __static__balanceTree(currentNode);
				return true;
			}
			//Go right
			insertHelper(key, currentNode.right);
		}


		return false;
	};

	this.search = function (key) {

	};

	this.delete = function (key) {

	};

	this.traversal = function () {

	};

	this.getRoot = function () {
		return __root;
	};

}


/**
 * Suppose before insert the tree is balance
 * @param: currentNode --> insert node is under currentNode
 * @return: {boolean} whether the tree has been balanced
 */
AVLTree.prototype.balanceTree = function(currentNode) {
  if(this.checkHeight()){
    return true;
  }

  //TODO: balance the tree


};

/**
 * @return: {boolean} whether the height is correct
 */
AVLTree.prototype.checkHeight = function(){
  var root = this.getRoot();
  var leftHeight = 0;
  var rightHeight = 0;



  return leftHeight === rightHeight;
};


export default AVLTree;