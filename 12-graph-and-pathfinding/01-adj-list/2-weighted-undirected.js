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

    // removeEdge: Removing an edge between two vertices in the adjacency list
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item.vertex !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item.vertex !== v1);
    }

    // removeVertex: Removing a vertex from the adjacency list
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex.vertex);
        }

        delete this.adjacencyList[vertex];
    }
}

module.exports = Graph;