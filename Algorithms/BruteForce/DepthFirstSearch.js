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
	var __root;
	var __graph;
	var __target;
	var __vertices = {};

	return function (graph, target) {
		if (!graph || !target) {
			return new Error('Invalid Input.');
		}
		else {
			__graph = graph;
			__target = target;

			//Mark all vertice unvisited
			__graph.getVertices().forEach(vertice => {
				__vertices[vertice] = {
					isMarked: false,
					symbol: vertice
				};
				if(!__root) {
					__root = __vertices[vertice];
				}
			});

			return __search(__root);
		}
	};

	function __search(startV) {
		startV.isMarked = true;

		if(startV.symbol === __target) {
			return true;
		}
		else {
			var adjs = __graph.getAdjVertices(startV.symbol);
			for (let i = 0; i < adjs.length; i++) {
				let v = __vertices[adjs[i]];
				if(!v.isMarked) {
					let isFound = __search(v);
					if(isFound) {
						return true;
					}
					else {
						// console.log('Can not find target '+ __target +' in this path.');
					}
				}
				else {
					// console.log('Skip vertice ' + v.symbol);
				}
			}

			return false;
		}
	}

}());
