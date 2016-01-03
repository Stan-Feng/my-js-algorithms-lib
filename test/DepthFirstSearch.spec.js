'use strict';
import chai from 'chai';
import Graph from '../DataStructure/UndirectedGraph';
import DepthFirstSearch from '../Algorithms/BruteForce/DepthFirstSearch';

const should = chai.should();
const expect = chai.expect;

describe('BruteForce -- DepthFirstSearch: \n', () => {
  describe('DepthFirstSearch -- Non-functional Test: \n', () => {
    var graph = Graph.createInstance();
    it('It should import successfully. \n', () => {
      DepthFirstSearch.should.be.a('function');
    });

    it('It should accept two parameter. \n', () => {
      DepthFirstSearch.length.should.equal(2);
    });

    it('It should return error when passed invalid input. \n', () => {
      var result = DepthFirstSearch(123);
      result.should.be.an('error');

      result = DepthFirstSearch();
      expect(result).to.be.an('error');
    });
  });

  describe('DepthFirstSearch -- Functional Test: \n', () => {
    var graph;
    const vertexSymbol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    beforeEach(() => {
      graph = Graph.createInstance();
      vertexSymbol.forEach( symbol => {
        graph.addVertice(symbol);
      });

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('A', 'D');
      graph.addEdge('B', 'E');
      graph.addEdge('B', 'F');
      graph.addEdge('C', 'D');
      graph.addEdge('C', 'G');
      graph.addEdge('D', 'G');
      graph.addEdge('D', 'H');
      graph.addEdge('E', 'I');
    });

    var successTests = [
      { input: 'B', output: true },
      { input: 'C', output: true },
      { input: 'D', output: true },
      { input: 'E', output: true },
      { input: 'F', output: true },
      { input: 'G', output: true },
      { input: 'H', output: true },
      { input: 'I', output: true }
    ];

    var failureTests = [
      { input: 1, output: false },
      { input: 'JL', output: false },
      { input: {}, output: false },
      { input: [], output: false },
      { input: 'M', output: false }
    ];

    it('It should return false when there is no matched symbol. \n', () => {
      var result = DepthFirstSearch(graph, 'Z');
      result.should.be.false;
    });

    it('It should return true when target is root. \n', () => {
      var result = DepthFirstSearch(graph, 'A');
      result.should.be.true;
    });

    successTests.forEach(test => {
      it('It should return true when input is ' + test.input + '. \n', () => {
        var result = DepthFirstSearch(graph, test.input);
        result.should.be.a('boolean');
        result.should.be.true;
        result.should.equal(true);
      });
    });

    failureTests.forEach(test => {
      it('It should return false when input is ' + test.input + '. \n', () => {
        var result = DepthFirstSearch(graph, test.input);
        result.should.be.a('boolean');
        result.should.be.false;
        result.should.equal(false);
      });
    });

  });

});