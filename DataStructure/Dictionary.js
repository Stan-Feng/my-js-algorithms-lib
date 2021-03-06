'use strict';

export default function Dictionary() {
  var _items = {};
  var _size = 0;

  this.set = (key, value) => {
    //Add new value or update value
    _items[key] = value;
    _size++;
  };


  this.remove = (key) => {
    if(!this.has(key)){
      return {
        error: new Error('Key does not exist.'),
        key: key
      };
    }

    //Delete Keyword: http://buildnewgames.com/garbage-collector-friendly-code/
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
    var returnedObject = {};
    returnedObject[key] = _items[key];

    delete _items[key];
    _size--;

    return returnedObject;
  };


  this.has = (key) => {
    return key in _items;
  };

  this.get = (key) => {
    if(!this.has(key)){
      return {
        error: new Error('Key does not exist.'),
        key: key
      };
    }

    return _items[key];
  };

  this.keys = () => {
    var keys = [];

    for (let variable in _items) {
      if (_items.hasOwnProperty(variable)) {
        keys.push(variable);
      }
    }

    return keys;
  };

  this.values = () => {
    var values = [];
    for (let variable in _items) {
      if (_items.hasOwnProperty(variable)) {
          values.push(_items[variable]);
        }
    }

    return values;
  };

  this.clear = () => {
      _items = {};
  };

  this.size = () => {
    return _size;
  };

}


