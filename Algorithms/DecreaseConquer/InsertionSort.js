/**
 * The Decrease & Conquer idea in Insertion Sort is this algorithm considers
 * a part of input array is sorted. It will insert the element to the appropriate position
 */

export const InsertionSort = (function() {
  var _arr;

  return function InsertionSort(arr) {

    if(arr.length === 1 || arr.length === 0) {
      return arr;
    }
    _arr = arr;

    //Assume the left-side is sorted
    for (let electI = 0; electI < _arr.length - 1; electI++) {
      for (let checkI = electI + 1; checkI < _arr.length; checkI++) {

        if(_arr[electI] > _arr[checkI]) {

          //Insert _arr[electI] in front of _arr[checkI]
          _insert(electI, checkI);
        }
      }
    }

    return _arr;
  };

  function _insert(elementI, insertedI) {
    const copyArr = _arr.slice(0);

    _arr[insertedI-1] = copyArr[elementI+1];
    for (let i = insertedI; i < _arr.length; i++) {
      _arr[i] = copyArr[i-1];
    }
  }

}());

