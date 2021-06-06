// Sort an array using Bubble Sort.
// Time complexity = O(n^2)
// Space complexity = O(1)

// Solution:
function bubbleSort(arr) {
    let noSwaps;
    let swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        noSwaps = true;

        for (let j = 0; j < i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([5, 3, 4, 1, 2, 0, 9, 3, 8, 2, 5, 3, 9, 6]);