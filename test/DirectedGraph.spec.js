import chai from 'chai';
import { DirectedGraph } from '../DataStructure/DirectedGraph';

const expect = chai.expect;
const should = chai.should();

describe.only('DataStructure -- Directed Graph \n', () => {
  describe('Init functionalities && Simple Case \n', () => {
    var graph;
    const nodes = [
      { label: 'a', to: ['b', 'c'] },
      { label: 'b', to: ['d'] },
      { label: 'c', to: ['b'] },
      { label: 'd', to: ['a'] }
    ];

    beforeEach(() => {
      graph = DirectedGraph.init(nodes);
    });

    it('It should add all nodes to adj list correctly. \n', () => {
      var vertices = graph.vertices;
      var adjList = graph.adjList;

      vertices.should.have.length(4);
      adjList.should.have.property('a');
      adjList.should.have.property('b');
      adjList.should.have.property('c');
      adjList.should.have.property('d');

    });

    it('It should delete node correctly. \n', () => {
      graph = DirectedGraph.init(nodes);
      graph.deleteNode('a');

      graph.vertices.indexOf('a').should.equal(-1);
      expect(graph.adjList['a']).to.be.undefined;
    });

    it('It should not be a dag DirectedGraph. \n', () => {
      graph.isDag('a').should.be.false;
    });
  });

  describe('It should be executed in a more complex example. \n', () => {
    var graph;
    var nodes = [
      { label: 'a', to: ['b', 'c'] }, // 0
      { label: 'b', to: ['c', 'd'] },  // 1
      { label: 'c', to: ['f'] },  // 2
      { label: 'e', to: ['f'] }, // 3
      { label: 'd', to: ['g', 'h'] }, // 4
      { label: 'f', to: ['g', 'h'] }, // 5
      { label: 'g', to: [] }, // 6
      { label: 'h', to: [] } // 7
    ];

    it('It should be a directed acyclic graph. \n', () => {
      graph = DirectedGraph.init(nodes);
      graph.isDag().should.be.true;
    });

    it('It should return a topological sorted list. \n', () => {
      graph = DirectedGraph.init(nodes);
      var list = graph.topologicalSort();
      console.log(list);
    });

  });
});
