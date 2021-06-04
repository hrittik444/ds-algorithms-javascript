// Binary Search:
// Take a sorted array and value, return array index where the value exists.
// Uses The Divide and Conquer Pattern.
// Time complexity: O(log n)

// Solution:
function binary(arr, val) {
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

binary([1, 2, 3, 4, 5, 6], 4);