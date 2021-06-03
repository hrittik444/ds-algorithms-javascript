/*
Wtf are Singly Linked Lists anyway?
	A data structure that contains a head (the beginning of the Linked List), tail (the end of the Linked List) and length property.
	Singly Linked List comprises of Nodes.
	Each Node has a value and a pointer to the next Node (or null).
	
	Linked Lists do not have indexes.
	Randomly accessing an element in a Linked List is not allowed, like in Arrays.
	Since not indexed, insertion and deletion is much faster than an Array.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// push: adding a new Node to end of Linked List
	push(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// pop: removing a Node from end of Linked List
	pop() {
		if(!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while(current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// shift: removing a Node from beginning of Linked List
	shift() {
		if(!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if(this.length === 0) {
			this.head = null; // not needed
			this.tail = null; // sure
		}
		return currentHead;
	}

	// unshift: adding a new Node to beginning of Linked List
	unshift(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// get: retrieving a Node by its index in the Linked List
	get(index) {
		if(index < 0 || index >= this.length) return undefined;
		let i = 0;
		let current = this.head;
		while(i !== index) {
			current = current.next;
			i++;
		}
		return current;
	}

	// set: changing the value of a Node based on its index in the Linked List
	set(index, val) {
		var foundNode = this.get(index);
		if(foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	// insert: adding a new Node to a specific index in the Linked List
	insert(index, val) {
		if(index < 0 || index > this.length) return false;
		// !! makes sure that it returns a boolean instead of an entire list
		if(index === this.length) return !!this.push(val);
		if(index === 0) return !!this.unshift(val);
		let newNode = new Node(val);
		let prevNode = this.get(index-1);
		let nextNode = prevNode.next;

		prevNode.next = newNode;
		newNode.next = nextNode;
		this.length++;
		return true;
	}

	// remove: removing a Node from a specific index in the Linked List
	remove(index) {
		if(index < 0 || index >= this.length) return undefined;
		if(index === this.length-1) return this.pop();
		if(index === 0) return this.shift();
		let prevNode = this.get(index-1);
		let removeNode = prevNode.next;

		prevNode.next = removeNode.next;
		this.length--;
		return removeNode;
	}

	// reverse: reversing a Linked List in place
	reverse() {
		// swapping head and tail
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let nextNode;
		let prevNode = null;

		for(let i = 0; i < this.length; i++) {
			// reversing pointers
			nextNode = node.next;
			node.next = prevNode;

			// moving prevNode and node ahead
			prevNode = node; 
			node = nextNode;
		}
	} 
}

/*
Big O Time of Singly Linked List:
	Insertion: O(n)
	Removing: O(n)
	Searching: O(n)
	Accessing: O(n)
*/



