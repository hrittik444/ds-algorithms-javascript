// Find sum of first 'n' numbers, recursively.

// Solution:
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(--num);
}

sumRange(5);