const expect = require('chai').expect;
const should = require('chai').should();

import gcd from '../Algorithms/Euclid\'s.js';

describe('Euclid\'s Algorithm -- Find the largest division: \n', () => {

  describe('Parameters: \n', () => {
    it('It should import successfully. \n', () => {
      gcd.should.be.a('function');
    });

    it('It should accept two parameters. \n', () => {
      gcd.length.should.equal(2);
    });

    it('It should throw error when input order is not correct. \n', () => {
      let result = gcd(0, 1);
      result.should.be.an('error');
    });

    it('It should throw error when the input parameters are not two. \n', () => {
      let result = gcd(1);
      result.should.be.an('error');
    });

    it('It should return the int when input is (int, 0)', () => {
      gcd(1, 0).should.equal(1);
    });

  });

  describe('Result: \n', () => {
    it('It should return 12 when input is (60, 24)', () => {
      gcd(60, 24).should.equal(12);
    });

  });
});