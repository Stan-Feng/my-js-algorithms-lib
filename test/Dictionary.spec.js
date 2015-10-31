'use strict';
import { expect } from 'chai';
import Dictionary from '../DataStructure/Dictionary';

import commonTest from './common.spec';

describe.only('DataStructure -- Dictionary(Map): \n', () => {
  commonTest(Dictionary, ['size', 'set', 'remove', 'has', 'get',
              'keys', 'values', 'clear']);

});
