// Fibonacci sequence with Dynamic Programming, O(n)
// Much better than simple recursive solution, O(2^n)

// Memoized version may cause stack overflow for large numbers due to too many unresolved recursive calls
// But this won't happen for Tabulated version
// So space complexity of Tabulated version is much better, but time complexity of both is O(n)

// Memoization:
function fibMemo(num, memo = {}) {
    if (memo.hasOwnProperty(num)) return memo[num];
    if (num <= 2) return 1;

    let result = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
    memo[num] = result;
    return result;
}

// Tabulation:
function fibTab(num) {
    let table = {};

    for (let i = 1; i <= num; i += 1) {
        if (i <= 2) table[i] = 1;
        else table[i] = table[i - 1] + table[i - 2];
    }
    return table[num];
}

console.log(fibMemo(45));
console.log(fibTab(45));
