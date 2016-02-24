const DirectedGraph = {
  init (nodes) {
    const g = Object.create(this);

    // Attributes
    this.adjList = {};
    this.vertices = [];

    // Initialization
    nodes.forEach(node => {
      const { to, label } = node;

      g.adjList[label] = { to };
      g.vertices.push(label);
    });
    g.root = g.vertices[0];

    return g;
  },

  // Add edge from 'v' to 'w'
  addEdge (v, w) {
    adjList[v].push(w);
  },

  deleteNode (label) {
    const index = this.vertices.indexOf(label);
    this.vertices.splice(index, 1);

    delete this.adjList[label];
  },

  isEmpty () {
    return this.vertices.length === 0;
  },

  // If tarLabel === startLabel return false --> this graph is not Directed Acyclic Graph
  isDag (startLabel, tarLabel) {
    if (!startLabel && !tarLabel) {
      startLabel = this.root;
    }
    // console.log(`StartLabel ${startLabel} : tarLabel ${tarLabel}`);
    if (!tarLabel) {
      const dest = this.adjList[startLabel].to;

      for (let i = 0; i < dest.length; i++) {
        if (!this.isDag(dest[i], startLabel)) {
          return false;
        }
      }

      return true;
    } else {

      if (startLabel === tarLabel) {
        return false;
      } else {
        const dest = this.adjList[startLabel].to;

        for (let i = 0; i < dest.length; i++) {
          if (!this.isDag(dest[i], tarLabel)) {
            return false;
          }
        }

        return true;
      }
    }
  },

  // Decrease and conquer
  topologicalSort () {
    if (!this.isDag(this.root)) {
      return new Error('Directed Acyclic Graph cannot use topological sort algorithm.');
    }

    const remainGraph = Object.create(this);

    var orderedList = [];
    var deletedEdges = _deleteEdges(remainGraph);

    while (deletedEdges) {
      orderedList = orderedList.concat(deletedEdges);
      deletedEdges = _deleteEdges(remainGraph);
    }

    return orderedList;
  }
};

// ********************* Helper Functions ******************

function _deleteEdges (remainGraph) {
  if (remainGraph.vertices.length === 0) {
    return false;
  }

  const remainNodes = remainGraph.adjList;
  const remainVertices = remainGraph.vertices;

  // After this for-in, copyVertices just contains ready delete symbol
  const copyVertices = remainVertices.slice(0);
  for (let symbol in remainNodes) {
    remainNodes[symbol].to.forEach(dest => {
      let index = copyVertices.indexOf(dest);
      if (index > 0) {
        copyVertices.splice(index, 1);
      }
    });
  }

  // Delete Edges
  copyVertices.forEach(symbol => {
    delete remainGraph.adjList[symbol];
  });
  remainGraph.vertices = remainVertices.filter(symbol => {
    return copyVertices.indexOf(symbol) < 0;
  });

  return copyVertices;
}

export { DirectedGraph };
