// Sort an array using Merge Sort.
// Time complexity = O(n * log n) i.e. no. of splits = O(log n), no. of comparisons = O(n)
// Space complexity = O(n)

// Solution:
function merge(arr1, arr2) {
    let i = 0, j = 0, result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
        } else {
            result.push(arr2[j]);
            j += 1;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i += 1;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j += 1;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([5, 3, 4, 1, 2, 0, 9, 3, 8, 2, 5, 3, 9, 6]));