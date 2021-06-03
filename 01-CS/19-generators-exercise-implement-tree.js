class Tree {
	constructor(value=null, children=[]) {
		this.value = value;
		this.children = children;
	}

	*printValues() {
		yield this.value;

		for(let child of this.children) {
			yield *this.children.printValues();
		}
		// traverses the tree using DFS
		// first yields the value of head node using generator
		// then yields values of child nodes using subsequent generators
		// notice the recursive behaviour
	}
}

const tree = new Tree(1, [
	new Tree(2, [new Tree(4)]),
	new Tree(3)
]);
// tree structure:
// 1__
// |  |
// 2  3
// |
// 4

const values = [];
for(let value of tree.printValues()) {
	values.push(value);
}

values;
// returns [1,2,4,3]
// since DFS


