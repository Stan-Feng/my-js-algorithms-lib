'use strict';

function Dictionary() {
  var _items = {};
  var _size = 0;

  this.set = (key, value) => {
    //Add new value or update value
    _items[key] = value;
    _size++;
  };

  this.remove = (key) => {

  };

  this.has = (key) => {
    return key in _items;
  };

  this.get = (key) => {

  };

  this.keys = () => {

  };

  this.values = () => {

  };

  this.clear = () => {
      _items = {};
  };

  this.size = () => {
    return _size;
  };

}


module.exports = Dictionary;