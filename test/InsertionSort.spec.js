import chai from 'chai';
import { InsertionSort } from '../Algorithms/DecreaseConquer/InsertionSort.js';
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

    it('It should sort even number of elements in random order corretcly. \n', () => {
      arr.push(3);
      arr.push(1);
      arr.push(7);
      arr.push(4);
      arr.push(9);

      var result = InsertionSort(arr);
      result[0].should.equal(1);
      result[1].should.equal(3);
      result[2].should.equal(4);
      result[3].should.equal(7);
      result[4].should.equal(9);
    });

    it('It should sort odd number of elements in random order corretcly. \n', () => {
      arr.push(6);
      arr.push(2);
      arr.push(0);
      arr.push(9);
      arr.push(12);
      arr.push(1);
      arr.push(11);
      arr.push(7);

      var result = InsertionSort(arr);
      result[0].should.equal(0);
      result[1].should.equal(1);
      result[2].should.equal(2);
      result[3].should.equal(6);
      result[4].should.equal(7);
      result[5].should.equal(9);
      result[6].should.equal(11);
      result[7].should.equal(12);
    });
  });
});
