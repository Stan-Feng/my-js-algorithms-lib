'use strict';
//New Pattern of Creating Object -- Prototype Style
function Graph() {
  var adjList = {};
  var vertices = [];

  return {
    addVertex (v) {
      vertices.push(v);
      adjList[v] = [];
    },

    addEdge (v, e) {
      adjList[v].push(e);
      adjList[e].push(v);
    },

    getAdjList () {
      return Object.create(adjList);
    },

    getVertices () {
      return vertices.slice(); 
    }
  };
}

export default Graph;

