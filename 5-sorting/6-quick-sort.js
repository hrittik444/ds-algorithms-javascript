// Sort an array using Quick Sort.
// Time complexity = O(n * log n) i.e. no. of decompositions = O(log n), no. of comparisons = O(n)
// Space complexity = O(log n)
// If array is already sorted, Quick Sort will take O(n^2)
// So change start in pivot to midpoint of arr or some random element in arr, can affect complexity depending on the state of the array

function pivot(arr, start = 0, end = arr.length - 1) {
    let swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i += 1) {
        if (arr[i] < pivot) {
            swapIndex += 1;
            swap(arr, i, swapIndex);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([5, 3, 4, 1, 2, 0, 9, 3, 8, 2, 5, 3, 9, 6]));