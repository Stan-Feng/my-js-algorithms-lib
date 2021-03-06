/**
 * @class: Set --> A collection of items that are unordered and consists of
 *  unique elements
 * @method: add(item) --> Add new item into set
 * @method: remove(item) --> Remove the item of the set
 * @method: has(item) --> Return true or false whether this item exists
 * @method: clear() --> Clear all items
 * @method: size() --> return the size of Set
 * @method: values() --> return an array contains all items
 */

export default function Set() {
	let _items = {};
	let _size = 0;

	this.add = function (item) {
		if (this.has(item)){
			return {
				isSuccess: false,
				reason: 'Element already exists.'
			};
		}
				_items[item] = item;
		_size++;
		return {
			isSuccess: true,
			reason: null
		};
	};


	this.remove = function (item) {
		if (!this.has(item))
			return {
				isSuccess: false,
				reason: 'Element does not exists.'
			};

		let removedItem = _items[item];
		_size--;
		_items[item] = undefined;
		return removedItem;
	};

	this.has = function (item) {
		return _items.hasOwnProperty(item) && _items[item] !== undefined;
	};

	this.clear = function () {
		_items = {};
	};

	this.size = function () {
		return _size;
	};

	this.values = function () {
		if (_size === 0) {
			return [];
		}

		let arr = [];
		for (let attr in _items) {
			if (_items.hasOwnProperty(attr)) {
				arr.push(_items[attr]);
			}
		}
		return arr;
	};
}

//Set Operations:
Set.prototype.union = function (otherSet) {
	if (!(otherSet instanceof Set)) {
		return {
			isSuccess: false,
			reason: 'invalid input.'
		};
	}

	let unionSet = new Set();

	this.values().map(item => {
		unionSet.add(item);
	});

	otherSet.values().map(item => {
		unionSet.add(item);
	});

	return unionSet;
};

Set.prototype.intersection = function (otherSet) {
	if (!(otherSet instanceof Set)) {
		return {
			isSuccess: false,
			reason: 'invalid input.'
		};
	}

	let instersectedSet = new Set();

	this.values().map(item => {
		if (otherSet.has(item)) {
			instersectedSet.add(item);
		}
	});

	return instersectedSet;
};


Set.prototype.difference = function (otherSet) {
	//@TODO: Return the difference of this set from otherSet
	if (!(otherSet instanceof Set)) {
		return {
			isSuccess: false,
			reason: 'invalid input.'
		};
	}

  let diffSet = new Set();

  this.values().map(item => {
    if(!otherSet.has(item)){
      diffSet.add(item);
    }
  });

  return diffSet;
};

Set.prototype.subset = function (otherSet) {
	//return whether this set is subset of otherSet
	if (!(otherSet instanceof Set)) {
		return {
			isSuccess: false,
			reason: 'invalid input.'
		};
	}

	this.values().map(item => {
		if(!otherSet.has(item)){
			return false;
		}
	});

	return true;
};

module.exports = Set;