// Graphs can be stored as Adjacency Matrix (2D Array) or as Adjacency List (Hash Map).

// Where v = no. of vertices, e = no. of edges:
// Add vertex:      Adjacency List = O(1),      Adjacency Matrix = O(v^2)
// Add edge:        Adjacency List = O(1),      Adjacency Matrix = O(1)
// Remove vertex:   Adjacency List = O(v + e),  Adjacency Matrix = O(v^2)
// Remove edge:     Adjacency List = O(e),      Adjacency Matrix = O(1)
// Query:           Adjacency List = O(v + e),  Adjacency Matrix = O(1)
// Storage space:   Adjacency List = O(v + e),  Adjacency Matrix = O(v^2)

// Adjacency List:
// Can take up less space (in sparse graphs, i.e. less no. of edges) 
// Faster to iterate over all edges
// Can be slower to lookup specific edge

// Adjacency Matrix:
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge

// Below is an implementation of an undirected graph using Adjacency List

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // addVertex: Adding a vertex to the adjacency list
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // addEdge: Adding an edge between two vertices in the adjacency list
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // removeEdge: Removing an edge between two vertices in the adjacency list
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
    }

    // removeVertex: Removing a vertex from the adjacency list
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // recursiveDepthFirstTraversal: Recursive Depth First Traversal of adjacency list, O(n)
    recursiveDepthFirstTraversal(start) {
        let visited = {}, result = [];
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) return dfs(neighbour);
            });
        })(start);

        return result;
    }

    // iterativeDepthFirstTraversal: Iterative Depth First Traversal of adjacency list, O(n^2)
    iterativeDepthFirstTraversal(start) {
        let visited = {}, result = [];
        let stack = [start];
        let vertex;

        while (stack.length) {
            vertex = stack.pop();

            if (visited[vertex] !== true) {
                visited[vertex] = true;
                result.push(vertex);
            }

            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) stack.push(neighbour);
            });
        }

        return result;
    }

    // recursiveBreadthFirstTraversal: Recursive Breadth First Traversal of adjacency list, O(n)
    recursiveBreadthFirstTraversal(start) {
        let visited = {}, result = [];
        let queue = [start];
        let vertex;
        let adjacencyList = this.adjacencyList;

        (function bfs() {
            vertex = queue.shift();

            if (vertex) {
                if (visited[vertex] !== true) {
                    visited[vertex] = true;
                    result.push(vertex);
                }

                adjacencyList[vertex].forEach(neighbour => {
                    if (!visited[neighbour]) queue.push(neighbour);
                });

                bfs();
            }

        })();

        return result;
    }

    // iterativeBreadthFirstTraversal: Iterative Breadth First Traversal of adjacency list, O(n^2)
    iterativeBreadthFirstTraversal(start) {
        let visited = {}, result = [];
        let queue = [start];
        let vertex;

        while (queue.length) {
            vertex = queue.shift();

            if (visited[vertex] !== true) {
                visited[vertex] = true;
                result.push(vertex);
            }

            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) queue.push(neighbour);
            });
        }

        return result;
    }
}

let g1 = new Graph();
console.log(g1);

g1.addVertex("A");
g1.addVertex("B");
g1.addVertex("C");
g1.addVertex("D");
g1.addVertex("E");
g1.addVertex("F");
console.log(g1);

g1.addEdge("A", "B");
g1.addEdge("A", "C");
g1.addEdge("B", "D");
g1.addEdge("C", "E");
g1.addEdge("D", "E");
g1.addEdge("D", "F");
g1.addEdge("E", "F");
console.log(g1);

g1.removeEdge("A", "C");
console.log(g1);

g1.removeVertex("B");
console.log(g1);

g1.recursiveDepthFirstTraversal("A");
g1.iterativeDepthFirstTraversal("A");

g1.recursiveBreadthFirstTraversal("A");
g1.iterativeBreadthFirstTraversal("A");