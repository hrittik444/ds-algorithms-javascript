// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2


// SOLUTION 1:
const Stack = require('./17-stack');

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(record) {
        this.s1.push(record);
    }

    remove() {
        while(this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }
        let popped = this.s2.pop();

        while(this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        return popped;
    }

    peek() {
        while(this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }
        let peeked = this.s2.peek();

        while(this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        return peeked;
    }
}