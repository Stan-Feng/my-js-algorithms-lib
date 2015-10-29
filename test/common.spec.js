import { should } from 'chai';
import { expect } from 'chai';
import LinkedList from '../DataStructure/LinkedList';

/**
 * @todo: Make a common test for all DataStructure
 * @param: {class} target
 */
let commonTest = (data_structure) => {
  let methods = [];
  let getType = type =>  typeof type; ;

  for (let attr in data_structure) {
    if (data_structure.hasOwnProperty(attr) && (typeof data_structure.attr === 'function')) {
      methods.push(attr);
    }

  }
  console.log(methods);
  console.log(getType(data_structure.size));
};


describe('This DataStructure should create brand new objects', ()=> {
  it('should return co', () => {
    commonTest(new LinkedList());

  });
});