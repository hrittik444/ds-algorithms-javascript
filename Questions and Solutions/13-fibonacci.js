// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// SOLUTION 1:
function fib(n) {
    let fib = [0, 1];
    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n];
}

// SOLUTION 2 (recursion):
function fib(n) {
    if(n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
// exponential time O(2^N)
// just an experimental solution, as a demonstaration of recursion


// so how can we improve the effeciency of the above solution? 
// by 'memoization'
    // storing the arguments of each function call along with the result
    // if the function is called again with the same arguments...
    // then the pre-computed result is returned, rather than running the function again


// SOLUTION 3 (recursion + memoization):
function fibMem(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function fibRec(n) {
    if(n < 2) {
        return n;
    } else {
        return fibRec(n - 1) + fibRec(n - 2);
    }
}

const fib = fibMem(fibRec);