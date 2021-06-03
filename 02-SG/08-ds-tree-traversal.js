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

	// Breadth First Search
	bfs() {
		let current = this.root;
		let data = [];
		let queue = [];
		queue.push(current);
		while(queue.length) {
			current = queue.shift();
			data.push(current.val);
			if(current.left) queue.push(current.left);
			if(current.right) queue.push(current.right);
		}
		return data;
	}

	// Depth First Search - Pre-Order
	dfsPreOrder() {
		let current = this.root;
		let data = [];
		function traverse(node) {
			data.push(node.val);
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
		}
		traverse(current);
		return data;
	}

	// Depth First Search - Post-Order
	dfsPostOrder() {
		let current = this.root;
		let data = [];
		function traverse(node) {
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
			data.push(node.val);
		}
		traverse(current);
		return data;
	}

	// Depth First Search - In-Order
	dfsInOrder() {
		let current = this.root;
		let data = [];
		function traverse(node) {
			if(node.left) traverse(node.left);
			data.push(node.val);
			if(node.right) traverse(node.right);
		}
		traverse(current);
		return data;
	}
}

/*
BFS vs. DFS:
	Time Complexity of BFS and DFS are same
	Avoid BFS if tree is very wide
	Avoid DFS if tree is very long

	DFS - In-Order returns sorted data, so use it in cases wehere that is a priority
	DFS - Pre-Order can be used when storing/flattenning-out a tree for later duplication
*/