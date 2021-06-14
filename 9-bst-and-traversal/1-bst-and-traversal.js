// Trees:
// Data Structures that consist of nodes in a parent/child relationship.
// Each node can point to > 1 nodes (Lists are linear, Trees are non-linear)
// A node can only point to it's children, it canot point to siblings.
// A Tree can only have one root node.
// A Leaf is a node with no children.

// Binary Trees:
// Each parent node can have at most 2 children nodes.

// Binary Search Trees: 
// A Binary Tree where all children lesser than parent are to its left, and all children greater than it are to its right.

// Insertion: O(log n)
// Searching: O(log n)
// ...in most cases, not always, in worst case it will be O(n)

// BFS vs. DFS:
// Time Complexity of BFS and DFS are same
// Avoid BFS if tree is very wide
// Avoid DFS if tree is very long

// DFS - In-Order returns sorted data, so use it in cases wehere that is a priority
// DFS - Pre-Order can be used when storing/flattenning-out a tree for later duplication

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

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (val === currentNode.val) {
                return undefined;
            } else if (val < currentNode.val) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // find: find a node in BST if it exists
    find(val) {
        if (this.root === null) {
            return false;
        }

        let currentNode = this.root;
        let found = false;

        while (currentNode && found === false) {
            if (val === currentNode.val) {
                found = true;
            } else if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            }
        }

        if (found === false) return false;
        return currentNode;
    }

    // Breadth First Search
    bfs() {
        let currentNode = this.root;
        let queue = [], data = [];

        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            data.push(currentNode.val);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return data;
    }

    // Depth First Search - Pre-Order
    dfsPreOrder() {
        let currentNode = this.root;
        let data = [];

        (function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        })(currentNode);

        return data;
    }

    // Depth First Search - Post-Order
    dfsPostOrder() {
        let currentNode = this.root;
        let data = [];

        (function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        })(currentNode);

        return data;
    }

    // Depth First Search - In-Order
    dfsInOrder() {
        let currentNode = this.root;
        let data = [];

        (function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        })(currentNode);

        return data;
    }
}

let bst1 = new BinarySearchTree();
bst1.root = new Node(10);
console.log(bst1);

bst1.insert(5);
bst1.insert(15);
bst1.insert(7);
bst1.insert(14);
bst1.insert(21);
console.log(bst1);

bst1.find(7);
bst1.find(21);

bst1.bfs();
bst1.dfsPreOrder();
bst1.dfsPostOrder();
bst1.dfsInOrder();
