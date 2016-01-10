'use strict';

/**
 * @class: Queue --> First In First Out
 * @param: {array} data(optional)
 * @prop: {array} items
 * @method: enqueue --> Adds a new element
 * @method: dequeue --> Removes and return the first element from the queue
 * @method: font --> Return the first element from the queue but NOT modify
 * @method: isEmpty --> Return boolean whether the queue is empty
 * @method: size --> Return the number of items
 * @method: clear --> Clear the whole queue
 */

export default function Queue(data){
    //Properties and method go here

    var items = [];
    if(data){
        items = data;
    }

    //Manipulating Queue
    this.enqueue = function(item){
        items.push(item);
    };
    this.dequeue = function(){
        return items.length ? items.shift() : null;
    };

    //Additinal help methods
   this.font = function(){
        return items.length ? items[0] : null;
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

}
