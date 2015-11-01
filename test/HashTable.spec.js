'use strict';
const should = require('chai').should();
const expect = require('chai').expect;
const HashTable = require('../DataStructure/HashTable');
const commonTest = require('./common.spec');

describe.only('DataStructure -- HashTable', () => {
  commonTest(HashTable, ['remove', 'get', 'put']);

  var table;
  beforeEach( () => {
    table = new HashTable();
  });

  describe('HashTabel -- put(key, value) methods \n', () => {
    it('should put value correctly \n', () => {

    }) ;
  });

});
