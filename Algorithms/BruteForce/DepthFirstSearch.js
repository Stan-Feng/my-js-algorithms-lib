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
	var attrs;
	var count = 0;

	var helpers = {
		depthFirstSearch (vertex) {
			var adjSymbols = attrs.adjList[vertex.symbol];

			vertex.count = count;
			count += 1;
			vertex.isMarked = true;

			if(!this.isAdjMarked(adjSymbols)){
				console.log('Adj not mark');
				adjSymbols.forEach(symbol => {
					this.depthFirstSearch(attrs.vertexes[symbol]);
				});
			}
			else {
				console.log('Adj marked.');
				return;
			}

		},

		isAdjMarked (adjSymbols) {
			adjSymbols.forEach(symbol => {
				if(!attrs.vertexes[symbol].isMarked) {
					console.log('hey');
					return false;
				}
			});
			console.log('here');
			return true;
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
