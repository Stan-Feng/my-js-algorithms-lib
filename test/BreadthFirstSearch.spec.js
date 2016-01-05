'use strict';
import chai from 'chai';
import Graph from '../DataStructure/UndirectedGraph';
import breadthFirstSearch from '../Algorithms/BruteForce/BreadthFirstSearch';

const should = chai.should();
const expect = chai.expect;

describe.only('BruteForce -- BreadthFirstSearch  \n', () => {
  describe('BreadthFirstSearch -- Non-functional Tests: \n', () => {
    var graph = Graph.createInstance();
    it('It should import successfully. \n', () => {
      breadthFirstSearch.should.be.a('function');
    });

    it('It should accept only one parameters. \n', () => {
      breadthFirstSearch.length.should.equal(1);
    });

    it('It should dealt with invalid parameters. \n', () => {
      var noPara = breadthFirstSearch();
      noPara.should.be.a('error');
    });

  });

  describe('BreadthFirstSearch -- Functional Tests: \n', () => {
    var graph;
    beforeEach(() => {
      graph = Graph.createInstance();
      graph.addVertice('A');
      graph.addVertice('B');
      graph.addVertice('C');
      graph.addVertice('D');
      graph.addVertice('E');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('C', 'D');
      graph.addEdge('D', 'E');
    });

    it('It should return correct path data structure. \n', () => {
      var paths = breadthFirstSearch(graph);

      paths.should.be.an('object');
      paths.should.have.property('root');
      paths.should.have.property('B');
      paths.should.have.property('C');
      paths.should.have.property('D');
      paths.should.have.property('E');
      
      paths['root'].should.equal('A');
      paths['B'].should.be.an('array');
      paths['C'].should.be.an('array');
      paths['D'].should.be.an('array');
      paths['E'].should.be.an('array');

      paths['B'].parent.should.equal('A');
      paths['C'].parent.should.equal('A');
      paths['D'].parent.should.equal('C');
      paths['E'].parent.should.equal('D');

    });

  });

});

