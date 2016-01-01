'use strict';
/**
 * @name: DepthFirstSearch
 * @param: {Graph} graph = {V, E}, {String} symbol
 *  	After executed these code, the graph passed should be
 *			marked with its vertices marked with consecutive integers
 *      in the order they are first encountered by DFS traversal
 *      mark each vertex in V with 0 as a mark of being 'Unvisited'
 * @return: {Boolean} -- Whether the input symbol found in the graph
 */

export default (function () {
	var vertices;

	return function (graph, target) {
		if (!graph || !target) {
			return new Error('Invalid Input.');
		}

		//Mark all vertice unvisited
		vertices = graph.getVertices().map(vertice => {
			var newVertice = Object.create(null);

			newVertice.isMarked = false;
			newVertice.symbol = vertice;
			newVertice[vertice] = vertice;
			return newVertice;
		});
		__search(graph, vertices[0]);
	};

	function __search(graph, startVertice) {
		startVertice.isMarked = true;
		var adjVertices = graph.getAdjVertices(startVertice.symbol);
		console.log(vertices);
		console.log(adjVertices);
		//@Continue: search deeper
		adjVertices.forEach(adjVertice => {
			if(!vertices[adjVertice].isMarked) {
				__search(graph, vertices[adjVertice]);
			}
		});

		return;
	}

	function __isMarked(vertice) {
		// body...
	}
}());

/**
export default (function () {
	var attrs;
	var count = 0;

	var helpers = {
		depthFirstSearch (vertex) {
			var adjSymbols = attrs.adjList[vertex.symbol];
			var unmarkedVertexes = this.getUnmarkedAdj(adjSymbols);

			vertex.count = count;
			count += 1;
			vertex.isMarked = true;

			if(unmarkedVertexes.length > 0){
				adjSymbols.map(symbol => {
					var unmarkedAdjSymbols = this.getUnmarkedAdj(attrs.adjList[symbol]);
					console.log(unmarkedAdjSymbols);
					this.depthFirstSearch(attrs.vertexes['E']);
					// return unmarkedAdjSymbols.forEach(unmarkedSymbol => {
					// 	this.depthFirstSearch(attrs.vertexes[symbol]);
					// });
				});
			}
			else {
				console.log('Adj marked.');
				return;
			}

		},

		getUnmarkedAdj (adjSymbols) {
			return adjSymbols.filter(symbol => {
				if(!attrs.vertexes[symbol].isMarked) {
					return symbol;
				}
			});
		}
	};

	return function (graph, targetSymbol) {
		if (!graph || typeof (graph) !== 'object') {
			return new Error('Invalid Input');
		}

		attrs = {
			graph,
			targetSymbol,
			adjList: graph.getAdjList(),
			vertexes: graph.getVertexes()
		};

		//Mark all vertex as unvisited
		for (var symbol in attrs.vertexes) {
			if (attrs.vertexes.hasOwnProperty(symbol)) {
				if (!attrs.root) {
					attrs.root = attrs.vertexes[symbol];
				}
				attrs.vertexes[symbol].isMarked = false;
			}
		}
		//**************Correct Above***********************

		return helpers.depthFirstSearch(attrs.root);
	};
}());
*/