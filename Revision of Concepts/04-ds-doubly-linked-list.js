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
		if(index < 0 || index >= this.length) return null;
		let count, current;
		if(index <= this.length/2) {
			count = 0;
			current = this.head;
			while(count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length-1;
			current = this.tail;
			while(count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	// set: changing the value of a Node based on its index in the Linked List
	set(index, val) {
		let foundNode = this.get(index);
		if(foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	// insert: adding a new Node to a specific index in the Linked List
	insert(index, val) {
		if(index < 0 || index > this.length) return false;
		if(index === 0) return !!this.unshift(val);
		if(index === this.length) return !!this.push(val);
		let newNode = new Node(val);
		let prevNode = this.get(index-1);
		let nextNode = prevNode.next;
		
		prevNode.next = newNode, newNode.prev = prevNode;
		newNode.next = nextNode, nextNode.prev = newNode;
		this.length++;
		return true;
	}

	// remove: removing a Node from a specific index in the Linked List
	remove(index) {
		if(index < 0 || index >=this.length) return undefined;
		if(index === 0) return this.shift();
		if(index === this.length-1) return this.pop();
		let prevNode = this.get(index-1);
		let removeNode = prevNode.next;
		let nextNode = removeNode.next;

		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		this.length--;
		return removeNode;
	}

	// reverse: reversing a Linked List in place
	reverse() {

	}
}

/*
Big O Time of Singly Linked List:
	Insertion: O(1)
	Removing: O(1)
	Searching: O(n)
	Accessing: O(n)
	...but Doubly Linked LIsts take up more memory compared to Singly Linked Lists cus of the extra .prev pointer
*/

