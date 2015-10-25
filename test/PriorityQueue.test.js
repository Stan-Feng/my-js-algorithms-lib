// Date: Thu Oct 15 2015 10:39:33 GMT+0800 (CST)
'use strict';
var expect = require('chai').expect;
var queuePath = '../DataStructure/using/priorityQueue';
require('chai').should();


describe('PriorityQueue -- Module: : \n', function () {
	it('should export a brand new object \n', function () {
		var PriorityQueue = require(queuePath)();
		expect(PriorityQueue).to.exist;
		expect(PriorityQueue).to.be.an('object');
	});

	it('should create a brand new PriorityQueue object \n', function () {
		var queue1 = require(queuePath)();
		var queue2 = require(queuePath)();
		var isSame = (queue2 === queue1);
		isSame.should.be.a('boolean');
		isSame.should.be.false;
		isSame.should.equal(false);
	});
});


describe('PriorityQueue  -- Methods \n', function () {

	describe('PriorityQueue should have these methods:\n ', function () {
		var priorityQueue = require(queuePath)();

		it('should have method -- enqueue \n', function () {
			var enqueue = priorityQueue.enqueue;
			enqueue.should.exist;
			enqueue.should.be.a('function');
		});

		it('should have method -- dequeue \n', function(){
		    var dequeue = priorityQueue.dequeue;
		    dequeue.should.exist;
		    dequeue.should.be.a('function');
		});

		// it('should have method -- enqueue', function(){
		//     var enqueue = priorityQueue.enqueue;
		//     enqueue.should.exist;
		//     enqueue.should.be.a('function');
		// });

	});

	describe('PriorityQueue.enqueue method: \n', function () {

		it('should return an Error object when it accept invalid input \n', function () {
      var queue = require(queuePath)();
  		var enqueue = queue.enqueue;
      var elementsOfQueue = queue._testElements;

      var input = 'fjw';
      var err = enqueue(input);
      err.should.be.an('error');
		});

    it('should push element successfully while the queue is empty \n', function (){
      var queue = require(queuePath)();
  		var enqueue = queue.enqueue;
      var elementsOfQueue = queue._testElements;

      var input = 1;
      enqueue(input);

      elementsOfQueue.should.be.an('array');
      elementsOfQueue.should.have.length(1);

      elementsOfQueue[0].should.be.a('object');
      elementsOfQueue[0].should.property('priority');
      elementsOfQueue[0].should.property('value');

      var value = elementsOfQueue[0].value;
      value.should.be.a('number');
      value.should.equal(1);

      var priority = elementsOfQueue[0].priority;
      priority.should.be.a('number');
      priority.should.equal(1);


    });

    it('should insert element in the mid position between a high priority and a low priority element \n', function(){

      var queue = require(queuePath)();
  		var enqueue = queue.enqueue;
      var elementsOfQueue = queue._testElements;

      var low_priority_input = 1;
      var hight_priority_input = 3;
      var middle_priority_input = 2;

      enqueue(low_priority_input);
      enqueue(hight_priority_input);
      enqueue(middle_priority_input);


      var mid_element = queue._testElements[1];

      mid_element.should.be.an('object');
      mid_element.should.have.property('priority');
      mid_element.should.have.property('value');

			var value = mid_element.value;
			value.should.be.a('number');
			value.should.equal(2);

			var priority = mid_element.priority;
			priority.should.be.a('number');
			priority.should.equal(2 * 2);
     });


		 it('should insert element in the correct position if the array contains same priority element \n', function () {

			 	var queue = require(queuePath)();
  			var enqueue = queue.enqueue;
      	var elementsOfQueue = queue._testElements;

				enqueue(1);
				enqueue(2);
				enqueue(2);
				enqueue(3);
				enqueue(3);

				var insert_number = 2;
				enqueue(insert_number);

				elementsOfQueue.should.have.length(6);

				elementsOfQueue[0].value.should.equal(1);
				elementsOfQueue[1].value.should.equal(2);
				elementsOfQueue[2].value.should.equal(2);
				elementsOfQueue[3].value.should.equal(2);
				elementsOfQueue[4].value.should.equal(3);
				elementsOfQueue[5].value.should.equal(3);
			});

			it('should push the element at the end of array if it is the highest priority element \n', function(){

				var queue = require(queuePath)();
  			var enqueue = queue.enqueue;
      	var elementsOfQueue = queue._testElements;

				enqueue(1);
				enqueue(2);
				enqueue(2);
				enqueue(3);
				enqueue(3);

				var insert_number = 4;
				enqueue(insert_number);

				var last_element= elementsOfQueue[elementsOfQueue.length - 1];

				last_element.should.be.an('object');
				last_element.should.have.property('value');
				last_element.should.have.property('priority');

				var value = last_element.value;
				value.should.be.a('number');
				value.should.be.equal(4);

				var priority = last_element.priority;
				priority.should.be.a('number');
				priority.should.equal(4 * 4);

			});
	});

	describe('PriorityQueue.dequeue -- Method', function(){

		var queue = require(queuePath)();
		var dequeue = queue.dequeue;

		it('should return error when there\'s no element in queue', function(){
			 var result = dequeue();
			 result.should.be.an('error');
		});

		it('should pop the highest priority element of the queue', function(){

			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);
			queue.enqueue(2);

			var result = dequeue();
			result.should.be.an('object');
			result.should.have.property('value');
			result.should.have.property('priority');

			var value = result.value;
			value.should.be.a('number');
			value.should.equal(3);

			var priority = result.priority;
			priority.should.be.a('number');
			priority.should.equal(3 * 3);

		});
	});

  //The rest part is the same as normal queue structure
});















