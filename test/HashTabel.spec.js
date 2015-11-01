'use strict';
import { expect } from 'chai';
import { should } from 'chai';
import HashTable from '../DataStructure/HashTable';

import commonTest from './common.spec';

describe.only('DataStructure -- HashTable: \n', () => {
  commonTest(HashTable, []);

  var table;
  beforeEach( () => {
    table = new HashTable();
  });


});