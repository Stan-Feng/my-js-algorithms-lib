const chai = require('chai');
const should = chai.should();

/**
 * @todo: test whether it is a class && contains all input methods
 * @param: {class} DataStructure
 * @param: {array} methods
 */
let commonTest = (DataStructure, methods) => {
	describe('This DataStructure should create brand new objects \n', () => {

    it('This parameter should be a constructor\n ', () => {
      DataStructure.should.be.a('function');
			(new DataStructure() instanceof Function).should.equal(false);
    });


		it('This class should create two objects which are not equal \n', () => {
			let d1 = new DataStructure();
			let d2 = new DataStructure();
      let result = (d1 === d2);

      result.should.be.a('boolean');
      result.should.be.false;
      result.should.equal(false);
		});

	});

  describe('This DataStructure should have these methods \n', () => {
    const instance = new DataStructure();
    methods.map(method => {
        it('should have ' + method + ' method \n', () => {
          var type = typeof(instance[method]);
          type.should.be.a('string');
          type.should.equal('function');
        });
    });
  });
};


module.exports = commonTest;