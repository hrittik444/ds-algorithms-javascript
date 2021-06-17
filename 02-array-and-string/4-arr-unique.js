// The Multiple Pointers Pattern:
// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

function countUniqArr(arr) {
    let i = 0, j = 1;

    while (j <= arr.length) {
        if (arr[i] === arr[j]) {
            j += 1;
        } else {
            i += 1;
            arr[i] = arr[j];
        }
    }
    return i;
}

console.log(countUniqArr([-2, -1, -1, 0, 1]));