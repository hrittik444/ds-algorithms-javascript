// Queues follow FIFO
// Queues are ideal for Insertion and Removal; not for Searching or Accessng elements

// Insertion: O(1)
// Removing: O(1)
// Searching: O(n)
// Accessing: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue: adding a new Node to end of Queue
    enqueue(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size += 1;
        return this;
    }

    // dequeue: removing a node from beginning of Queue
    dequeue() {
        if (!this.first) return undefined;

        if (this.first === this.last) {
            this.last = null;
        }

        let firstNode = this.first;
        this.first = firstNode.next;
        this.size -= 1;

        return firstNode;
    }
}

let q1 = new Queue();
console.log(q1);

q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
console.log(q1);

q1.dequeue();
q1.dequeue();
console.log(q1);
