export const DirectedGraph = {
  adj: {},
  vertices: [],

  init (nodes) {
    var g = Object.create(this);

    nodes.forEach(node => {
      var { to, source } = node;

      g.adj[source] = to;
      g.vertices.push(source);
    });

    return g;
  },

  // Accept two source label as parameter, add edge from v to w
  addEdge (v, w) {
    adj[v].push(w);
  },

  getAdjList () {
    return this.adj;
  },

  getVerts () {
    return this.vertices;
  }
};
