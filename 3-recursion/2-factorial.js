// Find factorial, recursively.

// Solution:
function factorial(num) {
    if (num === 1) return num;
    return num * factorial(--num);
}

factorial(2);