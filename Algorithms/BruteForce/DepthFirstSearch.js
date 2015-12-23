'use strict';
/**
 * @name: DepthFirstSearch
 * @param: {Graph} graph = {V, E}
 * @return: {Graph} with its vertices marked with consecutive integers
 *            in the order they are first encountered by DFS traversal
 *            mark each vertex in V with 0 as a mark of being 'Unvisited'
 */
export default DepthFirstSearch;

function DepthFirstSearch(graph) {
	if (!graph || typeof (graph) !== 'object') {
		return new Error('Invalid Input');
	}

  var adjList = graph.getAdjList();
	var vertexes = graph.getVertexes();

	__markInitialize();

  __dfsTraverse(vertexes[0]);

	return graph;

  function __markInitialize() {
  	vertexes.forEach((vertex) => {
  		vertex.isMarked = false;
  	});
  }

  function __isDeepest(vertex) {
    var adjVertexes = adjList[vertex.symbol];
    //@Continue: Change the data structure
    adjVertexes.forEach( vertex => {
      if(!vertex.isMarked){
        return false;
      }
      console.log(vertex);
    });
    return true;
  }

  function __dfsTraverse(thisVertex) {
  	if (__isDeepest(thisVertex)) {
  		thisVertex.isMarked = true;
  		return;
  	}

  	var adjVertexes = adjList[thisVertex.symbol];
  	adjVertexes.forEach(vertex => {
      if(!vertex.isMarked) {
        vertex.isMarked = true;
      }
      else {
        return;
      }
  		__dfsTraverse(vertex);
  	});
  }
}

