'use strict';

/**
 * @name: Stack
 * @order: LIFO --> Last In First Out
 */


/**
 * @class: Stack
 * @prop: {array} items
 * @method: push --> Add new item (or servral items) to the top of stack.
 * @method: pop --> Remove the top item from the stack, return the item.
 * @method: peek --> Returns the top element but the stack is not modified.
 * @method: isEmpty --> Returns boolean value whether the stack contain any element.
 * @method: clear --> Removes all the elements of stack.
 * @method: size --> Returns how many elements the stack contains.
 */

export default function Stack(){
  //Private Property
  var items = [];

  //Methods for manipulating stack
  this.push = function(item){
    items.push(item);
  };
  this.pop = function(){
    return items.pop();
  };

  //Additinal helper methods
  this.peek = function(){
    return items[items.length-1];
  };
  this.isEmpty = function(){
    return items.length === 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
};
