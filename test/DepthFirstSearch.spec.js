'use strict';
import chai from 'chai';
import Graph from '../DataStructure/Graph';
import DepthFirstSearch from '../Algorithms/BruteForce/DepthFirstSearch';

const should = chai.should();
const expect = chai.expect;

describe.only('BruteForce -- DepthFirstSearch: \n', () => {
  var graph;
  const vertexSymbol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

  beforeEach(() => {
    graph = Graph();
    vertexSymbol.forEach( symbol => {
      graph.addVertex(symbol);
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

  describe('DepthFirstSearch -- Non-functional Test: \n', () => {
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
    it('It should mark all vertexes as unvisited for given graph. \n', () => {
      DepthFirstSearch(graph, 'C');

      var vertexes = graph.getVertexes();
      vertexes.should.be.an('object');

      // for (var symbol in vertexes) {
      //   if (vertexes.hasOwnProperty(symbol)) {
      //     vertexes[symbol].should.be.an('object');
      //     vertexes[symbol].should.have.property('symbol');
      //     vertexes[symbol].isMarked.should.be.false;
      //   }
      // }

    });

    it('It should mark all vertexes after traversed. \n', () => {
      DepthFirstSearch(graph);

      var vertexes = graph.getVertexes();
      // console.log(vertexes);
      for (var symbol in vertexes) {
        if (vertexes.hasOwnProperty(symbol)) {
          vertexes[symbol].should.be.an('object');
          vertexes[symbol].should.have.property('symbol');
          vertexes[symbol].isMarked.should.be.true;
        }
      }

    });

    // it('It should return null when there is no matched symbol. \n', () => {
    //   var result = DepthFirstSearch(graph, 'Z');
    //   result.should.be.false;
    // });
  });

});