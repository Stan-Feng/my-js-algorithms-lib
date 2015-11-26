'use strict';
/**
 * MERGE-SORT(A):
 * If A has fewer than 2 elements:
 * Return A
 * L ← MERGE-SORT(First half of A)
 * U ← MERGE-SORT(Second half of A)
 * Return MERGE(L, U)
 *
 * @type: Divider & Conquer
 */

function MergeSort(unsortedArr, startIndex, endIndex) {
	if (arguments.length !== 1 ||
		!Array.isArray(unsortedArr)) return new Error("invalid parameters");

	startIndex = startIndex || 0;
	endIndex = endIndex || unsortedArr.length;
	var midIndex = Math.floor((startIndex + endIndex) / 2);

	if (unsortedArr.length < 2) return unsortedArr;  //Base Case

	MergeSort(unsortedArr, startIndex, midIndex);
	MergeSort(unsortedArr, midIndex + 1, endIndex);

}


/**
 * Merge two arrays into one array in order
 * @param: {array} -- unsortedArr: the whole unsorted array
 * @param: {number} -- startIndex: the start index of merge
 * @param: {number} -- midIndex: the mid index of merge
 * @param: {number} -- endIndex: the end index of merge
 * @return: void
 */
function _merge(unsortedArr, startIndex, midIndex, endIndex) {
	for (var i = startIndex; i < midIndex; i++) {
		for (var j = midIndex; j < endIndex; j++) {
			//If left array element is greater than right one, swap it
			if(unsortedArr[i] > unsortedArr[j]) {
				_swap(unsortedArr, i, j);
			}
			console.log(unsortedArr);
		}
	}
}

function _swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

module.exports = MergeSort;