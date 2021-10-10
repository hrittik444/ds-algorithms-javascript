class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // addVertex: Adding a vertex to the adjacency list
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // addEdge: Adding an edge going from vertex v1 to v2 in the adjacency list
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }

    // removeEdge: Removing the edge going from vertex v1 to v2 in the adjacency list
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
    }

    // removeVertex: Removing a vertex from the adjacency list
    // !TODO
    removeVertex(vertex) {

    }
}