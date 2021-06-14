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

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        return arr;
    }

    // insert: adding a new elment in the heap
    insert(val) {
        this.values.push(val);

        let currentIndex = this.values.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.values[currentIndex] > this.values[parentIndex]) {
                this.values = this.swap(this.values, currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else break;
        }

        return this;
    }

    // remove: removing the first element of the heap
    remove() {
        this.values = this.swap(this.values, 0, this.values.length - 1);

        let removeElement = this.values.pop();
        let currentIndex = 0;
        let swap = null;

        while (true) {
            let leftChildIndex = (2 * currentIndex) + 1;
            let rightChildIndex = (2 * currentIndex) + 2;
            let largerChildIndex;

            if (this.values[leftChildIndex] && this.values[rightChildIndex]) {
                largerChildIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
            }
            if (!this.values[leftChildIndex]) {
                largerChildIndex = rightChildIndex;
            }
            if (!this.values[rightChildIndex]) {
                largerChildIndex = leftChildIndex;
            }
            if (!this.values[leftChildIndex] && !this.values[rightChildIndex]) break;

            if (this.values[largerChildIndex] > this.values[currentIndex]) {
                this.values = this.swap(this.values, largerChildIndex, currentIndex);
                currentIndex = largerChildIndex;
                swap = true;
            } else swap = false;

            if (swap === false || currentIndex >= this.values.length) break;
        }

        return removeElement;
    }
}

let mbh1 = new MaxBinaryHeap();
mbh1.insert(41);
mbh1.insert(39);
mbh1.insert(33);
mbh1.insert(18);
mbh1.insert(27);
mbh1.insert(1);
mbh1.insert(55);
mbh1.insert(12);
console.log(mbh1);

mbh1.remove();
mbh1.remove();
mbh1.remove();
console.log(mbh1);