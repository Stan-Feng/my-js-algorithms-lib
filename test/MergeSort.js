const should = require('chai').should();
const expect = require('chai').expect;

const MergeSort = require('../Algorithms/MergeSort');


describe.only('Algorithm -- MergeSort \n', () => {
	var unsortedArr;
	beforeEach(() => {
		unsortedArr = [];
	});

	it('should import correctly. \n', () => {
		MergeSort.should.be.a('function');
	});

	describe('Parameters -- Sort Array. \n', () => {
		it('this funciton expect one arguments. \n', () => {
			MergeSort.length.should.be.a('number');
			MergeSort.length.should.equal(3);

		});

    it('should return error when passed in an invalid parameter', () => {
      var result = MergeSort(2);
      result.should.be.an('error');
    });

		it('should return error when pass 0 parameter in. \n', () => {
			var result = MergeSort();
			result.should.be.an('error');
		});

		it('should return one length array to merge funciton as parameter \n', () => {
			var result = MergeSort([1]);
			result.should.be.an('array');
			result.should.have.length(1);
		});
	});

  describe('Mock sort situation  \n', () => {
    it('It should sort even number elements of array correctly \n', () => {
      unsortedArr = [3, 2, 1];
      MergeSort(unsortedArr);
      unsortedArr.should.have.length(3);
      unsortedArr[0].should.equal(1);
      unsortedArr[1].should.equal(2);
      unsortedArr[2].should.equal(3);
    });

    it('It should sort odd number elements of array correctly \n', () => {
      unsortedArr = [4, 3, 2, 1];
      MergeSort(unsortedArr);
      unsortedArr.should.have.length(4);
      unsortedArr[0].should.equal(1);
      unsortedArr[1].should.equal(2);
      unsortedArr[2].should.equal(3);
      unsortedArr[3].should.equal(4);
    });
  });

});