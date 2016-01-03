'use strict';
import chai from 'chai';
import Graph from '../DataStructure/UndirectedGraph';
import breadthFirstSearch from '../Algorithms/BruteForce/BreadthFirstSearch';

const should = chai.should();
const expect = chai.expect;

describe('BruteForce -- BreadthFirstSearch  \n', () => {
  describe('BreadthFirstSearch -- Non-functional Tests: \n', () => {
    var graph = Graph.createInstance();
    it('It should import successfully. \n', () => {
      breadthFirstSearch.should.be.a('function');
    });

    it('It should accept three parameters. \n', () => {
      breadthFirstSearch.length.should.equal(3);
    });

    it('It should dealt with invalid parameters. \n', () => {
      var noPara = breadthFirstSearch();
      noPara.should.be.a('error');

      var onePara = breadthFirstSearch(graph);
      onePara.should.be.a('error');

      var twoPara = breadthFirstSearch(graph, {});
      twoPara.should.be.a('error');
    });

    describe('BreadthFirstSearch -- Functional Tests: \n', () => {
      var graph;
      beforeEach(() => {
        graph = Graph();
      });

    });

  });
});

