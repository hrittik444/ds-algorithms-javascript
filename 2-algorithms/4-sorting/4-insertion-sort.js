// Sort an array using Insertion Sort.
// Time complexity = O(n^2)
// Space complexity = O(1)

// Solution:
function insertionSort(arr) {
    let currVal;

    for (let i = 1; i < arr.length; i += 1) {
        currVal = arr[i];

        // use var j, as it needs to be accessed outside the scope of the loop
        // that's also why in outer swap we use j + 1 since j has decremented once too many in last iteration of inner loop
        for (var j = i - 1; j >= 0 && currVal < arr[j]; j -= 1) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(insertionSort([5, 5, 4, 1, 2, 0, 9, 3, 8, 2, 5, 3, 9, 6]));