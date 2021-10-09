// Dijkstra's Algorithm:
// Finds shortest path between two vertices of a graph.

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start, finish) {
        // both distancesPriorityQueue and distances represent the same info
        // distances: table of shortest distance of node from A
        // distancesPriorityQueue: priority queue containing the data of 'distances' represented as a priority queue, corresponding to the 'visited' array
        // so instead of adding to 'visited' array, we'll dequeue from distancesPriorityQueue
        let distancesPriorityQueue = new PriorityQueue();
        let distances = {};
        let previous = {};

        let shortestPath = [];

        // initializing distances, distancesPriorityQueue and previous
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                distancesPriorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                distancesPriorityQueue.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        // while there are nodes left to to visit
        while (distancesPriorityQueue.values.length) {
            // current node will be the one with lowest priority value i.e. the shortest distance from A
            let currentNode = distancesPriorityQueue.dequeue().val;

            if (currentNode === finish) {
                // if current node is equal to finish node, build up the path to start node
                while (currentNode) {
                    shortestPath.push(currentNode);
                    currentNode = previous[currentNode];
                }
                break;

            } else {
                for (let neighbourIndex in this.adjacencyList[currentNode]) {
                    // find neighbour
                    let neighbourNode = this.adjacencyList[currentNode][neighbourIndex];

                    // calculate new distance of neighbour from start node
                    let calculatedDistance = distances[currentNode] + neighbourNode.weight;

                    // if the newly calculated distance of neighbour from start node, is lesser than previously calculated distance
                    if (calculatedDistance < distances[neighbourNode.node]) {
                        // update 'distances' with this newly calculated distance
                        distances[neighbourNode.node] = calculatedDistance;

                        // update 'distancesPriorityQueue' with the new priority
                        distancesPriorityQueue.enqueue(neighbourNode.node, calculatedDistance);

                        // update 'previous' to reflect from which node, neighbour node was reached
                        previous[neighbourNode.node] = currentNode;
                    }
                }
            }
        }

        return shortestPath.reverse();
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        return arr;
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);

        let currentIndex = this.values.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.values[currentIndex].priority < this.values[parentIndex].priority) {
                this.values = this.swap(this.values, currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else break;
        }

        return this;
    }

    dequeue() {
        this.values = this.swap(this.values, 0, this.values.length - 1);

        let removeElement = this.values.pop();
        let currentIndex = 0;
        let swap = null;

        while (true) {
            let leftChildIndex = (2 * currentIndex) + 1;
            let rightChildIndex = (2 * currentIndex) + 2;
            let smallerChildIndex;

            if (this.values[leftChildIndex] && this.values[rightChildIndex]) {
                smallerChildIndex = this.values[leftChildIndex].priority < this.values[rightChildIndex].priority ? leftChildIndex : rightChildIndex;
            }
            if (!this.values[leftChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }
            if (!this.values[rightChildIndex]) {
                smallerChildIndex = leftChildIndex;
            }
            if (!this.values[leftChildIndex] && !this.values[rightChildIndex]) break;

            console.log(`${!this.values[leftChildIndex]}, ${!this.values[rightChildIndex]}, ${smallerChildIndex}`)

            if (this.values[smallerChildIndex].priority < this.values[currentIndex].priority) {
                this.values = this.swap(this.values, smallerChildIndex, currentIndex);
                currentIndex = smallerChildIndex;
                swap = true;
            } else swap = false;

            if (swap === false || currentIndex >= this.values.length) break;
        }

        return removeElement;
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));





