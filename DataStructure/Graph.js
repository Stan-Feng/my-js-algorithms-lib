'use strict';
//New Pattern of Creating Inheritance -- Prototype Style
function Graph() {
  var adjList = {};
  var vertexes = [];

  return {
    addVertex (v) {
      vertexes.push({symbol : v});
      adjList[v] = [];
    },

    addEdge (v, e) {
      adjList[v].push(e);
      adjList[e].push(v);
    },

    getAdjList () {
      return Object.create(adjList);
    },

    getVertexes () {
      return vertexes;
    }
  };
}

export default Graph;

