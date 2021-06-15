// Priority Queue:
// Implementing a Priority Queue using Min Binary Heap

// Insertion: O(log n)
// Removing: O(log n)
// Searching: O(n)
// ...even in worst case.
// Binary Heaps are not ideal for searching.

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
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

    // enqueue: adding a new elment in the priority queue (min binary heap)
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

    // dequeue: removing the first element of the priority queue (min binary heap)
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

let pq1 = new PriorityQueue();
pq1.enqueue('a', 41);
pq1.enqueue('b', 39);
pq1.enqueue('c', 33);
pq1.enqueue('d', 18);
pq1.enqueue('e', 27);
pq1.enqueue('f', 1);
pq1.enqueue('g', 55);
pq1.enqueue('g', 12);
console.log(pq1);

pq1.dequeue();
pq1.dequeue();
pq1.dequeue();
console.log(pq1);