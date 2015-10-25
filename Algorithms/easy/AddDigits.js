/**
 * Given an non-negative integer 'num', repeatedly add all its digits untill the result has only one digit.
 * For Examples:
 *  Given num = 38, the process like: 3+8=11, 1+1=2. Since 2 has only one digit, return it.
 *
 * Follow up:
 *  Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * A normal way to solve this problem
 * @param {number} num
 * @return {number}
 * @accepted
 * @url: https://leetcode.com/submissions/detail/42532932/
 */

var addDigits = function addNextDigit(num){

  console.log('The input number is ' + num);

  if(num < 10)  return num;

  num = num.toString();
  //TODO: add all digits sum
  
  var sum = 0;
  for(var i = 0; i < num.length; i++){
    sum += parseInt(num.charAt(i));
  }
  
  return addNextDigit(sum);
};


/**
 * A more efficient way to solve this problem --> O(1) runtime
 * @name: Digital Root Theory
 * @url: https://leetcode.com/submissions/detail/42544032/
 */

var digitalRoots = function(num){
  var sum = 0;
  var digits = num.toString();

  for(var i = 0; i < digits.length; i++){
    sum += parseInt(digits.charAt(i));
    if (sum >= 10) sum -= 9;
  }

  return sum;
}


console.log(digitalRoots(19));

