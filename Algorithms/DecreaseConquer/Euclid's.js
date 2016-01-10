'use strict';

export default gcd;

function gcd (largeInt, smallInt) {
  if(largeInt < smallInt) {
    return new Error('Invalid Input Parameters.');
  }
  else if(largeInt === undefined || smallInt === undefined) {
    return new Error('Not enough parameters passed in.');
  }
  else if(smallInt === 0) {
    return largeInt;
  }

  let modResult = largeInt % smallInt;
  if(modResult === 0) {
    return smallInt;
  }

  return gcd(smallInt, modResult);
}