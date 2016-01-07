'use strict';
/**
 * @name: Breadth-first Search
 * @type: Brute Force
 * @todo: Search shortest path from s to v in a graph
 * @param: {Graph} graph
 * @param: {Vertice} startV
 * @param: {Vertice} targetV
 * @return: {Object} -- All paths from root
 * @remarks: this algorithms set root to the first element pushed into graph data strcture
 */

export default (function() {
  var __root;
  var __graph;
  var __paths = {};
  var __vertices = {};

  return function (graph, root='A') {
    if(!graph) {
      return new Error('Invalid Input');
    }
    else {
      __graph = graph;

      //Mark all vertices as unvisited, create new data structure
      __graph.getVertices().forEach(vertice => {
        __vertices[vertice] = {
          isMarked: false,
          symbol: vertice,
          parent: undefined,
          children: []
        };
      });

      // Assume the first element in __vertices is the root
      __paths['root'] = root;
      __root = __vertices[root];
      __root.parent = 'root';
      __root.isMarked = true;

      __breadthTraverse(__root);

      return __paths;
    }
  };

  function __breadthTraverse(startV) {
    if(startV.parent !== 'root') {
      __paths[startV.symbol] = [];
      __findPath(startV, __paths[startV.symbol]);
    }

    var nextSymbols = __filterVertices(startV);
    if(nextSymbols.length !== 0) {
      nextSymbols.forEach(symbol => {
        __breadthTraverse(__vertices[symbol]);
      });
    }
    else {
      return;
    }
  }

  function __filterVertices(startV) {
    var adjSymbols = __graph.getAdjVertices(startV.symbol);

    if(!adjSymbols) {
      return [];
    }
    else {
      return adjSymbols.filter(symbol => {
        var v = __vertices[symbol];
        if(!v.isMarked) {
          v.isMarked = true;
          v.parent = startV.symbol;
          startV.children.push(v.symbol);

          return v;
        }
      });
    }
  }

  function __findPath(vertice, path) {
    var parentSymbol = vertice.parent;

    if(parentSymbol !== 'root') {
      path.unshift(vertice.symbol);
      __findPath(__vertices[parentSymbol], path);
    }
    else {
      path.unshift('root');
      return;
    }
  }

}());