'use strict';
let LinkedList = require('./LinkedList');

function HashTable(hashFunc) {
  var _table = [];
  var _hashFunc = hashFunc || loseloseHashCode;


  this.put = (key, value) => {
    var position = _hashFunc(key);
    if(table[position] === undefined){
      table[position] = new LinkedList;
    }

    table[position].append(new ValuePair(key, value));
  };

  this.remove = (key) => {
    var position = _hashFunc(key);

    if(table[position] !== undefined){
      var currentNode = table[position].getHead();

      while (currentNode.next){
        if(currentNode.element.key === key){
          table[position].remove(currentNode.element);
        }

        if(table[position].isEmpty()){
          table[position] = undefined;
        }

        currentNode = currentNode.next;
      }

      //Check in case of first of last element
      if(currentNode.element.key === key) {
        table[position].remove(currentNode.element);

        if(table[position].isEmpty()){
          table[position] = undefined;
        }

        return true;
      }

      return false;
    }

    delete table[_hashFunc(key)];
  };

  this.get = (key) => {
    var position = _hashFunc(key);

    if(table[position] !== undefined){
        var currentNode = table[position].getHead();

        while (currentNode.next) {
          if (currentNode.element.key === key){
            return currentNode.element.value;
          }
          currentNode = currentNode.next;
        }

        //Check start position or last position
        if(currentNode.element.key === key){
          return currentNode.element.value;
        }
    }

    return undefined;
  };

  this.getAllItems = () => {
    var items = [];

    for (var variable in _table) {
      if (_table.hasOwnProperty(variable)) {
        items.push(_table[variable]);
      }
    }

    return items;
  };


  function ValuePair(key, value) {
    this.key = key;
    this.value = value;
  }

  function loseloseHashCode(key) {
    var hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charAt(i);
    }

    return hash % 37;
  }
}

module.exports = HashTable;