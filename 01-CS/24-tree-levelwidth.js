// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// SOLUTION 1:
function levelWidth(root) {
    const arr = [root, 'stopper'];
    let count = [0];
    while(arr.length > 1) {
        const node = arr.shift();
        if(node === 'stopper') {
            arr.push('stopper');
            count.push(0);    
        } else {
            arr.push(...node.children);
            count[count.length - 1]++; 
        }     
    }
    return count;
}