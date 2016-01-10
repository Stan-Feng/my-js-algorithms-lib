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
    });

    it('It should return correct path data structure. \n', () => {
      graph.addVertice('A');
      graph.addVertice('B');
      graph.addVertice('C');
      graph.addVertice('D');
      graph.addVertice('E');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('C', 'D');
      graph.addEdge('D', 'E');

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

      paths['B'].should.have.length(2);
      paths['C'].should.have.length(2);
      paths['D'].should.have.length(3);
      paths['E'].should.have.length(4);

      paths['B'][1].should.equal('B');
      paths['C'][1].should.equal('C');

      paths['D'][1].should.equal('C');
      paths['D'][2].should.equal('D');

      paths['E'][1].should.equal('C');
      paths['E'][2].should.equal('D');
      paths['E'][3].should.equal('E');
    });

    it('It should return correct path in a more complex case. \n', () => {
      const vertexSymbol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
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

      var paths = breadthFirstSearch(graph);

      paths['I'].should.have.length(4);
      paths['I'][3].should.equal('I');
      paths['I'][2].should.equal('E');
      paths['I'][1].should.equal('B');

      paths['E'].should.have.length(3);
      paths['E'][2].should.equal('E');
      paths['E'][1].should.equal('B');


      paths['G'].should.have.length(3);
      paths['G'][2].should.equal('G');
      paths['G'][1].should.equal('C');
    });
  });

});

