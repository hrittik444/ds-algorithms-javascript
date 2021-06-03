/*
Wtf are Trees?
	Data Structures that consist of nodes in a parent/child relationship.
	Each node can point to > 1 nodes (Lists are linear, Trees are non-linear)
	A node can only point to it's children, it canot point to siblings.
	A Tree can only have one root node.
	A Leaf is a node with no children.

	Binary Trees: each parent node can have at most 2 children nodes.
	BST: a Binary Tree where all children lesser than parent are to its left, and all children greater than it are to its right.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// insert: inserting a new node into BST
	insert(val) {
		let newNode = new Node(val);
		if(this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while(true) {
			if(val === current.val) return undefined;
			if(val < current.val) {
				if(current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
			if(val > current.val) {
				if(current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	// find: find a node in BST if it exists
	find(val) {
		if(this.root === null) return false;
		let current = this.root;
		let found = false;
		while(current && found === false) {
			if(val === current.val) found = true;
			if(val < current.val) {
				current = current.left;
			}
			if(val > current.val) {
				current = current.right;
			}
		}
		if(found === false) return false;
		return current;
	}
}

/*
Big O Time of Queues:
	Insertion: O(log n)
	Searching: O(log n)
	...in most cases, not always
*/


