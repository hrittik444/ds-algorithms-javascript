// Stacks follow LIFO
// Stacks are ideal for Insertion and Removal; not for Searching or Accessng elements

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

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push: adding a new Node to top of Stack
    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let firstNode = this.first;
            this.first = newNode;
            newNode.next = firstNode;
        }

        this.size += 1;
        return this;
    }

    // pop: removing a new Node from top of Stack
    pop() {
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

let s1 = new Stack();
console.log(s1);

s1.push(5);
s1.push(4);
s1.push(3);
s1.push(2);
s1.push(1);
console.log(s1);

s1.pop();
s1.pop();
console.log(s1);
