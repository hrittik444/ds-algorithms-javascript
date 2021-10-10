// Below is an implementation of an weighted, undirected graph using Adjacency List

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // addVertex: Adding a vertex to the adjacency list
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // addEdge: Adding an edge between two vertices in the adjacency list
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ vertex: v2, weight });
        this.adjacencyList[v2].push({ vertex: v1, weight });
    }
}

module.exports = Graph;