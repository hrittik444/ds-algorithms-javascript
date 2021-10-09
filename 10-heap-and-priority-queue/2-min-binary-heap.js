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

            if (this.values[currentIndex] < this.values[parentIndex]) {
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

            if (this.values[largerChildIndex] < this.values[currentIndex]) {
                this.values = this.swap(this.values, largerChildIndex, currentIndex);
                currentIndex = largerChildIndex;
                swap = true;
            }

            else swap = false;

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