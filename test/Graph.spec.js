'use strict';
import chai from 'chai';
import Graph from '../DataStructure/Graph';

const should = chai.should();

describe('DataStructure -- Graph  \n', () => {
  var graph;
  beforeEach(() => {
    graph = Graph();
  });

  describe('Attributes -- adjList && vertexes: \n', () => {
    it('It should add vertex correctly. \n', () => {
      graph.addVertex('A');
      graph.addVertex('B');

      var list = graph.getAdjList();
      list.should.be.an('object');
      list['A'].should.be.an('array');
      list['B'].should.be.an('array');
      list.A.should.have.length(0);
      list.B.should.have.length(0);

      var vertices = graph.getVertexes();
      vertices.should.be.an('array');
      vertices.should.have.length(2);
      vertices[0].should.be.an('object');
      vertices[1].should.be.an('object');
      vertices[0].symbol.should.equal('A');
      vertices[1].symbol.should.equal('B');
    });

    it('It should add edge correctly. \n', () => {
      graph.addVertex('A');
      graph.addVertex('B');
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
    });
  });
});