class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  removeNode(value) {
    delete this.nodes[value];
    for (const key in this.nodes) {
      if (this.nodes[key].includes(value)) {
        let index = this.nodes[key].indexOf(value);
        this.nodes[key].splice(index, 1);
      }
    }
  }

  contains(value) {
    return !!this.nodes[value];
  }

  addEdge(vert1, vert2) {
    if (!this.nodes[vert1] || !this.nodes[vert2]) {
      return "Invalid node value";
    }
    if (
      !this.nodes[vert1].includes(vert2) &&
      !this.nodes[vert2].includes(vert1)
    ) {
      this.nodes[vert1].push(vert2);
      this.nodes[vert2].push(vert1);
    }
  }

  removeEdge(vert1, vert2) {
    let index1 = this.nodes[vert1].indexOf(vert2);
    this.nodes[vert1].splice(index1, 1);
    let index2 = this.nodes[vert2].indexOf(vert1);
    this.nodes[vert2].splice(index2, 1);
  }
}

module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
