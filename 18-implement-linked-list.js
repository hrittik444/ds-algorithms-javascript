// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// NODE CLASS API:
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// LINKED LIST CLASS API:
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }
    
    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let node0 = this.head;
        let node1 = this.head.next;
        while(node1.next) {
            node0 = node0.next;
            node1 = node1.next;
        }
        node0.next = null;
    }

    insertLast(data) {
        if(!this.head) { 
            this.head = new Node(data);
            return;
        }
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        node.next = new Node(data);
    }

    getAt(index) {
        if(!this.head) { 
            return null;
        }
        let i = 0;
        let node = this.head;
        while(i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    removeAt(index) {
        if(!this.head) { 
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        let i = 0;
        let prevNode = this.head;
        while(i < index - 1) {
            prevNode = prevNode.next;
            i++;
        }
        if(!prevNode || !prevNode.next) {
            return;
        }
        // for handling edge-cases
        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if(!this.head) { 
            this.head = new Node(data);
        }
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        let i = 0;
        let prevNode = this.head;
        while(i < index - 1) {
            prevNode = prevNode.next;
            i++;
            if(!prevNode || !prevNode.next) {
                break;
            }
            // for handling edge-cases
        }
        prevNode.next = new Node(data, prevNode.next);
    }

    forEach(fn) {
        if(!this.head) {
            return;
        }
        let i = 0;
        let node = this.head;
        while(node) {
            fn(node, i);
            node = node.next;
            i++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
    // implementing for ...of loop using generators and iterators
}

// CODE REUSE IN LINKED LISTS:
// insertFirst(data)    ...is the same as...    insertAt(data, 0)
// insertLast(data)     ...is the same as...    insertAt(data, this.size() - 1)
// removeFirst()        ...is the same as...    removeAt(0)
// removeLast()         ...is the same as...    removeAt(this.size() - 1)
// getFirst()           ...is the same as...    getAt(0)
// getLast()            ...is the same as...    getAt(this.size() - 1)
