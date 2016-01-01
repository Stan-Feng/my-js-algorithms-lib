'use strict';
import chai from 'chai';
import Graph from '../DataStructure/UndirectedGraph';

const should = chai.should();

describe('DataStructure -- Graph  \n', () => {
  var graph;
  var vertices;

  beforeEach(() => {
    graph = Graph();
    graph.addVertice('A');
    graph.addVertice('B');
    graph.addVertice('C');
    graph.addVertice('D');
    graph.addVertice('E');
    graph.addVertice('F');
    graph.addVertice('G');
    graph.addVertice('H');

    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('F', 'G');
    graph.addEdge('G', 'H');
    graph.addEdge('H', 'A');

    vertices = graph.getVertices();
  });

  describe('Attributes -- adjList && vertexes: \n', () => {
    it('It should add vertex correctly. \n', () => {

      var list = graph.getAdjList();
      list.should.be.an('object');
      list['A'].should.be.an('array');
      list['B'].should.be.an('array');
      list.A.should.have.length(2);
      list.B.should.have.length(2);

      vertices.should.be.an('array');
      vertices.should.have.length(8);
      vertices[0].should.equal('A');
      vertices[1].should.equal('B');
    });

    it('It should add edge correctly. \n', () => {
      graph.addVertice('A');
      graph.addVertice('B');
      graph.addEdge('A', 'B');

      var adjList = graph.getAdjList();
      adjList.should.have.property('A');
      adjList.should.have.property('B');
      adjList['A'].should.be.an('array');
      adjList['B'].should.be.an('array');

      adjList['A'].should.have.length(1);
      adjList['B'].should.have.length(1);

      adjList['A'][0].should.equal('B');
      adjList['B'][0].should.equal('A');

      var adjVertices = graph.getAdjVertices('A');
      adjVertices.should.be.an('array');
      adjVertices.should.have.length(1);
      adjVertices[0].should.equal('B');
    });

  });

  describe('It should return correct adjacent vertices. \n', () => {
    var testAdjVertices = [
      {s: 'A', v: ['B', 'H']},
      {s: 'B', v: ['A', 'C']},
      {s: 'C', v: ['B', 'D']},
      {s: 'D', v: ['C', 'E']},
      {s: 'E', v: ['D', 'F']},
      {s: 'F', v: ['E', 'G']},
      {s: 'G', v: ['F', 'H']},
      {s: 'H', v: ['G', 'A']}
    ];

    testAdjVertices.forEach(adjVertices => {
      it('It should return correct adjacent vertices when input vertice is ' + adjVertices.s +'. \n', () => {
        var adjV = graph.getAdjVertices(adjVertices.s);
        adjV.should.be.an('array');
        adjV.should.have.length(2);
        adjV[0].should.equal(adjVertices.v[0]);
        adjV[1].should.equal(adjVertices.v[1]);
      });
    });
  });

});