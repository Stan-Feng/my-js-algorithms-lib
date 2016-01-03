'use strict';
/**
 * @name: Undirected Graph
 * @method: getVertices() --> return number of vertices
 * @method: getEdges() --> return number o edges
 * @method: addEdge(v, e) --> add edge between v and e
 * @method: getAdjList() --> return vertices adjacent to v
 * @method: getVerticeAdj(v) --> return vertices adjacent to v
 * @method: addVertice(v) --> Add new vertice to graph
 */
//New Pattern of Creating Inheritance -- Prototype Style
function UndirectedGraph(vertices = []) {
	var edgeNum = 0;
	var adjList = {};
  var vertices = [];

	return {
    addVertice (e) {
      if(adjList[e]) {
        return new Error('Vertice exists.');
      }
      vertices.push(e);
      adjList[e] = [];
    },

    addEdge (e, v) {
      adjList[e].push(v);
      adjList[v].push(e);
      edgeNum++;
    },

    hasPath (v1, v2) {

    },

    getAdjVertices (v) {
      return adjList[v];
    },

		getEdgeNum() {
			return edgeNum;
		},

		getAdjList() {
			return adjList;
		},

		getVertices() {
			return vertices;
		}
	};
}


export default UndirectedGraph;