/**
 * Input: An array A[0...n-1] of orderable elements
 * Output: A sorted array A[0...n-1] in increasing order
 *  for i <-- 0 to n-2 do
 *    for j <-- 0 to n-2-i do
 *      if A[j+1] < A[j] swap A[j] and A[j+1]
 */
'use strict';
export default BubbleSort;

function BubbleSort(arr) {
  if(!Array.isArray(arr)){
    return new Error('Invalid Input.');
  }

  if(arr.length === 0 || arr.length === 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j+1] < arr[j]) {
        __swap(j, j+1);
      }
    }
  }

  return arr;

  function __swap(index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

