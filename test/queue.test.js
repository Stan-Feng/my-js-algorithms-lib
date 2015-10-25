var expect = require('chai').expect;
var queuePath = '../DataStructure/Queue';

describe('Queue -- Module', function(){
    it('should export a brand new object \n', function(){
        var Queue = require(queuePath)();
        expect(Queue).to.be.a('object');
    });

    it('should export different objects \n', function(){
        var Q1 = require(queuePath)();
        var Q2 = require(queuePath)();
        expect(Q1 !== Q2).to.equal.true;
    });
});

describe('Queue -- Properties \n', function(){
    var Queue = require(queuePath)();
    it('should NOT access the private property \'items\'', function(){
        expect(Queue.items).to.be.undefined;
    });
});


describe('Queue -- Methods', function(){
    var Queue = require(queuePath)();



    describe('It should have all queue methods \n', function(){
        it('should have enqueue method', function(){
            expect(Queue.enqueue).to.exist;
            expect(Queue.enqueue).to.be.a('function');
        });

        it('should have dequeue method', function(){
            expect(Queue.dequeue ).to.exist;
            expect(Queue.dequeue ).to.be.a('function');
        });

        it('should have font method', function(){
            expect(Queue.font ).to.exist;
            expect(Queue.font ).to.be.a('function');
        });

        it('should have isEmpty method', function(){
            expect(Queue.isEmpty ).to.exist;
            expect(Queue.isEmpty ).to.be.a('function');
        });

        it('should have size method', function(){
            expect(Queue.size ).to.exist;
            expect(Queue.size ).to.be.a('function');
        });

        it('should have clear method', function(){
            expect(Queue.clear ).to.exist;
            expect(Queue.clear ).to.be.a('function');
        });
    });


    describe('Queue.isEmpty method should return the correct whether queue is empty. \n', function(){

        it('should return true while queue is empty', function(){
            var Queue = require(queuePath)();
            expect(Queue.isEmpty()).to.equal(true);
            console.log(Queue.size());
        });

        it('should return false while queue is not empty', function(){
            var notEmptyQueue = require(queuePath)([1,2,3]);
            expect(notEmptyQueue.isEmpty()).to.equal(false);
        });

    });

    describe('Queue.size method should return the correct item number \n', function(){
        it('should return 3 when the queue initialized with ([1, 2, 3])', function(){
            var threeItemsQueue = require(queuePath)([1, 2, 3]);
            expect(threeItemsQueue.isEmpty()).to.equal(false);
            expect(threeItemsQueue.size()).to.be.a('number');
            expect(threeItemsQueue.size()).to.equal(3);
        });
    });

    describe('Queue.clear method should clean all items \n', function(){
        it('should return clean all items in queue..', function(){
            var threeItemsQueue = require(queuePath)([1, 2, 3]);
            threeItemsQueue.clear();
            expect(threeItemsQueue.isEmpty()).to.be.true;
        });
    });

    describe('Queue manipulation methods', function(){
        var Queue = require(queuePath)();

        beforeEach(function(){
                //Clear Queue...
            Queue.clear();
        });

        it('enqueue should push an item', function(){
            Queue.enqueue(1);
            expect(Queue.isEmpty()).to.be.false;
            expect(Queue.size()).to.equal(1);
        });

        it('dequeue should return the first item in', function(){
            Queue.enqueue(1);
            Queue.enqueue(2);
            Queue.enqueue(3);
            Queue.enqueue(4);

            var firstItem = Queue.dequeue();
            expect(firstItem).to.be.a('number');
            expect(firstItem).to.equal(1);

            var secondItem = Queue.dequeue();
            expect(secondItem).to.be.a('number');
            expect(secondItem).to.equal(2);

        });

        it('font should return the first item but NOT mofify the queue', function(){
            Queue.enqueue(1);
            Queue.enqueue(2);
            Queue.enqueue(3);
            Queue.enqueue(4);

            var firstItem = Queue.font();
            expect(firstItem).to.be.a('number');
            expect(firstItem).to.equal(1);
            expect(Queue.size()).to.equal(4);

        });
    });

});








