const should = require('chai').should();
const expect = require('chai').expect;

const MergeSort = require('../Algorithms/MergeSort');


describe('Algorithm -- MergeSort \n', () => {
	var unsortedArr;
	beforeEach(() => {
		unsortedArr = [];
	});

	it('It should be imported for testing correctly. \n', () => {
		MergeSort.should.be.a('function');
	});

	describe('Parameters -- Sort Array. \n', () => {
		it('It should expect one arguments. \n', () => {
			MergeSort.length.should.be.a('number');
			MergeSort.length.should.equal(1);
		});

		it('It should return error when passed in an invalid parameter \n', () => {
			var result = MergeSort(2);
			result.should.be.an('error');
		});

		it('It should return error when pass 0 parameter in. \n', () => {
			var result = MergeSort();
			result.should.be.an('error');
		});

		it('It should return one length array as base case \n', () => {
			var result = MergeSort([1]);
			result.should.be.an('array');
			result.should.have.length(1);
		});
	});

	describe('Bondary Situation: \n', () => {
		it('It should return an empty array when it is given an empty array. \n', () => {
			var result = MergeSort([]);
			result.should.be.an('array');
			result.should.have.length(0);
		});
	});

	describe('Mock sorting situation:  \n', () => {
		it('It should sort odd number elements of array correctly \n', () => {
			unsortedArr = [5, 4, 3, 2, 1];
			MergeSort(unsortedArr);

			unsortedArr.should.have.length(5);
			unsortedArr[0].should.equal(1);
			unsortedArr[1].should.equal(2);
			unsortedArr[2].should.equal(3);
			unsortedArr[3].should.equal(4);
			unsortedArr[4].should.equal(5);
		});

		it('It should sort even number elements of array correctly \n', () => {
			unsortedArr = [6, 5, 4, 3, 2, 1];
			MergeSort(unsortedArr);

			unsortedArr.should.have.length(6);
			unsortedArr[0].should.equal(1);
			unsortedArr[1].should.equal(2);
			unsortedArr[2].should.equal(3);
			unsortedArr[3].should.equal(4);
			unsortedArr[4].should.equal(5);
			unsortedArr[5].should.equal(6);
		});

		it('It should sort an array the smallest item in the end while'
          +' biggiest item in the head. \n', () => {
			unsortedArr = [422, 18, 9, 321, 2];
      MergeSort(unsortedArr);

      unsortedArr.should.have.length(5);
			unsortedArr[0].should.equal(2);
			unsortedArr[1].should.equal(9);
			unsortedArr[2].should.equal(18);
			unsortedArr[3].should.equal(321);
			unsortedArr[4].should.equal(422);
		});
	});

});