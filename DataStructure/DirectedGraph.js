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

  deleteNode (label) {
    const index = this.vertices.indexOf(label);
    this.vertices.splice(index, 1);

    delete this.adjList[label];
  },

  // Add edge from 'v' to 'w'
  addEdge (v, w) {
    adjList[v].push(w);
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
    const orderedList = [];
    const remainGraph = Object.create(this);
    const remainAdjList = remainGraph.adjList;
    const remainVertices = remainGraph.vertices;

    // Check whether exists incoming edge from root node
    for (let i = 0; i < remainVertices.length; i++) {
      console.log(remainVertices);
      const label = remainVertices[i];
      // Find whether remaining node has edge to 'node'
      for (let j = i + 1; j < remainVertices.length; j++) {
        const remainLabel = remainVertices[j];
        if (remainAdjList[remainLabel].to.indexOf(label) >= 0) {
          // There exists edge coming in
          break;
        }
      }
      // No incoming edge, delete this node
      console.log(`${label} has been removed from list...`);
      i -= 1;
      orderedList.push(label);
      remainGraph.deleteNode(label);
    }

    return orderedList;

    // var list = {};
    //
    // for (let i = 0; i < vertices.length; i++) {
    //   // Vertice Label
    //   let label = vertices[i];
    //   // Start Node
    //   let node = adjList[label];
    //   // For each node in adjList
    //   for (let symbole in adjList) {
    //     if (adjList.hasOwnProperty(symbole)) {
    //       // console.log(symbole);
    //     }
    //   }
    // }
  }
};

export { DirectedGraph };
