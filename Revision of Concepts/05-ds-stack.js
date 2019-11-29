/*
Wtf are Stacks?
	Data Structures that follow LIFO
*/

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
		if(!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let firstNode = this.first;
			this.first = newNode;
			this.first.next = firstNode;
		}
		this.size++;
		return this;
	}

	// pop: removing a new Node from top of Stack
	pop() {
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
Big O Time of Stacks:
	Insertion: O(1)
	Removing: O(1)
	Searching: O(n)
	Accessing: O(n)
	...Stacks are ideal for Insertion and Removal; not for Searching or Accessng elements
*/














// i'm sure you have a plan
// you strike me as someone who thinks ahead 
// pretty sure you're doing what you're doing cus it does have some kind of bearing/relevance with what you want in future
// amiright?