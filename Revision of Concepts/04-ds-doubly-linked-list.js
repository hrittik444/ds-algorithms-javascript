/*
Wtf are Doubly Linked Lists anyway?
	Similar to Singly Linked List except, each Node has a value, a pointer to the next Node and a pointer to the previous Node as well (or null).
	Most operations such as insertion at end, or reversal are faster with Doubly Linked Lists.
	However, Doubly Linked Lists consume more memory!
*/
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
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// pop: removing a Node from end of Linked List
	pop() {
		if(!this.head) return undefined;
		var poppedNode = this.tail;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	// shift: removing a Node from beginning of Linked List
	shift() {
		if(this.length === 0) return undefined;
		let oldHead = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null; 
		}
		this.length--;
		return oldHead;
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
		
	}
}


