// Sort an array using Selection Sort.
// Time complexity = O(n^2)
// Space complexity = O(1)

// Solution:
function selectionSort(arr) {
    let lowest;
    let swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    for (let i = 0; i < arr.length; i += 1) {
        lowest = i;

        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2, 0, 9, 3, 8, 2, 5, 3, 9, 6]));