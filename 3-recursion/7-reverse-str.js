// Reverse a string, recursively.

// Solution:
function reverseStr(str, result) {
    if (str.length <= 0) return result;

    result = result.concat(str.slice(-1));
    return reverseStr(str.slice(0, str.length - 1), result);
}

function reverse(str) {
    return reverseStr(str, '');
}

reverse('hello')