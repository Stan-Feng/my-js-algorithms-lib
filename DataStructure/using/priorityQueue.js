'use strict';

/**
 * @class: PriorityQueue
 * @private: {array} _elements
 * @private: {function} _calculatePriority
 * @method: {function} enqueue
 * @author: Stan Feng, Wed Oct 14 2015 19:04:05 GMT+0800 (CST)
 */
export default function PriorityQueue(data) {
  var _elements = [];
  this._testElements = _elements; //Just for test, after test done comment it

	/**
   * @todo: Private method for set priority to element
   * @type: {function}
   * @param: {number} element
   * @return: {object}
   */
	function _calculatePriority(element) {
		var priority;
		if (typeof (element) !== 'number')
			priority= -1;
		else
			priority= Math.floor(Math.abs(element) * Math.abs(element));

		return {
			value: element,
			priority: priority
		};
	}

  /**
   * @param: {number} element
   */
	this.enqueue = function (element) {
		var queueElement = _calculatePriority(element);
		if(queueElement.priority < 0)
			return new Error('Input is not a number..');

		if(_elements.length === 0) {
        _elements.push(queueElement);
		} else {
        var isAdd = false;
        for (var i = 0; i < _elements.length; i++) {
          if(_elements[i].priority >= queueElement.priority){
            //TODO: insert element in the position i
            _elements.splice(i, 0, queueElement);
            isAdd = true;
            break;
          }
        }
        if(!isAdd) _elements.push(queueElement);
		}
	};

  this.dequeue = function () {
    if (_elements.length === 0)
      return new Error('Empty Queue..');
    else
      return _elements.pop();
  };

  //The rest part is the same as normal queue structure.....

}
