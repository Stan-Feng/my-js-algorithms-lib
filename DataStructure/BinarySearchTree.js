'use strict';

/**
 * @class: Tree --> Nonsequential DataStructure --> Hierachical Structure
 *     - Root, a node does NOT have parent
 *     - The depth of one node means the number of its ancestor is
 * @param: {}
 */
function BinarySearchTree() {
	var __root = null;
	var __Node = function (key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};


	this.insert = function (key) {
		if (__root === null) {
			__root = new __Node(key);
			return true;
		}

		__static__InsertNode(__root, new __Node(key));
	};


	//Another kind of patter do recursive by its own instead of writing a static method
	this.search = function searchHelp(key, node=__root) {
		if (node === null) {
			return false;
		}

		if (key < node.key) {
			return searchHelp(key, node.left);
		} else if (key > node.key) {
			return searchHelp(key, node.right);
		} else {
			return true;
		}
	};


	this.inOrderTraverse = function () {
		var keys = [];

		__static__inOrderTraverseNode(__root, (key) => {
			keys.push(key);
		});

		return keys;
	};


	this.preOrderTraverse = function () {
		var keys = [];

		__static__preOrderTraverseNode(__root, (key) => {
			keys.push(key);
		});

		return keys;
	};


	this.postOrderTraverse = function () {
		var keys = [];

		__static__postOrderTraverseNode(__root, (key) => {
			keys.push(key);
		});

		return keys;
	};

	this.min = function () {
		return __static__searchMinNode(__root);
	};

	this.max = function () {
		return __static__searchMaxNode(__root);
	};

	this.remove = function removeHelp(key, node=__root, parentNode) {
    if(node === null){
      return null;
    }

    if (key < node.key) {
      //Go left
      return removeHelp(key, node.left, node);
    }
    else if (key > node.key){
      //Go right
      return removeHelp(key, node.right, node);
    }
    else {
      //Removed node has been found
      //Judege the removing situation
      if(node.left === null && node.right === null){ // Leaf
        let tempNode = Object.create(node);
        if(node.key < parentNode.key){
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
        return tempNode;
      }
      else if(node.right !== null || node.left !== null){
         // 1 right child
         let direction = (node.key < parentNode.key) ? 'left' : 'right';
         let tempNode = Object.create(node);
         parentNode[direction] = node.right;
         return tempNode;
      }
      else {
        // 2 children

      }

    }
	};

	this.getRoot = function () {
		return __root;
	};


	function __static__InsertNode(currentNode, insertNode) {
		if (currentNode.key > insertNode.key) {
			if (currentNode.left === null) {
				currentNode.left = insertNode;
				return true;
			}
			//Go left
			__static__InsertNode(currentNode.left, insertNode);

		} else {
			if (currentNode.right === null) {
				currentNode.right = insertNode;
				return true;
			}
			//Go right
			__static__InsertNode(currentNode.right, insertNode);
		}
	}

	function __static__inOrderTraverseNode(node, callback) {
		if (node !== null) {
			__static__inOrderTraverseNode(node.left, callback);
			callback(node.key);
			__static__inOrderTraverseNode(node.right, callback);
		}
	}

	function __static__preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key);
			__static__preOrderTraverseNode(node.left, callback);
			__static__preOrderTraverseNode(node.right, callback);
		}
	}

	function __static__postOrderTraverseNode(node, callback) {
		__static__postOrderTraverseNode(node.left, callback);
		__static__postOrderTraverseNode(node.right, callback);
		callback(node.key);
	}


	function __static__searchMinNode(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.left;
			}
			return node.key;
		}
		return null;
	}

	function __static__searchMaxNode(node) {
		if (node) {
			while (node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

}

module.exports = BinarySearchTree;