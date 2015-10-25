'use strict';
/**
 * @class: LinkedList
 * @private: {class} Node
 * @private: {number} length
 * @private: {object} head
 * @method: append (element) --> append a new node in the end of list
 * @method: insert (position, element) --> Insert a new element at the specified position
 * @method: removeAt (position) --> Removes an item from specified position
 * @method: remove (element) -->  Removes an item from list
 * @method: indexOf (element) --> Return the index of input element
 * @method: isEmpty --> Return whether list is empty
 * @method: size --> Return the size of list
 * @method: toString --> Return all element values
 *
 * @createdAt: Thu Oct 15 2015 15:24:53 GMT+0800 (CST)
 * @finiedAt:
 */

function LinkedList() {
	class _Node {
		constructor(element) {
			this.element = element;
			this.next = null;
		}
	}



	let _length = 0;
	let _head = null;

	this.append = (element) => {
    let node = new _Node(element);
    let current;

		if (_head === null){
      _head = node;
    }
		else {
      current = _head;
      while(current.next)
        current = current.next;
      current.next = node;
    }

    _length++;
	};

  this.removeAt = (position) => {
    if( position < 1 || position > _length) {
      return new Error('Invalid Input..');
    }

    let current = head;
    let previous = head;
    let index = 0;

    if (position === 0){
      let returnNode = Object.create(head);
      head = current.next;
      current = current.next;
      return returnNode;
    }

    while(index <= position){
      index++;
      previous = current;
      current = current.next;
    }




  };











  //Only used in test
  this.testMethod = () => {
    return { length : _length, head : _head};
  };
}

module.exports = LinkedList;