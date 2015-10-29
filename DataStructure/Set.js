/**
 * @class: Set --> A collection of items that are unordered and consists of
 *  unique elements
 * @method: add(item) --> Add new item into set
 * @method: remove(item) --> Remove the item of the set
 * @method: has(item) --> Return true or false whether this item exists
 * @method: clear() --> Clear all items
 * @method: size() --> return the size of Set
 * @method: values() --> return an array contains all items
 */

function Set(){
  let _items = {};
  let _size = 0;

  this.add = function(item){
    if(this.has(item))
      return { isSuccess: false, reason: 'Element already exists.' };

    _items[item] = item;
    _size++;
    return {isSuccess: true, reason: null};
  };


  this.remove = function(item){
    if(this.has(item))
      return { isSuccess: false, reason: 'Element does not exists.' };

    _size--;
    _items[item] = undefined;
  };

  this.has = function(item){
    return _items.hasOwnProperty(item) || _items[item] !== undefined;
  };

  this.clear = function(){

  };

  this.size = function(){
    return _size;
  };

  this.values = function(){

  };


}

export default Set;