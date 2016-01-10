import chai from 'chai';
import {InsertionSort} from '../Algorithms/DecreaseConquer/InsertionSort.js';

const should = chai.should();

describe.only('DecreaseConquer -- InsertionSort: \n', () => {
  describe('Nonfunctional Test Cases \n', () => {
    it('It should export correctly. \n', () => {
      InsertionSort.should.be.a('function');
    });

    it('It should accept only one parameter. \n', () => {
      InsertionSort.length.should.equal(1);
    });

  });

  describe('Functional Test Cases', () => {
    var arr;
    beforeEach(() => {
      arr = [];
    });

    it('It should sort two elements increasing array corretcly. \n', () =>{
      arr.push(1);
      arr.push(2);

      var result = InsertionSort(arr);
      result.should.be.an('array');
      result.should.have.length(2);
      result[0].should.equal(1);
      result[1].should.equal(2);
    });

    it('It should sort two elements decreasing array corretcly. \n', () =>{
      arr.push(2);
      arr.push(1);

      var result = InsertionSort(arr);
      result.should.be.an('array');
      result.should.have.length(2);
      result[0].should.equal(1);
      result[1].should.equal(2);
    });

    
  });
});