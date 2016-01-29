/**
 * The Decrease & Conquer idea in Insertion Sort is this algorithm considers
 * a part of input array is sorted. It will insert the element to the appropriate position
 */

export const InsertionSort = (function () {
  var _arr;

  return function InsertionSort (arr) {
    if (arr.length === 1 || arr.length === 0) {
      return arr;
    }
    _arr = arr;

    // Assume the left-side is sorted
    console.log('Passing Arr: ', _arr);

    for (var i = 0; i < _arr.length; i++) {
      let tmp = _arr[i];
      for (var j = i - 1; j >= 0 && (_arr[j] > tmp); j--) {
        _arr[j+1] = _arr[j];
      }
      _arr[j+1] = tmp;
    }

    return _arr;
  };
}());
