// Binary Heap:
// Each node can have at most 2 children.
// No ordering between siblings, unlike BST.
// Max Binary Heap: Parent nodes are always larger than child nodes.
// Min Binary Heap: Parent nodes are always smaller than child nodes.
// In Binary Heaps, the left child is always added first.
// Heaps are used to implement Priority Queues abd in Graph Traversal algorithms.

// Storing Binary Heaps in an array:
// For any index of an array n: left child is at index 2n + 1 and right child is at index 2n + 2 
// For any index of an array n: parent is at index Math.floor((n - 1) / 2)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // insert: adding a new elment in the heap
    insert(val) {
        this.values.push(val);

        let swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        let currentIndex = this.values.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.values[currentIndex] > this.values[parentIndex]) {
                swap(this.values, currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else break;
        }

        return this;
    }
}

let mbh1 = new MaxBinaryHeap();
mbh1.insert(41);
mbh1.insert(39);
mbh1.insert(33);
mbh1.insert(18);
mbh1.insert(27);
mbh1.insert(12);
mbh1.insert(55);
mbh1.insert(1);
console.log(mbh1);