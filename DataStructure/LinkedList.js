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

	/**
	 * @param: {Integer : position}
	 * @return: {Object}, removed object
	 */
  this.removeAt = (position) => {
    if( position < 0 || position >= _length) {
      return new Error('Invalid Input..');
    }

    let current = _head;
    let previous = _head;
    let index = 0;
    let returnNode;

    if (position === 0){
      returnNode = Object.create(_head);
      _head = current.next;
      current = current.next;
      _length--;
      return returnNode;
    }

    while(index < position){
      index++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    _length--;
    return Object.create(current);

  };

	/**
	 * @param: {Integer : position}
	 * @param: {Gneric: element}
	 * @return: {boolean}, whether successed or failed
	 */
	this.insert = (position, element) => {
		if(position < 0 || position > _length){
			return new Error('invalid input...');
		}

		var insertNode = new _Node(element);

		//When the list is empty
		if (_head === null){
			_head = insertNode;
			_length++;
			return true;
		}

		//When the insert position is 0
		if (_head !== null && position === 0){
			insertNode.next = _head;
			_head = insertNode;
			_length++;
			return true;
		}

		var insertPreviousPosition = _head;
		var insertNextPosition = _head.next;
		//After this loop, previous pointer will point the positoin where to insert
		for (var i = 0; i < position - 1; i++) {
			insertPreviousPosition = insertPreviousPosition.next;
			insertNextPosition = insertNextPosition.next;
		}
		//Actually, what insert() do is changing the pointer previous.next --> current
		// to previous.next --> insertNode, insertNode.next --> current
		insertPreviousPosition.next = insertNode;
		insertNode.next = insertNextPosition;
		_length++;

		return true;
	};











  //Only used in test
  this.testMethod = () => {
    return { length : _length, head : _head};
  };
}

module.exports = LinkedList;