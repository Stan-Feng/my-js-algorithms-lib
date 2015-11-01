'use strict';

function HashTable(hashFunc) {
  var _table = [];
  var _size = 0;
  var _hashFunc = hashFunc || loseloseHashCode;


  this.put = (key, value) => {
    table[_hashFunc(key)] = value;
    _size++;
  };

  this.remove = (key) => {
    delete table[_hashFunc(key)];
    _size--;
  };

  this.get = (key) => {
    return table[_hashFunc(key)];
  };


  function loseloseHashCode(key) {
    var hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charAt(i);
    }

    return hash % 37;
  }
}

module.exports = HashTable;