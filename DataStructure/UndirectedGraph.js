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
export default (function() {
   return {
     createInstance () {
       var g = Object.create(this);
       g.adjList = {};
       g.vertices = [];
       return g;
     },

     addEdge (e, v) {
       this.adjList[e].push(v);
       this.adjList[v].push(e);
     },

     addVertice (e) {
       if(this.adjList[e]) {
         return new Error('Vertices already exists');
       }
       else {
         this.vertices.push(e);
         this.adjList[e] = [];
       }
     },

     getAdjVertices (v) {
       return this.adjList[v];
     },

     getVertices () {
       return this.vertices;
     },

     getAdjList () {
       return this.adjList;
     }
   };
}());

