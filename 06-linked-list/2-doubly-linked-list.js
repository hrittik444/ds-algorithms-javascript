// Doubly Linked List
// Similar to Singly Linked List except, each Node has a value, a pointer to the next Node and a pointer to the previous Node as well (or null).
// Most operations such as insertion at end, or reversal are faster with Doubly Linked Lists.
// However, Doubly Linked Lists consume more memory compared to Singly Linked Lists cus of the extra .prev pointer.

// Insertion: O(1)
// Removing: O(1)
// Searching: O(n)
// Accessing: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push: adding a new Node to end of Linked List
    push(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    // pop: removing a Node from end of Linked List
    pop() {
        if (!this.head) return undefined;

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }

        this.length -= 1;
        return poppedNode;
    }

    // shift: removing a Node from beginning of Linked List
    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
        }

        this.length -= 1;
        return oldHead;
    }

    // unshift: adding a new Node to beginning of Linked List
    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length += 1;
        return this;
    }

    // get: retrieving a Node by its index in the Linked List
    // more optimized that get for Singly Linked List
    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let i, current;

        if (index <= this.length / 2) {
            i = 0;
            current = this.head;

            while (i !== index) {
                current = current.next;
                i += 1;
            }
        } else {
            i = this.length - 1;
            current = this.tail;

            while (i !== index) {
                current = current.prev;
                i -= 1;
            }
        }
        return current;
    }

    // set: changing the value of a Node based on its index in the Linked List
    set(val, index) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert: adding a new Node to a specific index in the Linked List
    insert(val, index) {
        if (index < 0 || index > this.length) return undefined;

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;

        this.length += 1;
        return true;
    }

    // remove: removing a Node from a specific index in the Linked List
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;
        let nextNode = removeNode.next;

        prevNode.next = nextNode, nextNode.prev = prevNode;

        this.length -= 1;
        return removeNode;
    }
}

let dll1 = new DoublyLinkedList();
console.log(dll1);

dll1.push(1);
dll1.push(2);
dll1.push(3);
dll1.push(4);
dll1.push(5);
console.log(dll1);

dll1.pop();
dll1.pop();
console.log(dll1);
dll1.push(4);
dll1.push(5);

dll1.shift();
dll1.shift();
console.log(dll1);

dll1.unshift(2);
dll1.unshift(1);
console.log(dll1);

console.log(dll1.get(3));
console.log(dll1.get(0));
console.log(dll1.get(dll1.length - 1));

dll1.set('x', 2);
console.log(dll1);
dll1.set(3, 2);

dll1.insert(2.5, 2);
dll1.insert(0.5, 0);
dll1.insert(5.5, dll1.length);
console.log(dll1);

dll1.remove(0);
dll1.remove(2);
dll1.remove(dll1.length - 1);
console.log(dll1);
