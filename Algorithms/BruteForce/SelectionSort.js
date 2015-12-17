/**
  * Input: An array A[0...n-1] of orderable elements
  * Output: An array A[0...n-1] sorted in nondecreasing order
  * for i <-- 0 to n-2 do
  *   min <-- i
  *   for j <-- i+1 to n-1 do
  *     if A[j] < A[min]  min <-- j
  *   swap A[i] and A [min]
  */

'use strict';
export default SelectionSort;

function SelectionSort(arr) {
  if(!Array.isArray(arr)) {
    return new Error('Invalid input.');
  }

  if(arr.length === 1 || arr.length === 0) {
    return arr;
  }

  for (let i = 0, j, min; i < arr.length - 1; i += 1) {
    for(min = i, j = i + 1; j < arr.length; j += 1) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    __swap(i, min);
  }

  return arr;

  function __swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

