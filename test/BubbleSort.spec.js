import chai from 'chai';
import BubbleSort from '../Algorithms/BruteForce/BubbleSort';

const expect = chai.expect;
const should = chai.should();

describe('BruteForce -- BubbleSort \n', () => {
	var arr;
	beforeEach(() => {
		arr = [];
	});

	describe('BubbleSort -- Parameters \n', () => {
		it('It should import correctly. \n', () => {
			BubbleSort.should.be.a('function');
		});

		it('It should accept one parameter. \n', () => {
			BubbleSort.length.should.equal(1);
		});

		it('It should accept an array as parameter, otherwise throw error. \n', () => {
			var result = BubbleSort('hey');
			result.should.be.an('error');
		});

		it('It should return the input array when it is empty or only contains one element. \n', () => {
			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(0);

			arr.push(1);
			result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(1);
		});

	});

	describe('BubbleSort -- Correctness \n', () => {
		it('It should sort two increasing array correctly. \n', () => {
			arr.push(1);
			arr.push(2);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(2);
			result[0].should.equal(1);
			result[1].should.equal(2);
		});

		it('It should sort decreasing elements array correctly. \n', () => {
			arr.push(2);
			arr.push(1);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(2);
			result[0].should.equal(1);
			result[1].should.equal(2);
		});

		it('It should sort length is odd increasing array correctly. \n', () => {
			arr.push(1);
			arr.push(3);
			arr.push(5);
			arr.push(7);
			arr.push(9);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(5);
			result[0].should.equal(1);
			result[1].should.equal(3);
			result[2].should.equal(5);
			result[3].should.equal(7);
			result[4].should.equal(9);
		});

		it('It should sort length is odd decreasing array correctly. \n', () => {
			arr.push(9);
			arr.push(7);
			arr.push(5);
			arr.push(3);
			arr.push(1);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(5);

			result[0].should.equal(1);
			result[1].should.equal(3);
			result[2].should.equal(5);
			result[3].should.equal(7);
			result[4].should.equal(9);
		});

		it('It should sort length is even increasing array correctly. \n', () => {
			arr.push(2);
			arr.push(4);
			arr.push(6);
			arr.push(8);
			arr.push(10);
			arr.push(12);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(6);

			result[0].should.equal(2);
			result[1].should.equal(4);
			result[2].should.equal(6);
			result[3].should.equal(8);
			result[4].should.equal(10);
			result[5].should.equal(12);
		});

		it('It should sort length is even decreaasing array correctly. \n', () => {
			arr.push(12);
			arr.push(10);
			arr.push(8);
			arr.push(6);
			arr.push(4);
			arr.push(2);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(6);

			result[0].should.equal(2);
			result[1].should.equal(4);
			result[2].should.equal(6);
			result[3].should.equal(8);
			result[4].should.equal(10);
			result[5].should.equal(12);
		});

		it('It should sort length is even random order array correctly. \n', () => {
			arr.push(3);
			arr.push(2);
			arr.push(7);
			arr.push(4);
			arr.push(0);
			arr.push(9);
			arr.push(12);
			arr.push(7);

			var result = BubbleSort(arr);
			result.should.be.an('array');
			result.length.should.equal(8);

      result[0].should.equal(0);
      result[1].should.equal(2);
      result[2].should.equal(3);
      result[3].should.equal(4);
      result[4].should.equal(7);
      result[5].should.equal(7);
      result[6].should.equal(9);
      result[7].should.equal(12);
		});

    it('It should sort example from book correctly. \n', () => {
      arr.push(89);
      arr.push(45);
      arr.push(68);
      arr.push(90);
      arr.push(29);
      arr.push(34);
      arr.push(17);

      var result = BubbleSort(arr);
      result.should.be.an('array');
      result.length.should.equal(7);

      result[0].should.equal(17);
      result[1].should.equal(29);
      result[2].should.equal(34);
      result[3].should.equal(45);
      result[4].should.equal(68);
      result[5].should.equal(89);
      result[6].should.equal(90);
    });
	});

});