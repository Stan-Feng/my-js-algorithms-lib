/**
 * The Decrease & Conquer idea in Insertion Sort is this algorithm considers
 * a part of input array is sorted. It will insert the element to the appropriate position
 */

export const InsertionSort = (function () {
  return function InsertionSort (arr) {
    if (arr.length === 1 || arr.length === 0) {
      return arr;
    }

    // Assume the left-side is sorted
    for (let i = 0; i < arr.length; i++) {
      let j = i - 1;
      let tmp = arr[i];

      while (j >= 0 && (arr[j] > tmp)) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = tmp;
    }

    return arr;
  };
}());
