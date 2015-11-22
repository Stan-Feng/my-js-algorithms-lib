'use strict';
let Algorithms = require('../Algorithms');
/**
 * @type: Divider & Conquer
 * @analysis:
 */

function MergeSort(unsortedArr) {
	if(arguments.length !== 1 ||
			!Array.isArray(unsortedArr)) return new Error("invalid parameters");

	if(unsortedArr.length < 2) return unsortedArr;

  //Init State, no splitedArr passed in

  //Base case: the sub array size only is 1 or 0

}


/**
 * Merge two arrays into one array in order
 * @param: {array}
 * @param: {array}
 * @return: {array}
 */
function merge(arr1, arr2) {

	return arr;
}

module.exports = MergeSort;