import chai from 'chai';
import { DirectedGraph } from '../DataStructure/DirectedGraph';

const should = chai.should();

describe.only('DataStructure -- Directed Graph \n', () => {
  describe('Init functionalities \n', () => {
    var graph;
    var nodes = [
      { source: 'a', to: ['b', 'c'] },
      { source: 'b', to: ['d'] },
      { source: 'c', to: ['b'] },
      { source: 'd', to: ['a'] }
    ];
    beforeEach(() => {
      graph = undefined;
    });

    it('It should add all nodes to adj list correctly. \n', () => {
      graph = DirectedGraph.init(nodes);

      var vertices = graph.getVerts();
      var adjList = graph.getAdjList();

      vertices.should.have.length(4);
      adjList.should.have.property('a');
      adjList.should.have.property('b');
      adjList.should.have.property('c');
      adjList.should.have.property('d');

      adjList.a.should.have.length(2);
      adjList.b.should.have.length(1);
      adjList.c.should.have.length(1);
      adjList.d.should.have.length(1);
    });
  });
});
