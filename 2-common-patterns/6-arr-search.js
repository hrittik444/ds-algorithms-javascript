// The Divide and Conquer Pattern:
// Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1
// This is an example of Binary Search.

function search(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (val < arr[mid]) right = mid - 1;
        else if (val > arr[mid]) left = mid + 1;
        else return mid;
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));