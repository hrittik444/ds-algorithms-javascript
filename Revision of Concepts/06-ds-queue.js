/*
Wtf are Stacks?
	Data Structures that follow FIFO
*/

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

	// enqueue: adding a new Node to end Queue
	enqueue(val) {
		let newNode = new Node(val);
		if(!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this;
	}

	// dequeue: removing a node from beginning of Queue
	dequeue() {
		if(!this.first) return null;
		let firstNode = this.first;
		if(this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return firstNode;
	}
}

/*
Big O Time of Queues:
	Insertion: O(1)
	Removing: O(1)
	Searching: O(n)
	Accessing: O(n)
	...Queues are ideal for Insertion and Removal; not for Searching or Accessng elements
*/