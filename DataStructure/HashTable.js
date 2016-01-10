'use strict';
import LinkedList from './LinkedList';

export default function Hash_table(hashFunc) {
  var _table = [];
  var _hashFunc = hashFunc || loseloseHashCode;


  this.put = (key, value) => {
    var position = _hashFunc(key);

    if(_table[position] === undefined){
      _table[position] = new LinkedList;
    }

    _table[position].append(new ValuePair(key, value));
  };

  this.remove = (key) => {
    var position = _hashFunc(key);

    if(_table[position] !== undefined){
      var currentNode = _table[position].getHead();

      while (currentNode.next){
        if(currentNode.element.key === key){
          _table[position].remove(currentNode.element);
        }

        if(_table[position].isEmpty()){
          _table[position] = undefined;
        }

        currentNode = currentNode.next;
      }

      //Check in case of first of last element
      if(currentNode.element.key === key) {
        _table[position].remove(currentNode.element);

        if(_table[position].isEmpty()){
          _table[position] = undefined;
        }

        return true;
      }

      return false;
    }
  };

  this.get = (key) => {
    var position = _hashFunc(key);

    if(_table[position] !== undefined){
        let currentNode = _table[position].getHead();
        let allNodes = [];

        while (currentNode.next) {
          if (currentNode.element.key === key){
            allNodes.push(currentNode.element.value);
          }
          currentNode = currentNode.next;
        }

        //Check start position or last position
        if(currentNode.element.key === key){
          allNodes.push(currentNode.element.value);
        }

        return allNodes;
    }

    return undefined;
  };

  this.getAllItems = () => {
    var items = [];
    for (let variable in _table) {
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
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }
}

