
/**
 * @todo: convert decimal number to binary number
 * @param: {number} decimal
 * @param: {Stack} stack
 * @return: {String}
 */


var stack = require('../Stack')();

function convert(decimal, stack){
    if(decimal === 0) return popAll(stack);
    stack.push(decimal % 2);
    decimal = parseInt(decimal / 2);
    return convert(decimal, stack);
};

function popAll(stack){
    var binaryString = "";
    while(!stack.isEmpty()){
        binaryString += stack.pop().toString();
    }
    return binaryString;
}

var decimal = 189;
var binary = convert(decimal, stack);
console.log('Convert ' + decimal + ' to binary '+ binary);




