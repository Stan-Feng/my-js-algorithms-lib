'use strict';
import chai from 'chai';
import Graph from '../DataStructure/Graph';

const should = chai.should();

describe.only('DataStructure -- Graph  \n', () => {
  var graph;
  beforeEach(() => {
    graph = Graph();
  });

  describe('Attributes -- adjList && vertices: \n', () => {
    it('It should add vertex correctly. \n', () => {
      graph.addVertex('A');
      graph.addVertex('B');

      var list = graph.getAdjList();
      list.should.be.an('object');
      list['A'].should.be.an('array');
      list['B'].should.be.an('array');
      list.A.should.have.length(0);
      list.B.should.have.length(0);

      var vertices = graph.getVertices();
      vertices.should.be.an('array');
      vertices.should.have.length(2);
      vertices[0].should.equal('A');
      vertices[1].should.equal('B');
    });

    it('It should add edge correctly. \n', () => {
      // graph.addEdge('A', 'B');

    });
  });
});